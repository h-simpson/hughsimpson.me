import React from 'react'
import { withFormik } from 'formik'
import Yup from 'yup'
import Button from '../components/Button'

// Our inner form component. Will be wrapped with Formik({..})
const InnerForm = props => {
  const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset } = props
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ display: 'block' }}>
        Email
      </label>
      <input
        id="email"
        placeholder="Enter your email"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? 'text-input error' : 'text-input'}
      />
      {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
      <label>Message</label>
      <textarea
        id="message"
        placeholder="What do you want to say..."
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button type="button" className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>
        Reset
      </Button>
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
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

export default ContactForm
