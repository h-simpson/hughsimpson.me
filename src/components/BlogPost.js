import React from 'react'
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link'
import { Page, Row, Column } from 'hedron'
import UnpaddedColumn from '../components/UnpaddedColumn'
import Card from '../components/Card'
import StyledParagraph from '../components/StyledParagraph'
import Button from '../components/Button'

export default ({ title, date, category, image, excerpt }) => (
  <Container>
    <Card sm={11} md={11} lg={9}>
      <Row>
        <ImgContainer xs={6} sm={6} md={6}>
          <Img src={image.childImageSharp.responsiveSizes.src} />
        </ImgContainer>
        <UnpaddedColumn xs={12} sm={12} md={6}>
          <Row>
            <Title>{title}</Title>
          </Row>
          <Row>
            <StyledParagraph>{excerpt}</StyledParagraph>
          </Row>
          <Row alignItems="baseline;" justifyContent="space-between;">
            <UnpaddedColumn xs={6} sm={6} md={6}>
              <PublishDate>{date}</PublishDate>
            </UnpaddedColumn>
            <UnpaddedColumn xs={6} sm={3} md={3}>
              <Category>{category}</Category>
            </UnpaddedColumn>
          </Row>
        </UnpaddedColumn>
      </Row>
    </Card>
  </Container>
)

const Container = styled(Row)`
  margin-bottom: 20px;
  justify-content: center;
`

const Title = styled.h1`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.5rem;
  padding: 0 1rem;
`
const Category = styled.h3`
  color: ${props => props.theme.linkColor};
  font-family: ${props => props.theme.headingFont};
  font-size: 1.2rem;
`
const PublishDate = styled.h4`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.2rem;
  padding-left: 1rem;
`

const ImgContainer = styled(UnpaddedColumn)`@media (max-width: 764px) {display: none;}`

const Img = styled.img`
  max-width: 100%;
  min-height: 100%;
`
