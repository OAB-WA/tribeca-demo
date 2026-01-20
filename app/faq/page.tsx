import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ - Tribeca Plumbing, Inc.',
  description: 'Frequently asked questions about plumbing, HVAC, and electrical services in Dallas, TX',
}

// Performance Optimization: Enable static generation for faster page loads
export const dynamic = 'force-static'

export default function FAQ() {
  return (
    <>
      <Loader />
      <Header currentPage="faq" />

      {/* Top Banner - Optimized with PageHeader component */}
      <PageHeader title="Faq" />

      {/* FAQ Page */}
      <section className="faq-page all-padding">
        <div className="container">
          <div className="text-up text-center wow bounceIn">
            <p className="color">Have Questions?</p>
            <h3>Frequently Asked Questions</h3>
          </div>

          <div className="row">
            <div className="col-6 wow fadeInLeft">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseheadingOne" aria-expanded="true"
                      aria-controls="collapseheadingOne">What plumbing services does Tribeca Plumbing offer in Dallas?</button>
                  </h4>
                  <div id="collapseheadingOne" className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Tribeca Plumbing, Inc. provides residential and commercial plumbing services in Dallas, including leak detection, water heater repair, sewer line replacement, drain cleaning, and emergency plumbing repairs.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseheadingTwo" aria-expanded="false"
                      aria-controls="collapseheadingTwo">Do you offer HVAC services in Dallas, TX?</button>
                  </h4>
                  <div id="collapseheadingTwo" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Yes, Tribeca Plumbing, Inc. offers full HVAC services in Dallas, including AC repair, furnace installation, HVAC system maintenance, and indoor air quality solutions.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">Are your plumbers licensed and insured in Texas?</button>
                  </h4>
                  <div id="collapseThree" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Yes, all our plumbers and HVAC technicians are fully licensed and insured to provide professional and code-compliant services throughout Texas.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
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
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFive" aria-expanded="false"
                      aria-controls="collapseFive">Do you repair and install water heaters?</button>
                  </h4>
                  <div id="collapseFive" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Yes, we specialize in both traditional and tankless water heater repair and installation services across the Dallas area.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Do you offer AC repair and maintenance in Dallas?</button>
                  </h4>
                  <div id="collapseSix" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Yes. Our certified technicians provide AC repair, seasonal maintenance, and complete HVAC system tune-ups to keep your cooling system running efficiently throughout the Dallas summer.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven" aria-expanded="false"
                      aria-controls="collapseSeven">Do you offer drain cleaning services in Dallas?</button>
                  </h4>
                  <div id="collapseSeven" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Yes, Tribeca Plumbing, Inc. offers professional drain cleaning services for clogged sinks, toilets, bathtubs, and sewer lines in Dallas homes and businesses.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 wow fadeInRight">
              <div className="accordion" id="accordionExample2">
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseheadingOne-two" aria-expanded="true"
                      aria-controls="collapseheadingOne-two">What areas around Dallas do you serve?</button>
                  </h4>
                  <div id="collapseheadingOne-two" className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample2">
                    <div className="accordion-body">
                      <p>We proudly serve Dallas and surrounding areas, including Irving, Plano, Garland, Carrollton, Mesquite, and many other cities throughout the Dallas/Ft. Worth metroplex.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo-Two" aria-expanded="false"
                      aria-controls="collapseTwo-Two">Do you provide maintenance plans for plumbing or HVAC systems?</button>
                  </h4>
                  <div id="collapseTwo-Two" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample2">
                    <div className="accordion-body">
                      <p>Yes, we offer affordable maintenance plans that include regular inspections, tune-ups, and priority service for both plumbing and HVAC systems.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree-Two" aria-expanded="false"
                      aria-controls="collapseThree-Two">Can you service both residential and commercial properties?</button>
                  </h4>
                  <div id="collapseThree-Two" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample2">
                    <div className="accordion-body">
                      <p>Yes. Tribeca Plumbing, Inc. provides plumbing and HVAC solutions for Dallas homes, apartments, offices, retail spaces, and industrial facilities.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFour-Two" aria-expanded="false"
                      aria-controls="collapseFour-Two">Can I schedule same-day plumbing or HVAC service in Dallas?</button>
                  </h4>
                  <div id="collapseFour-Two" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample2">
                    <div className="accordion-body">
                      <p>In most cases, yes. Tribeca Plumbing, Inc. provides same-day plumbing and HVAC service appointments in Dallas for urgent issues like burst pipes, water heater breakdowns, or AC system failures.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFive-Two" aria-expanded="false"
                      aria-controls="collapseFive-Two">What HVAC systems do you service?</button>
                  </h4>
                  <div id="collapseFive-Two" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample2">
                    <div className="accordion-body">
                      <p>We service all major HVAC brands, including central air conditioners, heat pumps, furnaces, and ductless mini-split systems.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseSix-Two" aria-expanded="false"
                      aria-controls="collapseSix-Two">How can I book plumbing or HVAC service with Tribeca Plumbing?</button>
                  </h4>
                  <div id="collapseSix-Two" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample2">
                    <div className="accordion-body">
                      <p>You can book a service by calling our Dallas office at (214) 402-5454 or filling out the contact form on our website for fast scheduling.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h4 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven-Two" aria-expanded="false"
                      aria-controls="collapseSeven-Two">Do you offer upfront pricing?</button>
                  </h4>
                  <div id="collapseSeven-Two" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample2">
                    <div className="accordion-body">
                      <p>Yes, we pride ourselves on transparency, providing upfront pricing with no hidden fees or surprises. We&apos;ll always keep you informed about your plumbing or HVAC problem, what repairs need to be done, and the cost of service.</p>
                    </div>
                  </div>
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
