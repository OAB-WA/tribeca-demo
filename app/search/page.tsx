'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''

  // Mock search results - in production, this would query a database or API
  const allPosts = [
    { id: 1, title: 'Improve Your Landscape Drainage Basin', image: '/img/blog-01.jpg' },
    { id: 2, title: 'Guide To Choosing A Tankless Water Heater', image: '/img/blog-02.jpg' },
    { id: 3, title: 'If You Want To Use Your Traditional Thermostat', image: '/img/blog-03.jpg' },
    { id: 4, title: 'Plumbing services, keep your home flowing!', image: '/img/blog-04.jpg' },
    { id: 5, title: 'How to Clear Up a Sluggish Drain Fast', image: '/img/blog-05.jpg' },
    { id: 6, title: 'Plumbing : Your Home Is In Trusted Hands', image: '/img/blog-06.jpg' },
  ]

  const filteredPosts = query 
    ? allPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <>
      <Loader />
      <Header currentPage="search" />

      {/* Top Banner - Optimized with PageHeader component */}
      <PageHeader title="Search Results" />

      {/* Search Results */}
      <section className="search-page all-margin">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-4">Search Results for &quot;{query}&quot;</h3>
              
              {query && filteredPosts.length > 0 ? (
                <div className="row">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="col-4 mb-4">
                      <div className="part">
                        <Link href={`/blog${post.id}`}>
                          <div className="img">
                            <div className="inner-img">
                              <Image src={post.image} alt={post.title} width={400} height={300} className="object-fit-cover" />
                            </div>
                          </div>
                        </Link>
                        <div className="info mt-3">
                          <Link href={`/blog${post.id}`} className="text-decoration-none">
                            <h4>{post.title}</h4>
                          </Link>
                          <Link className="btn border-0 p-0 text-decoration-underline mt-3" href={`/blog${post.id}`} role="button">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : query ? (
                <p>No results found for &quot;{query}&quot;</p>
              ) : (
                <p>Please enter a search query.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}
