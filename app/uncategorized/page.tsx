import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Uncategorized - Tribeca Plumbing, Inc.',
  description: 'Uncategorized Blog Posts - Tribeca Plumbing, Inc.',
}

export default function Uncategorized() {
  return (
    <>
      <Loader />
      <Header currentPage="uncategorized" />

      {/* Top Banner */}
      <section className="top top-img wow fadeIn" data-wow-duration="1s">
        <div className="top-text">
          <div className="text-inner">
            <h2 className="text-capitalize text-white mt-0">Uncategorized</h2>
            <div className="d-flex text-white justify-content-center">
              <Link href="/"><i className="fa-solid fa-house"></i></Link>
              <p className="mb-0"><span className="mx-1">/</span>Uncategorized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Uncategorized Content */}
      <section className="uncategorized-page all-margin">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3>Uncategorized Posts</h3>
              <p>This page displays uncategorized blog posts.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
