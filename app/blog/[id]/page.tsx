import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const blogPosts: Record<string, { title: string; date: string; image: string; content: string }> = {
  '1': {
    title: 'How to Prevent Common Plumbing Emergencies',
    date: 'October 08, 2024',
    image: '/img/blog-01.jpg',
    content: 'Preventing plumbing emergencies in your Dallas home starts with regular maintenance and knowing what to watch for. Simple steps like checking for leaks, maintaining your water heater, and being mindful of what goes down your drains can save you from costly repairs. Regular inspections by licensed professionals can catch small issues before they become major problems.'
  },
  '2': {
    title: 'Choosing the Right Water Heater for Your Home',
    date: 'October 08, 2024',
    image: '/img/blog-02.jpg',
    content: 'When selecting a water heater for your Dallas home, consider factors like household size, energy efficiency, and installation costs. Tankless water heaters offer endless hot water and lower energy bills, while traditional tank models are more affordable upfront. Our licensed plumbers can help you choose the best option for your needs and budget.'
  },
  '3': {
    title: 'HVAC Maintenance Tips for Texas Summers',
    date: 'October 08, 2024',
    image: '/img/blog-03.jpg',
    content: 'Keep your AC running efficiently during hot Dallas summers with these essential maintenance tips. Change your air filters monthly, keep outdoor units clear of debris, and schedule annual professional tune-ups. Proper maintenance extends your system\'s life, improves air quality, and reduces energy costs. Don\'t wait until your AC breaks down - proactive care saves money and keeps you comfortable.'
  },
  '4': {
    title: 'Signs You Need Professional Drain Cleaning',
    date: 'October 08, 2024',
    image: '/img/blog-04.jpg',
    content: 'Slow drains, gurgling sounds, and unpleasant odors are warning signs that your drains need professional attention. Ignoring these symptoms can lead to complete blockages and costly repairs. Our expert plumbers use advanced drain cleaning techniques including hydro-jetting to clear stubborn clogs and keep your plumbing system running smoothly.'
  },
  '5': {
    title: 'Emergency Plumbing: What to Do Before Help Arrives',
    date: 'October 08, 2024',
    image: '/img/blog-05.jpg',
    content: 'When a plumbing emergency strikes, quick action can minimize damage to your Dallas home. Shut off the main water supply immediately, turn off your water heater if it\'s leaking, and move valuables away from water. Then call Tribeca Plumbing at (214) 402-5454 for 24/7 emergency service. Our licensed professionals respond quickly to restore your plumbing and prevent further damage.'
  },
  '6': {
    title: 'Commercial Plumbing Services for Dallas Businesses',
    date: 'October 08, 2024',
    image: '/img/blog-06.jpg',
    content: 'Commercial properties in Dallas require specialized plumbing services to keep businesses running smoothly. From office buildings to retail spaces, our commercial plumbing team handles everything from routine maintenance to emergency repairs. We understand that downtime costs money, so we provide fast, reliable service to minimize business interruptions.'
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const post = blogPosts[id]
  if (!post) {
    return {
      title: 'Blog Post Not Found - Tribeca Plumbing, Inc.',
    }
  }
  return {
    title: `${post.title} - Tribeca Plumbing, Inc.`,
    description: post.content.substring(0, 160),
  }
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts[id]
  
  if (!post) {
    notFound()
  }

  return (
    <>
      <Loader />
      <Header currentPage="blog" />

      {/* Top Banner */}
      <section className="blog-inner top top-img wow fadeIn" data-wow-duration="1s">
        <div className="top-text">
          <div className="text-inner">
            <h2 className="text-capitalize text-white mt-0">{post.title}</h2>
            <div className="d-flex text-white justify-content-center">
              <Link href="/"><i className="fa-solid fa-house"></i></Link>
              <p className="mb-0"><span className="mx-1">/</span>Blog</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Inner Page */}
      <main className="overflow-x-hidden">
        <section className="blog-inner blog-top">
          <div className="blog-img d-flex justify-content-center wow fadeIn">
            <Image src={post.image} alt={post.title} width={1200} height={600} />
          </div>
          <div className="container pb-0">
            <div className="row">
              <Link href="/uncategorized" className="uncategorized-btn text-decoration-none text-uppercase bg-black text-white">Uncategorized</Link>
              <h3 className="text-capitalize my-4">{post.title}</h3>
              <div className="part d-flex">
                <Image src="/img/blog-inner.jpg" alt="" width={40} height={40} className="rounded-circle me-2" />
                <Link href="/" className="text-decoration-none">
                  <p className="m-0 color">By Tribeca Plumbing</p>
                </Link>
                <p className="m-0 color"><span>{post.date}</span></p>
                <Link href="#comment" className="text-decoration-none">
                  <p className="m-0 color">0 Comments</p>
                </Link>
              </div>

              <p className="mt-4">{post.content}</p>

              <p>At Tribeca Plumbing, Inc., we&apos;re committed to providing expert plumbing and HVAC services to Dallas homeowners and businesses. Our licensed professionals have the knowledge and experience to handle any plumbing or HVAC challenge, from routine maintenance to emergency repairs. We believe in honest, transparent service with upfront pricing and no hidden fees.</p>

              <div className="row">
                <div className="col-4">
                  <div className="img">
                    <Image src="/img/ser-01.jpg" alt="" width={300} height={200} />
                  </div>
                </div>
                <div className="col-4">
                  <div className="img">
                    <Image src="/img/ser-06.jpg" alt="" width={300} height={200} />
                  </div>
                </div>
                <div className="col-4 full mt-576-1-5">
                  <div className="img">
                    <Image src="/img/ser-02.jpg" alt="" width={300} height={200} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Post */}
        <section className="next">
          <div className="container">
            <div className="row pb-5">
              <div className="col-6">
                {id !== '1' && (
                  <Link href={`/blog${parseInt(id) - 1}`} className="text-decoration-none">
                    <p className="icon mb-2"><i className="bi bi-arrow-left me-2"></i>Previous</p>
                    <p className="m-0">{blogPosts[String(parseInt(id) - 1)]?.title}</p>
                  </Link>
                )}
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </section>

        {/* Comment Form */}
        <section className="reply pt-3 pb-5 mb-5" id="comment">
          <div className="container">
            <div className="row mb-5">
              <h4 className="text-capitalize">Leave a Reply</h4>
              <form>
                <p>Your email address will not be published. Required fields are marked<span className="mx-2" style={{ color: '#d54e21' }}>*</span></p>
                <label className="form-label">Comment<span className="mx-2" style={{ color: '#d54e21' }}>*</span></label>
                <textarea className="px-2 border-1 w-100" style={{ borderColor: '#6f6f6f36', padding: '.7rem 0 8rem' }} required></textarea>
                <div className="row my-4" style={{ margin: 0 }}>
                  <div className="col-4 px-0">
                    <label className="form-label">Name<span className="mx-2" style={{ color: '#d54e21' }}>*</span></label>
                    <input className="p-2 border-1 border-bottom w-100" style={{ borderColor: '#6f6f6f36' }} type="text" required />
                  </div>
                  <div className="col-4 px-4">
                    <label className="form-label">Email<span className="mx-2" style={{ color: '#d54e21' }}>*</span></label>
                    <input className="p-2 border-1 border-bottom w-100" style={{ borderColor: '#6f6f6f36' }} type="email" required />
                  </div>
                  <div className="col-4 px-0">
                    <label className="form-label">Website<span className="mx-2" style={{ color: '#d54e21' }}>*</span></label>
                    <input className="p-2 border-1 border-bottom w-100" style={{ borderColor: '#6f6f6f36' }} type="text" required />
                  </div>
                </div>
                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input" required />
                  <label className="form-check-label">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>
                <button type="submit" className="btn rounded-0 text-capitalize">post comment</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ]
}
