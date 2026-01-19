'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface QuoteForm {
  name: string
  email: string
  message: string
  service: string
  phone: string
}

export default function QuoteForm() {
  const [showSuccess, setShowSuccess] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteForm>()

  const onSubmit = (data: QuoteForm) => {
    setShowSuccess(true)
    reset()
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
      {showSuccess && (
        <div className="success-message" id="successMessage">
          <div className="border border-1 gray-border rounded-2 p-2 text-center mb-3">
            <i className="fa-solid fa-check fs-1 d-block"></i>Thank you! Form submitted successfully.
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-6">
          <input 
            type="text" 
            id="name" 
            placeholder="Enter Name" 
            className={`w-100 ${errors.name ? 'error-border' : ''}`}
            {...register('name', { required: true })}
          />
          {errors.name && (
            <div className="error-message text-capitalize" id="nameError">This field is required.</div>
          )}
        </div>

        <div className="col-6 mt-576-1-5">
          <input 
            type="email" 
            id="email-request" 
            placeholder="Enter Email"
            className={`w-100 ${errors.email ? 'error-border' : ''}`}
            {...register('email', { required: true })}
          />
          {errors.email && (
            <div className="error-message text-capitalize" id="emailError">This field is required.</div>
          )}
        </div>
      </div>

      <div className="my-4">
        <textarea 
          id="message" 
          placeholder="Enter Address" 
          className={`w-100 ${errors.message ? 'error-border' : ''}`}
          {...register('message', { required: true })}
        ></textarea>
        {errors.message && (
          <div className="error-message text-capitalize" id="messageError">This field is required.</div>
        )}
      </div>

      <div className="row">
        <div className="col-6">
          <input 
            type="text" 
            id="service" 
            placeholder="Service" 
            className={`w-100 ${errors.service ? 'error-border' : ''}`}
            {...register('service', { required: true })}
          />
          {errors.service && (
            <div className="error-message text-capitalize" id="serviceError">This field is required.</div>
          )}
        </div>

        <div className="col-6 mt-576-1-5">
          <input 
            type="tel" 
            id="phone" 
            placeholder="Telephone" 
            className={`w-100 ${errors.phone ? 'error-border' : ''}`}
            {...register('phone', { required: true })}
          />
          {errors.phone && (
            <div className="error-message text-capitalize" id="phoneError">This field is required.</div>
          )}
        </div>
      </div>

      <div className="button d-flex justify-content-center mt-4">
        <button type="submit" value="Submit" className="main-btn btn rounded-0">Submit</button>
      </div>
    </form>
  )
}
