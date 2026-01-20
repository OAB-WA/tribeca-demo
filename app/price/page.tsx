import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing - Tribeca Plumbing, Inc.',
  description: 'Transparent pricing for plumbing and HVAC services in Dallas. Upfront quotes, no hidden fees.',
}

// Performance Optimization: Enable static generation for faster page loads
export const dynamic = 'force-static'

export default function Price() {
  return (
    <>
      <Loader />
      <Header currentPage="price" />

      {/* Top Banner - Optimized with PageHeader component */}
      <PageHeader title="Pricing Plan" />

      {/* Price Page */}
      <section className="price-page all-margin">
        <div className="container">
          <div className="text-up text-center wow bounceIn">
            <p className="color">Pricing Plan</p>
            <h3>Best Pricing Plans</h3>
          </div>

          <div className="row">
            {/* Plan 1 */}
            <div className="col-4 wow fadeInLeft">
              <div className="price-box bg-price d-flex justify-content-center align-items-center text-center">
                <div className="info">
                  <h4 className="color mb-0">Basic Maintenance Plan</h4>
                  <div className="text d-flex justify-content-center">
                    <h3>$99</h3><span className="d-grid align-items-center">/ Month</span>
                  </div>
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Routine plumbing inspections</p>
                  </div>
                  <div className="d-flex my-4">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Basic drain cleaning service</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Minor repair services</p>
                  </div>
                  <div className="d-flex my-4">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Priority scheduling</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Annual maintenance check</p>
                  </div>
                  <Link href="#" className="text-decoration-none d-flex justify-content-center">
                    <div className="main-btn btn rounded-0 p-0 d-flex justify-content-center align-items-center">
                      Get Started
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="col-4 sec-col mt-576-2 wow fadeInUp">
              <div className="price-box bg-price d-flex justify-content-center align-items-center text-center">
                <div className="info">
                  <h4 className="text-blue mb-0">Premium Maintenance Plan</h4>
                  <div className="text d-flex justify-content-center">
                    <h3>$199</h3><span className="d-grid align-items-center">/ Month</span>
                  </div>
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Routine plumbing inspections</p>
                  </div>
                  <div className="d-flex my-4">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Basic drain cleaning service</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Minor repair services</p>
                  </div>
                  <div className="d-flex my-4">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Priority scheduling</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Annual maintenance check</p>
                  </div>
                  <Link href="#" className="text-decoration-none d-flex justify-content-center">
                    <div className="blue-btn btn rounded-0 p-0 d-flex justify-content-center align-items-center">
                      Get Started
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="col-4 mt-992-2 wow fadeInRight">
              <div className="price-box bg-price d-flex justify-content-center align-items-center text-center">
                <div className="info">
                  <h4 className="color mb-0">Complete Care Plan</h4>
                  <div className="text d-flex justify-content-center">
                    <h3>$299</h3><span className="d-grid align-items-center">/ Month</span>
                  </div>
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Routine plumbing inspections</p>
                  </div>
                  <div className="d-flex my-4">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Basic drain cleaning service</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Minor repair services</p>
                  </div>
                  <div className="d-flex my-4">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Priority scheduling</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-caret-right d-grid align-items-center me-3 fs-5"></i>
                    <p>Annual maintenance check</p>
                  </div>
                  <Link href="#" className="text-decoration-none d-flex justify-content-center">
                    <div className="main-btn btn rounded-0 p-0 d-flex justify-content-center align-items-center">
                      Get Started
                    </div>
                  </Link>
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
