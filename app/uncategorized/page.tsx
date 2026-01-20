import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import PageHeader from '@/components/PageHeader'
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

      {/* Top Banner - Optimized with PageHeader component */}
      <PageHeader title="Uncategorized" />

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
