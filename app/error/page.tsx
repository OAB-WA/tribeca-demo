import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 Error - Tribeca Plumbing, Inc.',
  description: 'Page Not Found - Tribeca Plumbing, Inc.',
}

export default function ErrorPage() {
  return (
    <>
      <Loader />
      <Header currentPage="error" />

      {/* Top Banner - Optimized with PageHeader component */}
      <PageHeader title="404 Error" />

      {/* Error Page */}
      <section className="error-page all-margin">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="img">
                <Image src="/img/404.jpg" alt="404" width={800} height={600} />
              </div>
              <h2 className="mt-4">Oops! Page Not Found</h2>
              <p className="my-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
              <Link href="/" className="text-decoration-none">
                <div className="main-btn btn border-0 rounded-0 p-0 d-flex justify-content-center align-items-center mx-auto" style={{ width: 'fit-content' }}>
                  Go Back Home
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
