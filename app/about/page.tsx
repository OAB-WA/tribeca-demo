import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import ParallaxSection from '@/components/ParallaxSection'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Tribeca Plumbing, Inc.',
  description: 'Learn about Tribeca Plumbing, Inc. - Licensed plumbing and HVAC experts serving Dallas/Ft. Worth since 2009',
}

// Performance Optimization: Enable static generation for faster page loads
export const dynamic = 'force-static'

export default function About() {
  return (
    <>
      <Loader />
      <Header currentPage="about" />

      {/* Top Banner */}
      <section className="top top-img wow fadeIn" data-wow-duration="1s">
        <div className="top-text">
          <div className="text-inner">
            <h2 className="text-capitalize text-white mt-0">About Us</h2>
            <div className="d-flex text-white justify-content-center">
              <Link href="/"><i className="fa-solid fa-house"></i></Link>
              <p className="mb-0"><span className="mx-1">/</span>About Us</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about all-padding">
        <div className="container">
          <div className="row">
            <div className="col-6 wow fadeInLeft">
              <div className="img">
                {/* Performance Optimization: Lazy load about image with proper sizes */}
                <Image src="/img/about.png" alt="" width={600} height={600} sizes="(max-width: 992px) 100vw, 50vw" />
              </div>
            </div>
            <div className="col-6 ps-6 wow fadeInRight">
              <div className="text">
                <p className="color">About Tribeca Plumbing, Inc.</p>
                <h3>Experienced Experts in Plumbing &amp; HVAC Services</h3>
                <p>If you need a plumbing and HVAC company in Dallas, TX, look no further than Tribeca Plumbing, Inc. Whether you&apos;re dealing with a leaky faucet, a broken water heater, or need a new air conditioning unit installed, our licensed professionals are here to help. We understand that plumbing and HVAC repairs can be stressful, which is why we provide honest, efficient service for both homeowners and businesses.</p>
                <p>While DIY repairs may seem like a cost-saving option, improper installations or fixes can lead to more costly problems down the line. That&apos;s why it&apos;s important to rely on experienced technicians who can handle everything from plumbing repairs to HVAC servicing, heating system maintenance, and more near Dallas.</p>
                <ul className="p-0">
                  <li>
                    <span className="icon me-2"><i className="fa-solid fa-check"></i></span>
                    <span>Licensed &amp; Insured Professionals</span>
                  </li>
                  <li className="my-2">
                    <span className="icon me-2"><i className="fa-solid fa-check"></i></span>
                    <span>24/7 Emergency Service Available</span>
                  </li>
                  <li className="my-2">
                    <span className="icon me-2"><i className="fa-solid fa-check"></i></span>
                    <span>Upfront Pricing - No Hidden Fees</span>
                  </li>
                  <li>
                    <span className="icon me-2"><i className="fa-solid fa-check"></i></span>
                    <span>Serving Dallas/Ft. Worth &amp; Surrounding Areas</span>
                  </li>
                </ul>
                <Link href="/contact" className="text-decoration-none">
                  <div className="main-btn btn border-0 rounded-0 p-0 d-flex justify-content-center align-items-center">
                    Contact Us Today
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Image - optimized with next/image (lazy by default) */}
      <ParallaxSection backgroundImage="/img/parr.jpg">
        <div className="text text-white">
          <p>Need Help With A Plumbing Emergency?</p>
          <h3 className="text-white mb-0">24/7 Emergency Plumbing <br /> Service Available</h3>
        </div>
      </ParallaxSection>

      {/* Service Stats */}
      <section className="service">
        <div className="container all-padding bg-blue text-white">
          <div className="row">
            <div className="col-6 d-grid align-items-center">
              <p>Trusted Plumbing &amp; HVAC Company</p>
              <h3 className="text-white mb-0">Serving Dallas/Ft. Worth <br /> Since 2009</h3>
            </div>
            <div className="col-3 text-center mt-992-2">
              <div id="counter">
                <div className="item">
                  <h3 className="count text-white mb-0" data-number="15">15</h3>
                  <h6 className="text-white mb-0">Years Experience</h6>
                </div>
                <div className="item mt-4">
                  <h3 className="count text-white mb-0" data-number="1000">1000</h3>
                  <h6 className="text-white mb-0">Happy Customers</h6>
                </div>
              </div>
            </div>
            <div className="col-3 text-center d-flex justify-content-start mt-992-2">
              <div id="counter2">
                <div className="item">
                  <h3 className="count text-white mb-0" data-number="24">24</h3>
                  <h6 className="text-white mb-0">Hours Available</h6>
                </div>
                <div className="item mt-4">
                  <h3 className="count text-white mb-0" data-number="50">50</h3>
                  <h6 className="text-white mb-0">Service Areas</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-about all-margin">
        <div className="container">
          <div className="text-up text-center wow bounceIn">
            <p className="color">Our Team</p>
            <h3>Meet Our Licensed Professionals</h3>
          </div>
          <div className="row">
            <div className="col-3 wow fadeInLeft">
              <div className="img">
                {/* Performance Optimization: Lazy load team images with proper sizes */}
                <Image src="/img/about-01.png" alt="" width={300} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
              </div>
              <div className="text-center">
                <h4>Licensed Plumber</h4>
                <p className="color">Master Plumber</p>
              </div>
            </div>
            <div className="col-3 mt-320-2 wow fadeInUp">
              <div className="img">
                <Image src="/img/about-02.png" alt="" width={300} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
              </div>
              <div className="text-center">
                <h4>HVAC Technician</h4>
                <p className="color">Certified HVAC Specialist</p>
              </div>
            </div>
            <div className="col-3 mt-768-2 wow fadeInDown">
              <div className="img">
                <Image src="/img/about-03.png" alt="" width={300} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
              </div>
              <div className="text-center">
                <h4>Electrical Specialist</h4>
                <p className="color">Licensed Electrician</p>
              </div>
            </div>
            <div className="col-3 mt-768-2 wow fadeInRight">
              <div className="img">
                <Image src="/img/about-04.png" alt="" width={300} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
              </div>
              <div className="text-center">
                <h4>Service Manager</h4>
                <p className="color">Customer Relations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
