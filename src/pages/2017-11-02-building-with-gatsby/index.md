---
title: Building my personal site with Gatsby    
date: "2017-11-02"
path: "/personal-website-gatsby/"
author: Hugh Simpson
image: "./Placeholder.png"
excerpt: Building my personal site and blog with Gatsby - a static site generator for React.
---

My preview personal site was little more than a holding page so I've been intending to get round to building a new one. React was the obvious choice but I wanted to be sure performance was as good as, or better, than before. Fortunately, Gatsby makes it trivial to develop siatic websites with React. 

There are a number of alternatives, including [Next.js](https://github.com/zeit/next.js/) (which announced static export support in 3.0) and the relatively new [React Static](https://github.com/nozzle/react-static) which describes itself as 'A progressive static-site framework for React'. But for me Gatsby seemed like the best choice for a number of reasons. I'll briefly outline the reasons why below, before highlighting a couple fo lessons learned from the process. 

# Gatsby

# GraphQL

Gatsby uses GraphQL to pull data into it's components. 

[Graph*i*QL](https://github.com/graphql/graphiql) in an in-browser IDE for GraphQL which allows you to run queries and check exactly what data is available to query. I frequently found myself using the autocomplete feature (Ctrl + Space) to see if the data I needed was already available.

Gatsby allows you to fetch data from anywhere, and there a number of Source plugins to make this simple. The `gatsby-source-filesystem` plugin to fetch data directly about local files: 

```javascript
yarn add gatsby-source-filesystem
```

Then modify `gatsby-config.js` to include (where `path` is the path to your files):

```javascript
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
  ]
```

This brings the files into Gatsby's data system, but we now need a transformer plugin to query the data inside those files. As blog posts are written in Markdown for convenience, we can need to install `gatsby-transformer-remark` to *transform* the Markdown files.

```javascript
yarn add gatsby-transformer-remark
```

Again, modify `gatsby-config.js` to include:

```javascript
  plugins: [
      resolve: `gatsby-transformer-remark`,
      options: {
        // Left empty for clarity
        plugins: []
      }
  ]
```

We now have all we need in place to query data, a simple example might include the following. 

```javascript
export const query = graphql`
  query FilesQuery {
    allFile {
      edges {
        node {
          id
        }
      }
    }
  }
 ` 
```

Which will return all files in the directory that was specified to `gatsby-source-filesystem`. A more complex, and useful, example might be the following:

```javascript
export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "MMMM Do, YYYY")
            title
            excerpt
          }
        }
      }
    }
  }
`
```

The above query returns:

```javascript
{
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "frontmatter": {
              "path": "/personal-website-gatsby/",
              "date": "November 2nd, 2017",
              "title": "Building my personal site with Gatsby",
              "excerpt": "Building my personal site and blog with Gatsby - a static site generator for React."
            }
          }
        }
      ]
    }
  }
}
```

Here we've returned the frontmatter of each Markdown file in the pages folder - much more useful! Adding the sort argument (`sort: {fields: [frontmatter___date], order: DESC})`) returns the data exactly how it's needed - ordered by date. 

A more detail explanation, including how pages can be programmatically created from data, can be found in part four of the [Gatsby turorial](https://www.gatsbyjs.org/tutorial/part-four/).

# Styled Components

styled-components allows you to define your styles alongside normal React components using tagged template literals (this [talk](https://www.youtube.com/watch?v=bIK2NwoK9xk) is a great introduction to styled components).

Conveniently, Gatsby supports styled-components through gatsby-plugin-styled-components, a simple Gatsby plugin with built-in server side rendering support. 

Simply install: 
```javascript
yarn add gatsby-plugin-styled-components
``` 
and edit your `gatsby-config.js` file to include the following:

```javascript
plugins: [
  `gatsby-plugin-styled-components`,
]
```

## Themes

Theming is supported though a `<ThemeProvider>` wrapper component that exposes your theme to all components beneath it.

With Gatsby it's convenient to wrap page layouts with `<ThemeProvider>` like:

```javascript
import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme.js'

class Template extends Component {
  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={theme}>
        {children()}
      </ThemeProvider>
    )
  }
}

export default Template
```

Theme variables are accessed in styled-component template literals as: 

```javascript
color: ${props => props.theme.main}
```

## Global styles

If you're not familiar with styled-components, you can use the injectGlobal method to write global CSS directly to the stylesheet (rather than returning a component). 

```javascript
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    box-sizing: border-box;
  }
`
```

# What's next?