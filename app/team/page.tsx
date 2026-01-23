import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Team - Tribeca Plumbing, Inc.',
  description: 'Meet our licensed plumbing and HVAC professionals serving Dallas/Ft. Worth',
}

// Performance Optimization: Enable static generation for faster page loads
export const dynamic = 'force-static'

export default function Team() {
  return (
    <>
      <Loader />
      <Header currentPage="team" />

      {/* Top Banner */}
      <section className="top top-img wow fadeIn" data-wow-duration="1s">
        <div className="top-text">
          <div className="text-inner">
            <h2 className="text-capitalize text-white mt-0">Our Team</h2>
            <div className="d-flex text-white justify-content-center">
              <Link href="/"><i className="fa-solid fa-house"></i></Link>
              <p className="mb-0"><span className="mx-1">/</span>Our Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Page */}
      <section className="team-page all-margin">
        <div className="container">
          <div className="text-up text-center wow bounceIn">
            <p className="color">Team</p>
            <h3>Our Professionals</h3>
          </div>

          <div className="row">
            <div className="col-4 wow fadeInLeft">
              <div className="img">
                <div className="inner-img">
                  <Image src="/img/team-01.jpg" alt="" width={400} height={500} className="object-fit-cover" />
                </div>
              </div>
              <div className="text">
                <h4>Licensed Master Plumber</h4>
                <p>Designation : Master Plumber <br />
                  Experience : 15+ Years</p>
              </div>
            </div>

            <div className="col-4 mt-320-1-5 wow fadeInUp">
              <div className="img">
                <div className="inner-img">
                  <Image src="/img/team-02.jpg" alt="" width={400} height={500} className="object-fit-cover" />
                </div>
              </div>
              <div className="text">
                <h4>HVAC Specialist</h4>
                <p>Designation : Certified HVAC Technician <br />
                  Experience : 12+ Years</p>
              </div>
            </div>

            <div className="col-4 mt-768-2 wow fadeInRight">
              <div className="img">
                <div className="inner-img">
                  <Image src="/img/team-03.jpg" alt="" width={400} height={500} className="object-fit-cover" />
                </div>
              </div>
              <div className="text">
                <h4>Licensed Electrician</h4>
                <p>Designation : Master Electrician <br />
                  Experience : 10+ Years</p>
              </div>
            </div>
          </div>

          <div className="row mt-30">
            <div className="col-4 wow fadeInLeft">
              <div className="img">
                <div className="inner-img">
                  <Image src="/img/team-04.jpg" alt="" width={400} height={500} className="object-fit-cover" />
                </div>
              </div>
              <div className="text">
                <h4>Service Technician</h4>
                <p>Designation : Licensed Plumber <br />
                  Experience : 8+ Years</p>
              </div>
            </div>

            <div className="col-4 mt-320-1-5 wow fadeInUp">
              <div className="img">
                <div className="inner-img">
                  <Image src="/img/team-05.jpg" alt="" width={400} height={500} className="object-fit-cover" />
                </div>
              </div>
              <div className="text">
                <h4>Emergency Response Specialist</h4>
                <p>Designation : Licensed Plumber <br />
                  Experience : 7+ Years</p>
              </div>
            </div>

            <div className="col-4 mt-768-2 wow fadeInRight">
              <div className="img">
                <div className="inner-img">
                  <Image src="/img/team-06.jpg" alt="" width={400} height={500} className="object-fit-cover" />
                </div>
              </div>
              <div className="text">
                <h4>Customer Service Manager</h4>
                <p>Designation : Service Coordinator <br />
                  Experience : 5+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
