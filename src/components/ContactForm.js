import React from 'react'
import styled from 'styled-components'
import { withFormik } from 'formik'
import Yup from 'yup'
import Button from '../components/Button'

// Our inner form component. Will be wrapped with Formik({..})
const InnerForm = props => {
  const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        placeholder="enter your email"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email && touched.email}
        valid={touched.email && !errors.email}
      />
      {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      <Label>Message</Label>
      <Textarea
        id="message"
        placeholder="what do you want to say..."
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.message && touched.message}
        valid={touched.message && !errors.message}
      />
      {errors.message && touched.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      <SubmitButton type="submit" disabled={isSubmitting}>
        Send message
      </SubmitButton>
    </Form>
  )
}

const messageTemplate = {
  attachments: [
    {
      color: '#36a64f',
      pretext: 'You have a new message from the website',
      footer: 'hughsimpson.me'
    }
  ]
}

const ContactForm = withFormik({
  mapPropsToValues: () => ({ email: '' }, { message: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('where I can reach you?'),
    message: Yup.string().required('please enter your message')
  }),
  handleSubmit: (values, { setSubmitting, resetForm, mapPropsToValues, props }) => {
    messageTemplate.attachments[0].author_name = values.email
    messageTemplate.attachments[0].text = values.message
    messageTemplate.attachments[0].fallback = values.message
    fetch('https://hooks.slack.com/services/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', {
      method: 'POST',
      body: JSON.stringify(messageTemplate)
    })
      .then(function(data) {
        console.log('Request success: ', data)
        setSubmitting(false)
        props.onSubmit()
      })
      .catch(function(error) {
        console.log('Request failure: ', error)
      })
  },
  displayName: 'ContactForm' // helps with React DevTools
})(InnerForm)

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 2rem;
  font-family: ${props => props.theme.fontFamilyPrimary};
  color: ${props => props.theme.paletteFontSecondary};
`

const Input = styled.input`
  padding: 1rem 0.5rem;
  margin: 1rem 0;
  border: 1px solid;
  border-radius: 4px;
  width: 100%;
  font-size: 0.8rem;
  border-color: ${props => props.error && props.theme.paletteError};
  border-color: ${props => props.valid && props.theme.paletteValid};

  :active,
  :focus {
    border: 2px solid;
    outline: 0;
  }

  @media (min-width: 770px) {
    font-size: 1rem;
  }
`

const Label = styled.label`
  align-self: flex-start;
  color: ${props => props.theme.paletteFontSecondary};
`

const Textarea = styled.textarea`
  padding: 1rem 0.5rem 1rem 0.5rem;
  margin: 1rem 0;
  border: 1px solid;
  border-radius: 4px;
  width: 100%;
  font-size: 0.8rem;
  border-color: ${props => props.error && props.theme.paletteError};
  border-color: ${props => props.valid && props.theme.paletteValid};

  :active,
  :focus {
    border: 2px solid;
    outline: 0;
  }

  @media (min-width: 770px) {
    font-size: 1rem;
  }
`

const ErrorMessage = styled.div`
  color: ${props => props.theme.paletteError};
  padding-bottom: 1rem;
  font-size: 0.8rem;

  @media (min-width: 770px) {
    font-size: 1rem;
  }
`

const SubmitButton = Button.extend`
  min-width: 0;
  align-self: center;

  @media (min-width: 770px) {
    min-width: 200;
    lign-self: flex-end;
  }
`

export default ContactForm
