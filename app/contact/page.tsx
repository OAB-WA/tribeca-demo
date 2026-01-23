'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import LazyMap from '@/components/LazyMap'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface ContactForm {
  name: string
  userEmail: string
  phone: string
  subject: string
  message: string
}

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>()

  const onSubmit = (data: ContactForm) => {
    setShowSuccess(true)
    reset()
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <>
      <Loader />
      <Header currentPage="contact" />

      {/* Top Banner */}
      <section className="top top-img wow fadeIn" data-wow-duration="1s">
        <div className="top-text">
          <div className="text-inner">
            <h2 className="text-capitalize text-white mt-0">Contact</h2>
            <div className="d-flex text-white justify-content-center">
              <Link href="/"><i className="fa-solid fa-house"></i></Link>
              <p className="mb-0"><span className="mx-1">/</span>Contact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Page */}
      <section className="contact-page all-margin">
        <div className="container">
          <div className="row">
            <div className="col-6 main d-grid align-items-center wow fadeInLeft">
              <div className="text">
                <p className="color">Contact Tribeca Plumbing, Inc.</p>
                <h3 className="text-capitalize my-4">Have Questions? <br /> Get In Touch!</h3>
                <p className="mb-6 text-capitalize">If you&apos;re searching for a friendly, trustworthy plumbing and HVAC company in Dallas, TX, call us today. We&apos;re ready to provide lasting solutions that keep your home comfortable and running smoothly.</p>
                <div className="icon">
                  <div className="d-flex">
                    <i className="fa-solid fa-solid fa-location-dot d-grid align-items-center me-3 fs-5 color"></i>
                    <p>6211 W Northwest Hwy Ste C251, Dallas, TX 75225</p>
                  </div>
                  <div className="d-flex my-3">
                    <i className="fa-solid fa-mobile d-grid align-items-center me-3 fs-5 color"></i>
                    <p>(214) 402-5454</p>
                  </div>
                  <div className="d-flex">
                    <i className="fa-solid fa-envelope d-grid align-items-center me-3 fs-5 color"></i>
                    <p>Open 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 main mt-768-2 wow fadeInRight">
              {showSuccess && (
                <div className="success-message" id="successMessage">
                  <div className="border border-1 border-success rounded-2 p-2 text-center mb-3">
                    <i className="fa-solid fa-check fs-1 d-block pb-3"></i>Thank you! Form submitted successfully.
                  </div>
                </div>
              )}

              <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-6">
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Name" 
                      className={`w-100 px-0 ${errors.name ? 'error-border' : ''}`}
                      {...register('name', { required: true })}
                    />
                    {errors.name && (
                      <div className="error-message text-capitalize" id="nameError">This field is required.</div>
                    )}
                  </div>
                  <div className="col-6 mt-576-1-5">
                    <input 
                      type="email" 
                      id="email-contact" 
                      placeholder="Your Email"
                      className={`w-100 px-0 ${errors.userEmail ? 'error-border' : ''}`}
                      {...register('userEmail', { required: true })}
                    />
                    {errors.userEmail && (
                      <div className="error-message text-capitalize" id="emailError">This field is required.</div>
                    )}
                  </div>
                </div>

                <div className="row my-4">
                  <div className="col-6">
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Phone" 
                      className={`w-100 px-0 ${errors.phone ? 'error-border' : ''}`}
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && (
                      <div className="error-message text-capitalize" id="phoneError">This field is required.</div>
                    )}
                  </div>
                  <div className="col-6 mt-576-1-5">
                    <input 
                      type="text" 
                      id="subject" 
                      placeholder="Subject" 
                      className={`w-100 px-0 ${errors.subject ? 'error-border' : ''}`}
                      {...register('subject', { required: true })}
                    />
                    {errors.subject && (
                      <div className="error-message text-capitalize" id="subjectError">This field is required.</div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <textarea 
                      id="message" 
                      placeholder="Message"
                      className={`w-100 px-0 ${errors.message ? 'error-border' : ''}`}
                      {...register('message', { required: true })}
                    ></textarea>
                    {errors.message && (
                      <div className="error-message text-capitalize" id="messageError">This field is required.</div>
                    )}
                  </div>
                </div>

                <button type="submit" value="Submit" className="main-btn btn rounded-0 text-uppercase">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map - Performance Optimization: Lazy loaded with Intersection Observer */}
      <section className="map wow fadeIn">
        <LazyMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.1234567890!2d-96.78901234567890!3d32.87654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUyJzM1LjYiTiA5NsKwNDcjMjAuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        />
      </section>

      <Footer />
    </>
  )
}
