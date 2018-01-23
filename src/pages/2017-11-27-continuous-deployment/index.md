---
title: Continuous deployment with Travis CI and Docker
date: "2017-11-27"
path: "/continuous-deployment/"
author: Hugh Simpson
excerpt: Continuous delivery with Travis CI, Docker and watchtower.
---

*Continuous delivery with Travis CI, Docker and watchtower.*

After launching my new personal site, I quickly became tired of manually building and deploying the site for every change. The process looked something like this: 

- Checkout master branch
- Run Gatsby build 
- Manually transfer production build with rsync

There's nothing particularly wrong with this workflow, but I wanted to make the whole process much easier. What I really want is to: 

- Merge feature / blog branch with master 
- Automated build
- Automated deploy

For a simple site, it's relatively simple to achieve - I did so using [Travis CI](https://docs.travis-ci.com/), [Docker](https://docs.docker.com/get-started/) and [Watchtower.](https://github.com/v2tec/watchtower)

# The build

## Travis CI
Travis CI is a continuous integration platfrom which automates the process of testing and building code changes. 

All you need to get started is: 

- A GitHub login 
- Project hosted on GitHub
- Working build / test script

When a build is triggered Travis will clone the project into a new virtual environment and carry out a set of tasks defined by a `.travis.yml` file. Travis will use the `.travis.yml` file - located in the root of the project - to determine how the build should execute. This can be very minimalistic or more complex with lots of customisation of the build lifecycle. 

The following tells Travis CI that this is a Node project - and to use the latest version. We're also specifying that yarn cache should be stored between build (so that packages do not need to be be downloaded for each build):
```yml
language: node_js
node_js:
  - node

cache:
  yarn: true
```

Next we specify that only changes to the master branch should trigger a build, install dependencies with yarn and finally run the build script. All together, our .travis.yml file looks like:
```yml
language: node_js
node_js:
  - node

cache:
  yarn: true

branches:
  only:
  - master

install: yarn install

script: yarn run build

```
Travis CI can also automate other parts of the delivery workflow, such as preparing deployments after a successful build. It's actually trivial to configure Travis CI to build a new Docker image and then push that image to a remote repository. Add the following to `.travis.yml` to use Docker: 

```yml
sudo: required

services:
  - docker
```

## Docker

[Docker](https://docs.docker.com/get-started/) provides a way to run applications in isolated containers, packaged with dependancies and libraries. One way to think about containers is to compare them to a virtual machine. Virtual machines run guest operating systems with only virtual access to the host machines resources. Docker containers are conceptually similar, but get native access the host machine's kernel - resulting in much better performance characteristics. Containers are runtime instances of Docker images, which are stand-alone, executable packages that contain everything needed to run - the code, a runtime, libraries, environment variables, and config files.

This is great for deploying websites and applications as it means individual sites can be packaged into server-agnostic executables which can be automated into a continuous deployment workflow. 

Dockerfiles are used to automate the build of a Docker image. The `docker build` command will cause Docker to excute the commands defined in the Dockerfile. The first command `FROM` initialises a new build and sets the base image. In this case I'm pulling the official [nginx image.](https://hub.docker.com/_/nginx/) The next commands simply copy the result of my Gatsby build into the nginx public web directory and expose ports 80 and 443 (more on this later).
```
FROM nginx
COPY public /usr/share/nginx/html
EXPOSE 80 443
```

## Completing the Travis CI build

Now we've created our Dockerfile we can go back to our `.travis.yml` file and add our Docker commands. Running `docker build` and `docker push hsimpson/hughsimpson.me` will build the Docker image and push it to my Docker hub Repository - using `docker login` will authenticate the push command. The password and username as passed in as environment variables which are easily configuered in the Travis CI [Repository Settings.](https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings)

The completed `.travis.yml` file looks like this:

```yml
language: node_js
node_js:
  - node

cache:
  yarn: true

sudo: required

services:
  - docker
  
branches:
  only:
  - master

install: yarn install

script: yarn run build

after_script: 
  - docker build --tag hsimpson/hughsimpson.me.
  - docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"
  - docker push hsimpson/hughsimpson.me
```

# Configuring the server

## Digital Ocean

I'm using Digital Ocean to hosting the site - conveniently Digital Ocean offer a one-click install of [Docker on Ubuntu](https://www.digitalocean.com/products/one-click-apps/docker/). 

## nginx-proxy
The Docker image created during the Travis CI build is initialised from an nginx base image so can be run on directly on the server. However, what if I want to run multiple nginx containers on the same droplet? This wouldn't be possible as only one container can bind the host ports at a time. 

`nginx-proxy` resolves this problem by sitting in front of any other nginx containers - automatically generating reverse proxy configs. 

Any containers being proxied must expose the port to be proxied, this can be done using `EXPOSE` in the Dockerfile, eg:

```
EXPOSE 80 443
```

## Generating SSL certificates with letsencrypt-nginx-proxy-companion
[Let's Encrypt](https://letsencrypt.org/) - a free, automated and open CA - is the best way to generate SSL certificates for site. `letsencrypt-nginx-proxy-companion` is a companion container for `nginx-proxy` which automates the creation and renewal of Let's Encrypt certificates. 

## Watchtower
Finally, [Watchtower](https://github.com/v2tec/watchtower) monitors any running Docker containers, watching for changes to the images they were started from. If a change is found, watchtower will restart the container with the updated image. 

Whenever my Travis CI build creates a new Docker image and pushes to the registry, watchtower will pull the new image, gracefully shutdown and restart the container. When restarting the container, watchtower will use the same options it was deployed with originally. 

Watchtower is itself packaged as a Docker image, which makes installation simple - just pull the `v2tec/watchtower` image.

## Complete process
All that's left is to run the following on the server toconfigure `nginx-proxy`, `letsencrypt-nginx-proxy-companion` and `watchtower` (and the site).

Initialise `nginx-proxy`, with the cert path (in this case `/etc/ssl/certs`):
```
sudo docker run -d -p 80:80 -p 443:443 \
    --name nginx-proxy \
    -v /etc/ssl/certs:/etc/nginx/certs:ro \
    -v /etc/nginx/vhost.d \
    -v /usr/share/nginx/html \
    -v /var/run/docker.sock:/tmp/docker.sock:ro \
    --label com.github.jrcs.letsencrypt_nginx_proxy_companion.nginx_proxy \
    jwilder/nginx-proxy
```
Then run `nginx-letsencrypt`, ensuring you match the cert path:
```
sudo docker run -d \
    --name nginx-letsencrypt \
    -e "DEBUG=true" \
    -v /etc/ssl/certs:/etc/nginx/certs:rw \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    --volumes-from nginx-proxy \
    jrcs/letsencrypt-nginx-proxy-companion:latest
```
Initialise the website, specifying `VIRTUAL_HOST`, `LETSENCRYPT_HOST` and `LETSENCRYPT_EMAIL`:
```
sudo docker run -d \
    --name hughsimpson.me \
    -e "VIRTUAL_HOST=hughsimpson.me, www.hughsimpson.me" \
    -e "LETSENCRYPT_HOST=hughsimpson.me, www.hughsimpson.me" \
    -e "LETSENCRYPT_EMAIL=email@email.com" \
    hsimpson/hughsimpson.me:latest
```
Generate the certs (first time only):
```
sudo docker exec nginx-letsencrypt /app/force_renew
```
Initiate watchtower (specifying an interval of 30 seconds):
```
sudo docker run -d \
  --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  v2tec/watchtower --interval 30
```
## Summary
Pushing to the master branch now initiates a Travis CI build, which, if successfull, results in a new Docker image being pushed to the repository. Watchtower, now running on the server, will detect the change and gracefully restart the container. 
