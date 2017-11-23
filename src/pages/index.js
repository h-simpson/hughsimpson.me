import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import theme from '../styles/theme.js'
import Container from '../components/Container'
import Card from '../components/Card'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import GenericLink from '../components/GenericLink'
import RouterLink from '../components/RouterLink'
import Button from '../components/Button'
import Modal from '../components/Modal'
import Title from '../components/Title'

class Index extends React.Component {
  state = {
    modlalIsOpen: true,
    contactFormSubmitted: false
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen })
  }

  handleKeyDown = e => {
    if (e.keyCode === 27 && this.state.modalIsOpen) {
      this.setState({ modalIsOpen: !this.state.modalIsOpen })
    }
  }

  handleContactSubmit = () => {
    this.setState({ contactFormSubmitted: true })
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div onKeyDown={this.handleKeyDown}>
        <Helmet>
          <title>{siteTitle}</title>
          <meta
            name="description"
            content="Digital project manager with an interest for design, programming and all things digital."
          />
        </Helmet>
        <Modal isOpen={this.state.modalIsOpen} handleClose={this.toggleModal}>
          <Title>Contact</Title>
          {this.state.contactFormSubmitted ? <p>Submitted</p> : <ContactForm onSubmit={this.handleContactSubmit} />}
        </Modal>
        <Hero
          title="Hugh Simpson"
          paragraph="Digital project manager with an interest for design, programming and all things digital."
        >
          <Button onClick={this.toggleModal}>Get in Touch</Button>
        </Hero>
        <ProjectContainer>
          <ProjectCard>
            <ProjectTitle>Personal website</ProjectTitle>
            <ProjectExcerpt>My personal website built with Gatsby - a static site generator for React.</ProjectExcerpt>
            <RouterLink to="/personal-website-gatsby/">Read more</RouterLink>
            <ProjectLink href="https://github.com/h-simpson/hughsimpson.me" target="_blank" rel="nofollow noopener">
              View code
            </ProjectLink>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Alexa Samsung Remote</ProjectTitle>
            <ProjectExcerpt>
              An Alexa server and companion TV remote client to interact with 2016 Samsung TVs by voice commands.
            </ProjectExcerpt>
            <ProjectLink href="https://github.com/h-simpson/alexa-samsung-tv" target="_blank" rel="nofollow noopener">
              View code
            </ProjectLink>
          </ProjectCard>
        </ProjectContainer>
      </div>
    )
  }
}

export default Index

const ProjectContainer = Container.extend`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :last-child {
    margin-bottom: 10vh;
  }
`

const ProjectCard = Card.extend`
  width: 90vw;
  min-height: 20vh;
  @media (min-width: 770px) {
    width: 60vw;
    max-width: 600px;
    margin-top: 5vh;
  }
`

const ProjectTitle = styled.h1`
  font-family: ${props => props.theme.fontFamilyPrimary};
  color: ${props => props.theme.paletteFontPrimary};
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
`

const ProjectExcerpt = styled.p`
  font-family: ${props => props.theme.fontFamilyPrimary};
  color: ${props => props.theme.paletteFontSecondary};
  font-size: 1rem;
  font-weight: 100;
  margin: 1.5rem 0 1.5rem 0;
  padding: 0;
  line-height: 1.5;

  :before {
    width: 30px;
    height: 6px;
    background-color: ${props => props.theme.paletteTertiary};
    display: block;
    content: '';
    position: absolute;
    margin-top: -1rem;
  }
`

const ProjectLink = GenericLink.extend`
  margin-left: 2rem;
`

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        email
      }
    }
  }
`
