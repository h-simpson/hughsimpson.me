import React from 'react'
import styled from 'styled-components'
import StyledLink from '../components/StyledLink'
import { Page, Row, Column } from 'hedron'
import UnpaddedColumn from '../components/UnpaddedColumn'

const Contact = () => (
  <section id="contact">
    <Row>
      <UnpaddedColumn>
        <ContactHeading>Want to get in contact?</ContactHeading>
      </UnpaddedColumn>
    </Row>
    <Row>
      <UnpaddedColumn>
        <ContactLink href="mailto:hugh@hughsimpson.me">Email</ContactLink>
        <ContactLink href="https://www.linkedin.com/in/h-simpson">LinkedIn</ContactLink>
        <ContactLink href="https://www.github.com/h-simpson">GitHub</ContactLink>
      </UnpaddedColumn>
    </Row>
  </section>
)

export default Contact

const ContactLink = styled(StyledLink)`
  font-size: 1.5rem;
  font-family: ${props => props.theme.headingFont};
  margin-right: 2rem;
  margin-left: 20px;
`

const ContactHeading = styled.h2`
  color: ${props => props.theme.headingFontColor};
  font-size: 2rem;
  font-family: ${props => props.theme.headingFont};
  padding-left: 20px;
`
