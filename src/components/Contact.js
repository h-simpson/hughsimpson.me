import React from 'react'
import styled from 'styled-components'
import StyledLink from '../components/StyledLink'
import { Page, Row, Column } from 'hedron'
import UnpaddedColumn from '../components/UnpaddedColumn'

const Contact = () => (
  <ContactContainer id="contact">
    <Row justifyContent="center">
      <UnpaddedColumn sm={10} md={10} lg={8}>
        <ContactHeading>Want to get in contact?</ContactHeading>
      </UnpaddedColumn>
    </Row>
    <Row justifyContent="center">
      <UnpaddedColumn sm={10} md={10} lg={8}>
        <ContactLink href="mailto:hugh@hughsimpson.me">Email</ContactLink>
        <ContactLink href="https://www.linkedin.com/in/h-simpson">LinkedIn</ContactLink>
        <ContactLink href="https://www.github.com/h-simpson">GitHub</ContactLink>
      </UnpaddedColumn>
    </Row>
  </ContactContainer>
)

export default Contact

const ContactContainer = styled.section`margin-left: 20px;`

const ContactLink = styled(StyledLink)`
  font-size: 1.5rem;
  font-family: ${props => props.theme.headingFont};
  margin-right: 2rem;
`

const ContactHeading = styled.h2`
  color: ${props => props.theme.headingFontColor};
  font-size: 2rem;
  font-family: ${props => props.theme.headingFont};
`
