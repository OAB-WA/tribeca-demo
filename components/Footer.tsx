'use client'

import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Script from 'next/script'
import Image from 'next/image'

interface NewsletterForm {
  email: string
}

export default function Footer() {
  const [showThanks, setShowThanks] = useState(false)
  const [showThanksAccordion, setShowThanksAccordion] = useState(false)

  const { register: registerMain, handleSubmit: handleSubmitMain, reset: resetMain } = useForm<NewsletterForm>()
  const { register: registerAccordion, handleSubmit: handleSubmitAccordion, reset: resetAccordion } = useForm<NewsletterForm>()

  const onSubmitMain = (data: NewsletterForm) => {
    setShowThanks(true)
    resetMain()
    setTimeout(() => setShowThanks(false), 5000)
  }

  const onSubmitAccordion = (data: NewsletterForm) => {
    setShowThanksAccordion(true)
    resetAccordion()
    setTimeout(() => setShowThanksAccordion(false), 5000)
  }

  useEffect(() => {
    // Initialize Bootstrap collapse functionality for footer accordions
    if (typeof window !== 'undefined' && (window as any).bootstrap) {
      const collapseElements = document.querySelectorAll('.footer .collapse')
      collapseElements.forEach((element) => {
        new (window as any).bootstrap.Collapse(element, {
          toggle: false
        })
      })
    }
  }, [])

  return (
    <>
      <section className="footer bg-blue">
        <div className="container padding-footer">
          {/* Logo Section */}
          <div className="row mb-4">
            <div className="col-12 d-flex justify-content-center">
              <Link href="/" className="footer-logo">
                <Image src="/img/tribeca-logo.png" alt="Tribeca Plumbing, Inc." width={200} height={60} style={{ maxHeight: '60px', width: 'auto' }} />
              </Link>
            </div>
          </div>
          <div className="row up-row">
            {/* Newsletter Signup - Desktop */}
            <div className="col-3 main-col hide-footer">
              <div>
                <a href="#" className="text-decoration-none">
                  <h4 className="text-white text-capitalize">Newsletter Signup</h4>
                </a>
                <form id="subscribeForm" onSubmit={handleSubmitMain(onSubmitMain)}>
                  <input 
                    type="email" 
                    id="email" 
                    className="px-2 mb-4 border-0 border-bottom border-blue"
                    required
                    {...registerMain('email')}
                  />
                  <div className="footer-btn">
                    <button type="submit" className="main-btn btn rounded-0 border-0">Subscribe</button>
                  </div>
                </form>
                {showThanks && (
                  <div id="thanksMessage" className="thanks-message text-center mt-3 text-white">
                    Thank you, your sign-up request was successful! Please check your email inbox to confirm.
                  </div>
                )}
              </div>
            </div>

            {/* Newsletter Signup - Accordion Mobile */}
            <div className="col-3 hide-footerr">
              <div className="accordion" id="accordionFooterOne">
                <div className="accordion-item border-0 rounded-0">
                  <div className="accordion-header">
                    <button
                      className="accordion-button accordion-footer collapsed justify-content-center p-0 text-capitalize"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFooterOne" 
                      data-bs-parent="#accordionFooterOne"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFooterOne">
                      Newsletter Signup
                    </button>
                  </div>
                  <div id="panelsStayOpen-collapseFooterOne" className="accordion-collapse collapse" data-bs-parent="#accordionFooterOne">
                    <div className="accordion-body p-0">
                      <form id="subscribeFormAccordion" onSubmit={handleSubmitAccordion(onSubmitAccordion)}>
                        <input 
                          type="email" 
                          id="email-accordion"
                          className="px-2 mb-4 border-0 border-bottom border-blue" 
                          required
                          {...registerAccordion('email')}
                        />
                        <div className="footer-btn">
                          <button type="submit" className="main-btn btn rounded-0 border-0">Subscribe</button>
                        </div>
                      </form>
                      {showThanksAccordion && (
                        <div id="thanksMessage-accordion" className="thanks-message text-center mt-3 text-white">
                          Thank you, your sign-up request was successful! Please check your email inbox to confirm.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links - Desktop */}
            <div className="col-3 main-col hide-footer d-grid justify-content-center">
              <div>
                <a href="#" className="text-decoration-none">
                  <h4 className="text-white text-capitalize">Link</h4>
                </a>
                <ul className="p-0 m-0">
                  <li className="list-group-item"><Link href="/about" className="text-decoration-none">About</Link></li>
                  <li className="list-group-item my-2"><Link href="/faq" className="text-decoration-none">Faq</Link></li>
                  <li className="list-group-item my-2"><Link href="/blog" className="text-decoration-none">Blog</Link></li>
                  <li className="list-group-item"><Link href="/contact" className="text-decoration-none">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Links - Accordion Mobile */}
            <div className="col-3 hide-footerr">
              <div className="accordion" id="accordionFooterTwo">
                <div className="accordion-item border-0 rounded-0">
                  <div className="accordion-header">
                    <button
                      className="accordion-button accordion-footer collapsed justify-content-center p-0 text-capitalize"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFooterTwo" 
                      data-bs-parent="#accordionFooterTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFooterTwo">
                      Link
                    </button>
                  </div>
                  <div id="panelsStayOpen-collapseFooterTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFooterTwo">
                    <div className="accordion-body p-0">
                      <ul className="p-0 m-0">
                        <li className="list-group-item"><Link href="/about" className="text-decoration-none">About</Link></li>
                        <li className="list-group-item my-2"><Link href="/faq" className="text-decoration-none">Faq</Link></li>
                        <li className="list-group-item my-2"><Link href="/blog" className="text-decoration-none">Blog</Link></li>
                        <li className="list-group-item"><Link href="/contact" className="text-decoration-none">Contact</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours - Desktop */}
            <div className="col-3 main-col hide-footer d-grid justify-content-center mt-992-4">
              <div>
                <a href="#" className="text-decoration-none">
                  <h4 className="text-white text-capitalize">Opening Hours</h4>
                </a>
                <p className="text-capitalize text-white mb-0">Open 24/7 <br />
                  Emergency Service</p>
                <p className="text-capitalize text-white my-3">Monday - Sunday <br />
                  Always Available</p>
              </div>
            </div>

            {/* Opening Hours - Accordion Mobile */}
            <div className="col-3 hide-footerr">
              <div className="accordion" id="accordionFooterThree">
                <div className="accordion-item border-0 rounded-0">
                  <div className="accordion-header">
                    <button
                      className="accordion-button accordion-footer collapsed justify-content-center p-0 text-capitalize"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFooterThree" 
                      data-bs-parent="#accordionFooterThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFooterThree">
                      Opening Hours
                    </button>
                  </div>
                  <div id="panelsStayOpen-collapseFooterThree" className="accordion-collapse collapse" data-bs-parent="#accordionFooterThree">
                    <div className="accordion-body p-0">
                      <p className="text-capitalize text-white mb-0">Open 24/7 <br />
                        Emergency Service</p>
                      <p className="text-capitalize text-white my-3">Monday - Sunday <br />
                        Always Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info - Desktop */}
            <div className="col-3 main-col hide-footer d-grid justify-content-end mt-992-4">
              <div>
                <a href="#" className="text-decoration-none">
                  <h4 className="text-white text-capitalize">Contact Info</h4>
                </a>
                <p className="text-capitalize text-white">6211 W Northwest Hwy Ste C251 <br />
                  Dallas, TX 75225</p>
                <a href="tel:2144025454" className="text-decoration-none">
                  <p className="text-capitalize mt-3">(214) 402-5454</p>
                </a>
                <p className="text-white mt-2">Open 24/7</p>
              </div>
            </div>

            {/* Info - Accordion Mobile */}
            <div className="col-3 hide-footerr">
              <div className="accordion" id="accordionFooterFour">
                <div className="accordion-item border-0 rounded-0">
                  <div className="accordion-header">
                    <button
                      className="accordion-button accordion-footer collapsed justify-content-center p-0 text-capitalize"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFooterFour" 
                      data-bs-parent="#accordionFooterFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFooterFour">
                      Contact Info
                    </button>
                  </div>
                  <div id="panelsStayOpen-collapseFooterFour" className="accordion-collapse collapse" data-bs-parent="#accordionFooterFour">
                    <div className="accordion-body p-0">
                      <p className="text-capitalize text-white">6211 W Northwest Hwy Ste C251 <br />
                        Dallas, TX 75225</p>
                      <a href="tel:2144025454" className="text-decoration-none">
                        <p className="text-capitalize mt-3">(214) 402-5454</p>
                      </a>
                      <p className="text-white mt-2">Open 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row border-top border-blue footer-end">
            <div className="col-12 d-flex justify-content-center py-2 text-white">
              <p className="mb-0 py-3">© 2024 - Tribeca Plumbing, Inc. All Rights Reserved</p>
            </div>
          </div>
        </div>

        <div className="fix-btn">
          <a href="#" className="btn position-fixed border-0 rounded-0">
            <i className="bi bi-chevron-up"></i>
          </a>
        </div>
      </section>

      <Script src="/js/footer.js" strategy="lazyOnload" />
    </>
  )
}
