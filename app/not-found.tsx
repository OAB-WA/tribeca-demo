import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Image from 'next/image'

export default function NotFound() {
  return (
    <>
      <Loader />
      <Header currentPage="error" />

      {/* Top Banner */}
      <section className="top top-img wow fadeIn" data-wow-duration="1s">
        <div className="top-text">
          <div className="text-inner">
            <h2 className="text-capitalize text-white mt-0">404 error</h2>
            <div className="d-flex text-white justify-content-center">
              <Link href="/"><i className="fa-solid fa-house"></i></Link>
              <p className="mb-0"><span className="mx-1">/</span>404 error</p>
            </div>
          </div>
        </div>
      </section>

      {/* Error Page */}
      <section className="error-page wow fadeIn all-margin" data-wow-duration="1s">
        <div className="container">
          <div className="row">
            <div className="col-12 d-grid justify-content-center">
              <div className="img">
                <Image src="/img/404.jpg" alt="404" width={800} height={600} />
              </div>
            </div>
            <div className="text-center">
              <p>Oops! The Page You Are Looking For Does Not Exist. It Might Have Been Moved Or Deleted.</p>
              <Link href="/" className="text-decoration-none d-flex justify-content-center">
                <div className="main-btn btn rounded-0 p-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-house-chimney pe-2"></i>Return To Home
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
