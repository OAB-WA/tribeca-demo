'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Blog() {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get('searchQuery') as string
    if (query) {
      router.push(`/search?query=${encodeURIComponent(query)}`)
    }
  }

  const blogPosts = [
    { id: 1, title: 'How to Prevent Common Plumbing Emergencies', date: 'October 08, 2024', excerpt: 'Learn how to prevent costly plumbing emergencies in your Dallas home...' },
    { id: 2, title: 'Choosing the Right Water Heater for Your Home', date: 'October 08, 2024', excerpt: 'Tankless vs traditional water heaters - which is right for your Dallas home...' },
    { id: 3, title: 'HVAC Maintenance Tips for Texas Summers', date: 'October 08, 2024', excerpt: 'Keep your AC running efficiently during hot Dallas summers with these tips...' },
    { id: 4, title: 'Signs You Need Professional Drain Cleaning', date: 'October 08, 2024', excerpt: 'Know when to call a professional plumber for drain cleaning services...' },
    { id: 5, title: 'Emergency Plumbing: What to Do Before Help Arrives', date: 'October 08, 2024', excerpt: 'Important steps to take during a plumbing emergency before our team arrives...' },
    { id: 6, title: 'Commercial Plumbing Services for Dallas Businesses', date: 'October 08, 2024', excerpt: 'Professional plumbing solutions for commercial properties in the Dallas area...' },
  ]

  return (
    <>
      <Loader />
      <Header currentPage="blog" />

      {/* Top Banner - Optimized with PageHeader component */}
      <PageHeader title="Blog" />

      {/* Blog Page */}
      <div className="blog-page all-margin wow fadeIn">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-4 blog-sec">
              <form onSubmit={handleSearch} className="search-form">
                <div className="row pe-5">
                  <div className="col-10">
                    <input className="w-100 border border-input px-2" type="search" id="searchQuery" name="searchQuery" required />
                  </div>
                  <button type="submit" className="col-2 d-flex justify-content-center align-items-center bg-main border-0 px-0">
                    <i className="fa-solid fa-magnifying-glass blog-icon fs-6 text-white"></i>
                  </button>
                </div>
              </form>

              <h4 className="my-4 text-black">Recent Posts</h4>
              {blogPosts.slice(0, 3).map((post) => (
                <div key={post.id} className="row d-flex align-items-end mb-3">
                  <div className="col-3">
                    <div className="img">
                      <div className="inner-img">
                        <Link href={`/blog${post.id}`}>
                          {/* Performance Optimization: Lazy load blog thumbnail images */}
                        <Image src={`/img/blog-0${post.id}.jpg`} alt="" width={80} height={80} sizes="80px" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-9 px-1">
                    <Link href={`/blog${post.id}`} className="text-decoration-none">
                      <p className="m-0">{post.title}</p>
                    </Link>
                    <p className="color mt-1 mb-0">{post.date}</p>
                  </div>
                </div>
              ))}

              <h4 className="mt-4 text-black">Recent Comments</h4>
              <p className="text-black">No comments to show.</p>
            </div>

            {/* Blog Posts */}
            <div className="col-8 mt-992-2">
              {/* Row 1 */}
              <div className="row">
                <div className="col-6">
                  <div className="part">
                    <Link href="/blog1">
                      <div className="img">
                        <div className="inner-img">
                          {/* Performance Optimization: Lazy load blog images with proper sizes */}
                          <Image src="/img/blog-01.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, 50vw" className="object-fit-cover" />
                        </div>
                      </div>
                    </Link>
                    <div className="info mt-3">
                      <Link href="/blog1" className="text-decoration-none">
                        <h4 className="text-capitalize">How to Prevent Common Plumbing Emergencies</h4>
                      </Link>
                      <p className="m-0 my-3 color">October 08, 2024</p>
                      <p>Learn how to prevent costly plumbing emergencies in your Dallas home. Simple maintenance tips that can save you time and money…</p>
                      <Link className="btn border-0 p-0 text-decoration-underline mt-3" href="/blog1" role="button">Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-320-1-5">
                  <div className="part">
                    <Link href="/blog2">
                      <div className="img">
                        <div className="inner-img">
                          <Image src="/img/blog-02.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, 50vw" className="object-fit-cover" />
                        </div>
                      </div>
                    </Link>
                    <div className="info mt-3">
                      <Link href="/blog2" className="text-decoration-none">
                        <h4 className="text-capitalize">Choosing the Right Water Heater for Your Home</h4>
                      </Link>
                      <p className="m-0 my-3 color">October 08, 2024</p>
                      <p>Tankless vs traditional water heaters - which is right for your Dallas home? We break down the pros and cons…</p>
                      <Link className="btn border-0 p-0 text-decoration-underline mt-3" href="/blog2" role="button">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="row my-5">
                <div className="col-6">
                  <div className="part">
                    <Link href="/blog3">
                      <div className="img">
                        <div className="inner-img">
                          <Image src="/img/blog-03.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, 50vw" className="object-fit-cover" />
                        </div>
                      </div>
                    </Link>
                    <div className="info mt-3">
                      <Link href="/blog3" className="text-decoration-none">
                        <h4 className="text-capitalize">HVAC Maintenance Tips for Texas Summers</h4>
                      </Link>
                      <p className="m-0 my-3 color">October 08, 2024</p>
                      <p>Keep your AC running efficiently during hot Dallas summers with these essential maintenance tips from our HVAC experts…</p>
                      <Link className="btn border-0 p-0 text-decoration-underline mt-3" href="/blog3" role="button">Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-320-1-5">
                  <div className="part">
                    <Link href="/blog4">
                      <div className="img">
                        <div className="inner-img">
                          <Image src="/img/blog-04.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, 50vw" className="object-fit-cover" />
                        </div>
                      </div>
                    </Link>
                    <div className="info mt-3">
                      <Link href="/blog4" className="text-decoration-none">
                        <h4 className="text-capitalize">Signs You Need Professional Drain Cleaning</h4>
                      </Link>
                      <p className="m-0 my-3 color">October 08, 2024</p>
                      <p>Know when to call a professional plumber for drain cleaning services. Warning signs you shouldn&apos;t ignore…</p>
                      <Link className="btn border-0 p-0 text-decoration-underline mt-3" href="/blog4" role="button">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="row">
                <div className="col-6">
                  <div className="part">
                    <Link href="/blog5">
                      <div className="img">
                        <div className="inner-img">
                          <Image src="/img/blog-05.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, 50vw" className="object-fit-cover" />
                        </div>
                      </div>
                    </Link>
                    <div className="info mt-3">
                      <Link href="/blog5" className="text-decoration-none">
                        <h4 className="text-capitalize">Emergency Plumbing: What to Do Before Help Arrives</h4>
                      </Link>
                      <p className="m-0 my-3 color">October 08, 2024</p>
                      <p>Important steps to take during a plumbing emergency before our team arrives. Minimize damage and stay safe…</p>
                      <Link className="btn border-0 p-0 text-decoration-underline mt-3" href="/blog5" role="button">Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-320-1-5">
                  <div className="part">
                    <Link href="/blog6">
                      <div className="img">
                        <div className="inner-img">
                          <Image src="/img/blog-06.jpg" alt="" width={400} height={300} sizes="(max-width: 768px) 100vw, 50vw" className="object-fit-cover" />
                        </div>
                      </div>
                    </Link>
                    <div className="info mt-3">
                      <Link href="/blog6" className="text-decoration-none">
                        <h4 className="text-capitalize">Commercial Plumbing Services for Dallas Businesses</h4>
                      </Link>
                      <p className="m-0 my-3 color">October 08, 2024</p>
                      <p>Professional plumbing solutions for commercial properties in the Dallas area. Keep your business running smoothly…</p>
                      <Link className="btn border-0 p-0 text-decoration-underline mt-3" href="/blog6" role="button">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
