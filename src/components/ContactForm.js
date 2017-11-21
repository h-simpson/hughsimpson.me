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
      <Input
        id="email"
        placeholder="enter your email"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? 'text-input error' : 'text-input'}
      />
      <Label htmlFor="email">email</Label>
      {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
      <Textarea
        id="message"
        placeholder="what do you want to say..."
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Label>message</Label>
      <Button type="submit" disabled={isSubmitting}>
        Send message
      </Button>
    </Form>
  )
}

const ContactForm = withFormik({
  mapPropsToValues: () => ({ email: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!')
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'ContactForm' // helps with React DevTools
})(InnerForm)

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  font-family: ${props => props.theme.fontFamilyPrimary};
  color: ${props => props.theme.paletteFontSecondary};
`

const Input = styled.input`
  padding: 1rem 0.5rem;
  margin: 1rem 0;
  border: none;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
`

const Label = styled.label`
  color: ${props => props.theme.paletteFontSecondary};
`

const Textarea = styled.textarea`
  padding: 4rem 0.5rem;
  margin: 1rem 0;
  border: none;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
`

export default ContactForm
