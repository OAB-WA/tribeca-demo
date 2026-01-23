import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import QuoteForm from '@/components/QuoteForm'
import ParallaxSection from '@/components/ParallaxSection'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tribeca Plumbing, Inc. - Dallas Plumbing & HVAC Experts',
  description: 'Licensed plumbing, HVAC, and electrical services in Dallas/Ft. Worth. 24/7 emergency service. Call (214) 402-5454',
}

// Performance Optimization: Enable static generation for faster page loads and better SEO
// This page has no dynamic data, so it can be pre-rendered at build time
export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <Loader />
      <Header currentPage="home" />
      
      {/* Banner - Performance: static hero (removes carousel JS from critical path) */}
      <section className="banner">
        <div className="item">
          <div className="card border-0 wow fadeIn">
            <Image
              src="/img/slider-01.jpg"
              alt="Dallas Plumbing & HVAC Experts - Professional plumbing services"
              width={1920}
              height={800}
              priority
              sizes="100vw"
              className="card-img slider-img rounded-0 object-fit-cover"
            />
            <div className="card-img-overlay">
              <div className="img-inner wow fadeInUpBig">
                <div className="text">
                  <h5 className="text-capitalize text-white">Need Help With A Plumbing Emergency?</h5>
                  <h2 className="text-capitalize text-white">Dallas Plumbing &amp; HVAC <br /> Experts You Can Trust</h2>
                  <Link href="/contact" className="text-decoration-none d-flex justify-content-center">
                    <div className="main-btn btn border-0 rounded-0 p-0 d-flex justify-content-center align-items-center">
                      Call (214) 402-5454
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="service">
        <div className="container all-padding bg-blue text-white">
          <div className="row">
            <div className="col-6 d-grid align-items-center">
              <p>Plumbing Emergency?</p>
              <h3 className="text-white mb-0">Residential &amp; Commercial <br /> Plumbing Services</h3>
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

      {/* Services Grid */}
      <section className="service2 all-margin">
        <div className="container">
          <div className="text-up text-center wow bounceIn">
            <p className="color">Our Services</p>
            <h3>Quality Plumbing &amp; HVAC Services</h3>
          </div>
          <div className="row">
            <div className="col-4 wow fadeInLeft">
              <div className="box border">
                <div className="sec">
                  <div className="img">
                    <div className="inner-img">
                      {/* Performance Optimization: Lazy load service images with proper sizes for responsive loading */}
                      <Image src="/img/ser-01.jpg" alt="Residential plumbing services in Dallas" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4>Residential Plumbing</h4>
                    <p>Expert residential plumbing repairs and installations for your Dallas home. From leaky faucets to complete repiping, we handle it all.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 mt-576-2 wow fadeInUp">
              <div className="box border">
                <div className="sec">
                  <div className="img">
                    <div className="inner-img">
                      {/* Performance Optimization: Lazy load service images with proper sizes for responsive loading */}
                      <Image src="/img/ser-05.jpg" alt="HVAC services including AC repair and installation" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4>HVAC Services</h4>
                    <p>Professional heating and cooling services including AC repair, furnace installation, and HVAC maintenance for Dallas homes and businesses.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 mt-992-2 wow fadeInRight">
              <div className="box border">
                <div className="sec">
                  <div className="img">
                    <div className="inner-img">
                      {/* Performance Optimization: Lazy load service images with proper sizes for responsive loading */}
                      <Image src="/img/ser-04.jpg" alt="Emergency plumbing services available 24/7" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4>Emergency Plumbing</h4>
                    <p>24/7 emergency plumbing services in Dallas. Burst pipes, water heater failures, or sewer backups - we&apos;re here when you need us most.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about all-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-6 wow fadeInLeft">
              <div className="img">
                {/* Performance Optimization: Lazy load about image (below fold) */}
                <Image src="/img/about.png" alt="Tribeca Plumbing team of licensed professionals" width={600} height={600} sizes="(max-width: 992px) 100vw, 50vw" />
              </div>
            </div>
            <div className="col-6 ps-6 fadeInRight">
              <div className="text">
                <p className="color">About Us</p>
                <h3>Experienced Experts in Plumbing &amp; HVAC Services</h3>
                <p>If you need a plumbing and HVAC company in Dallas, TX, look no further than Tribeca Plumbing, Inc. Whether you&apos;re dealing with a leaky faucet, a broken water heater, or need a new air conditioning unit installed, our licensed professionals are here to help. We understand that plumbing and HVAC repairs can be stressful, which is why we provide honest, efficient service for both homeowners and businesses.</p>
                <ul className="p-0">
                  <li>
                    <span className="icon me-2"><i className="fa-solid fa-check"></i></span>
                    <span>Licensed &amp; Insured Professionals</span>
                  </li>
                  <li className="my-2">
                    <span className="icon me-2"><i className="fa-solid fa-check"></i></span>
                    <span>24/7 Emergency Service</span>
                  </li>
                  <li className="my-2">
                    <span className="icon me-2"><i className="fa-solid fa-check"></i></span>
                    <span>Upfront Pricing - No Hidden Fees</span>
                  </li>
                  <li>
                    <span className="icon me-2"><i className="fa-solid fa-check"></i></span>
                    <span>Serving Dallas/Ft. Worth Area</span>
                  </li>
                </ul>
                <Link href="/about" className="text-decoration-none">
                  <div className="main-btn btn border-0 rounded-0 p-0 d-flex justify-content-center align-items-center">
                    Learn More About Us
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Icons */}
      <section className="service3">
        <div className="container bg-blue text-white">
          <div className="row">
            <div className="col-3 border-end border-blue">
              <div className="img">
                {/* Performance Optimization: SVG icons are already optimized, but using next/image for consistency */}
                <Image src="/img/ser-icon-01.svg" alt="Water heater repair and installation icon" width={80} height={80} />
              </div>
              <h4 className="text-white">Water Heaters <br /> &amp; Repair</h4>
              <Link href="/services" className="btn text-decoration-none text-white border-bottom rounded-0 p-0">Read More</Link>
            </div>
            <div className="col-3 border-end border-blue border-res2">
              <div className="img">
                {/* Performance Optimization: SVG icons are already optimized */}
                <Image src="/img/ser-icon-02.svg" alt="Drain cleaning and sewer services icon" width={80} height={80} />
              </div>
              <h4 className="text-white">Drain Cleaning <br /> &amp; Sewer</h4>
              <Link href="/services" className="btn text-decoration-none text-white border-bottom rounded-0 p-0">Read More</Link>
            </div>
            <div className="col-3 border-end border-blue border-res">
              <div className="img">
                {/* Performance Optimization: SVG icons are already optimized */}
                <Image src="/img/ser-icon-03.svg" alt="AC repair and installation services icon" width={80} height={80} />
              </div>
              <h4 className="text-white">AC Repair <br /> &amp; Installation</h4>
              <Link href="/services" className="btn text-decoration-none text-white border-bottom rounded-0 p-0">Read More</Link>
            </div>
            <div className="col-3 border-res">
              <div className="img">
                {/* Performance Optimization: SVG icons are already optimized */}
                <Image src="/img/ser-icon-04.svg" alt="Commercial plumbing services icon" width={80} height={80} />
              </div>
              <h4 className="text-white">Commercial <br /> Plumbing</h4>
              <Link href="/services" className="btn text-decoration-none text-white border-bottom rounded-0 p-0">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial all-margin">
        <div className="container">
          <div className="text-up text-center wow bounceIn">
            <p className="color">Client Reviews</p>
            <h3>What Our Customers Say</h3>
          </div>
          {/* Performance: static testimonials (removes carousel JS) */}
          <div className="row">
            <div className="col-4 wow fadeInLeft">
              <div className="box border">
                <div className="img">
                  <Image src="/img/quote.png" alt="Customer testimonial quote icon" width={60} height={60} className="object-fit-cover" />
                </div>
                <p className="text-capitalize">Tribeca Plumbing came out same day for our emergency plumbing issue. Professional, honest, and got the job done right. Highly recommend!</p>
                <h4 className="mt-4 mb-0">Sarah M.</h4>
                <p>Dallas, TX</p>
              </div>
            </div>
            <div className="col-4 mt-768-2 wow fadeInUp">
              <div className="box border">
                <div className="img">
                  <Image src="/img/quote.png" alt="Customer testimonial quote icon" width={60} height={60} className="object-fit-cover" />
                </div>
                <p className="text-capitalize">Great service for our HVAC installation. The technicians were knowledgeable and explained everything clearly. Fair pricing too!</p>
                <h4 className="mt-4 mb-0">Michael R.</h4>
                <p>Plano, TX</p>
              </div>
            </div>
            <div className="col-4 mt-992-2 wow fadeInRight">
              <div className="box border">
                <div className="img">
                  <Image src="/img/quote.png" alt="Customer testimonial quote icon" width={60} height={60} className="object-fit-cover" />
                </div>
                <p className="text-capitalize">Fast response time and excellent workmanship. They fixed our water heater issue quickly and professionally. Will definitely call again!</p>
                <h4 className="mt-4 mb-0">Jennifer L.</h4>
                <p>Irving, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Image - optimized with next/image (lazy by default) */}
      <ParallaxSection backgroundImage="/img/parr.jpg">
        <div className="text text-white wow bounceIn">
          <p>Need Help With A Plumbing Emergency?</p>
          <h3 className="text-white mb-0">24/7 Emergency Plumbing <br /> Service Available</h3>
        </div>
      </ParallaxSection>

      {/* Request Quote Form */}
      <section className="request">
        <div className="container">
          <div className="part">
            <div className="text-up text-center">
              <p className="color">Get In Touch</p>
              <h3>Request A Quote</h3>
            </div>
            <div className="row">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="questions all-margin">
        <div className="container">
          <div className="row">
            <div className="col-6 wow fadeInLeft">
              <div className="text">
                <p className="color">Frequently Asked Questions</p>
                <h3>Have Questions? <br /> We Have Answers</h3>
                <p className="text-capitalize">Get answers to common questions about our plumbing, HVAC, and electrical services in Dallas, TX.</p>
              </div>
            </div>
            <div className="col-6 wow fadeInRight mt-768-1-5">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item border-0">
                  <h4 className="accordion-header" id="headingTwo">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseheadingTwo" aria-expanded="true"
                      aria-controls="collapseheadingTwo">What plumbing services does Tribeca Plumbing offer?</button>
                  </h4>
                  <div id="collapseheadingTwo" className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Tribeca Plumbing, Inc. provides residential and commercial plumbing services in Dallas, including leak detection, water heater repair, sewer line replacement, drain cleaning, and emergency plumbing repairs.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseheadingOne" aria-expanded="false"
                      aria-controls="collapseheadingOne">Do you offer HVAC services in Dallas?</button>
                  </h4>
                  <div id="collapseheadingOne" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Yes, Tribeca Plumbing, Inc. offers full HVAC services in Dallas, including AC repair, furnace installation, HVAC system maintenance, and indoor air quality solutions.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">Are your plumbers licensed and insured?</button>
                  </h4>
                  <div id="collapseThree" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Yes, all our plumbers and HVAC technicians are fully licensed and insured to provide professional and code-compliant services throughout Texas.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFour" aria-expanded="false"
                      aria-controls="collapseFour">Do you offer emergency services?</button>
                  </h4>
                  <div id="collapseFour" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Yes, we offer fast and reliable emergency plumbing and HVAC services in Dallas, usually responding the same day to minimize damage and downtime.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog all-margin">
        <div className="container">
          <div className="text-up text-center wow bounceIn">
            <p className="color">Our Blog</p>
            <h3>Latest Plumbing &amp; HVAC Tips</h3>
          </div>
          {/* Performance: static blog cards (removes carousel JS) */}
          <div className="row">
            <div className="col-4 wow fadeInLeft">
              <div className="item border">
                <button className="btn border-0 rounded-0 bg-main text-white">08 oct, 2024</button>
                <div className="img">
                  <div className="inner-img">
                    <Link href="/blog1">
                      <Image src="/img/blog-01.jpg" alt="How to Prevent Common Plumbing Emergencies" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-fit-cover" />
                      <div className="blue-box"></div>
                    </Link>
                  </div>
                </div>
                <div className="blog-info bg-white">
                  <Link href="/blog1" className="text-decoration-none">
                    <h4>How to Prevent Common Plumbing Emergencies</h4>
                  </Link>
                  <p className="mb-0">Learn how to prevent costly plumbing emergencies in your Dallas home...</p>
                </div>
              </div>
            </div>
            <div className="col-4 mt-768-2 wow fadeInUp">
              <div className="item border">
                <button className="btn border-0 rounded-0 bg-main text-white">08 oct, 2024</button>
                <div className="img">
                  <div className="inner-img">
                    <Link href="/blog2">
                      <Image src="/img/blog-02.jpg" alt="Choosing the Right Water Heater for Your Home" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-fit-cover" />
                      <div className="blue-box"></div>
                    </Link>
                  </div>
                </div>
                <div className="blog-info bg-white">
                  <Link href="/blog2" className="text-decoration-none">
                    <h4>Choosing the Right Water Heater for Your Home</h4>
                  </Link>
                  <p className="mb-0">Tankless vs traditional water heaters - which is right for your Dallas home...</p>
                </div>
              </div>
            </div>
            <div className="col-4 mt-992-2 wow fadeInRight">
              <div className="item border">
                <button className="btn border-0 rounded-0 bg-main text-white">08 oct, 2024</button>
                <div className="img">
                  <div className="inner-img">
                    <Link href="/blog3">
                      <Image src="/img/blog-03.jpg" alt="HVAC Maintenance Tips for Texas Summers" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-fit-cover" />
                      <div className="blue-box"></div>
                    </Link>
                  </div>
                </div>
                <div className="blog-info bg-white">
                  <Link href="/blog3" className="text-decoration-none">
                    <h4>HVAC Maintenance Tips for Texas Summers</h4>
                  </Link>
                  <p className="mb-0">Keep your AC running efficiently during hot Dallas summers with these tips...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
