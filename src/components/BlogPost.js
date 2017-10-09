import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Page, Row, Column } from 'hedron'
import UnpaddedColumn from '../components/UnpaddedColumn'
import Card from '../components/Card'
import StyledParagraph from '../components/StyledParagraph'

export default ({ frontmatter, excerpt }) => (
  <Container>
    <Card md={10} lg={7}>
      <CardLink to={frontmatter.path}>
        <Row>
          <Title>{frontmatter.title}</Title>
        </Row>
        <Row alignItems="baseline;" justifyContent="space-between;">
          <UnpaddedColumn xs={6} sm={6} md={6}>
            <PublishDate>{frontmatter.date}</PublishDate>
          </UnpaddedColumn>
          <UnpaddedColumn xs={6} sm={3} md={3}>
            <Category>{frontmatter.category}</Category>
          </UnpaddedColumn>
        </Row>
        <Row>
          <StyledParagraph dangerouslySetInnerHTML={{ __html: excerpt }} />
        </Row>
      </CardLink>
    </Card>
  </Container>
)

const Container = styled(Row)`
  margin-bottom: 20px;
  justify-content: center;
`
const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Title = styled.h1`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.4rem;
`
const Category = styled.h3`
  color: ${props => props.theme.linkFontColor};
  font-family: ${props => props.theme.headingFont};
  font-size: 1.2rem;
`
const PublishDate = styled.h4`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.2rem;
`
