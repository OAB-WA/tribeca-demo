import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Plumbing Services - Tribeca Plumbing, Inc.',
  description: 'Professional plumbing services in Dallas including residential, commercial, emergency, and sewer services. Call (214) 402-5454',
}

// Performance Optimization: Enable static generation for faster page loads
export const dynamic = 'force-static'

export default function Services() {
  return (
    <>
      <Loader />
      <Header currentPage="services" />

      {/* Top Banner - Optimized with PageHeader component */}
      <PageHeader title="Services" />

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
                      {/* Performance Optimization: Lazy load service images with proper sizes */}
                      <Image src="/img/ser-01.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
                      <Image src="/img/ser-02.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4>Commercial Plumbing</h4>
                    <p>Superior commercial plumbing services for Dallas businesses. We handle everything from office buildings to retail spaces.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 mt-992-2 wow fadeInRight">
              <div className="box border">
                <div className="sec">
                  <div className="img">
                    <div className="inner-img">
                      <Image src="/img/ser-03.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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

          <div className="row mt-30">
            <div className="col-4 fadeInLeft">
              <div className="box border">
                <div className="sec">
                  <div className="img">
                    <div className="inner-img">
                      <Image src="/img/ser-04.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4>Drain Cleaning</h4>
                    <p>Professional drain cleaning services for clogged sinks, toilets, bathtubs, and sewer lines in Dallas homes and businesses.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 mt-576-2 fadeInUp">
              <div className="box border">
                <div className="sec">
                  <div className="img">
                    <div className="inner-img">
                      <Image src="/img/ser-05.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4>HVAC Services</h4>
                    <p>Professional heating and cooling services including AC repair, furnace installation, and HVAC maintenance for Dallas homes and businesses.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4 mt-992-2 fadeInRight">
              <div className="box border">
                <div className="sec">
                  <div className="img">
                    <div className="inner-img">
                      <Image src="/img/ser-06.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4>Water Heaters</h4>
                    <p>Water heater repair and installation services. We specialize in both traditional and tankless water heater solutions for Dallas homes.</p>
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
