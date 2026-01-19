'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header({ currentPage = 'home' }: { currentPage?: string }) {
  useEffect(() => {
    // Load jQuery and Bootstrap scripts
    if (typeof window !== 'undefined') {
      // Header sticky logic will be handled by header.js
    }
  }, [])

  const getActiveClass = (page: string) => {
    return currentPage === page ? 'color' : ''
  }

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-top navbar-expand-lg p-0 bg-blue text-white">
        <div className="container-fluid">
          <div className="col-6">
            <p>Your Dallas/Ft. Worth Plumbing Experts</p>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div className="part d-flex pe-4">
              <div className="img pe-2">
                {/* Performance Optimization: Use next/image for automatic optimization and modern formats */}
                <Image src="/img/clock.svg" alt="" width={20} height={20} />
              </div>
              <p>Open 24/7</p>
            </div>
            <div className="part d-flex">
              <div className="img pe-2">
                {/* Performance Optimization: Use next/image for automatic optimization and modern formats */}
                <Image src="/img/location.svg" alt="" width={20} height={20} />
              </div>
              <p>6211 W Northwest Hwy Ste C251, Dallas, TX 75225</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Header */}
      <header>
        <nav className="navbar navbar-main navbar-expand-lg p-0">
          <div className="container-fluid">
            <button className="sticky btn modal-btn border-0 p-0" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
              <i className="bi bi-list fs-4"></i>
            </button>

            <div className="col-3 left-side">
              {/* Performance Optimization: Use next/image with priority for LCP optimization */}
              <Link href="/" className="logo default-logo">
                <Image src="/img/tribeca-logo.png" alt="Tribeca Plumbing, Inc." width={200} height={60} priority style={{ maxHeight: '60px', width: 'auto', height: 'auto' }} />
              </Link>
              <Link href="/" className="logo sticky-logo" style={{ display: 'none' }}>
                <Image src="/img/tribeca-logo.png" alt="Tribeca Plumbing, Inc." width={200} height={60} style={{ maxHeight: '60px', width: 'auto', height: 'auto' }} />
              </Link>
            </div>

            <div className="col-6 d-flex justify-content-center">
              <ul className="navbar-nav text-capitalize">
                <li className="nav-item px-4 d-flex align-items-center">
                  <Link href="/" className={getActiveClass('home')}>Home</Link>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <div className="dropdown">
                    <a className="btn p-0 border-0" role="button">
                      Pages<i className="fa-solid bi bi-chevron-down fs-7"></i>
                    </a>
                    <ul className="dropdown-menu py-0 rounded-0 border-0">
                      <li><Link className="dropdown-item border-bottom" href="/team">Our Team</Link></li>
                      <li><Link className="dropdown-item border-bottom" href="/services">Services</Link></li>
                      <li><Link className="dropdown-item border-bottom" href="/price">Pricing plan</Link></li>
                      <li><Link className="dropdown-item border-bottom" href="/faq">Faq</Link></li>
                      <li><Link className="dropdown-item" href="/error">404 error</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item px-4 d-flex align-items-center">
                  <Link href="/about" className={getActiveClass('about')}>About</Link>
                </li>
                <li className="nav-item px-4 d-flex align-items-center">
                  <Link href="/blog" className={getActiveClass('blog')}>Blog</Link>
                </li>
                <li className="nav-item px-4 d-flex align-items-center">
                  <Link href="/contact" className={getActiveClass('contact')}>Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-3 right-side d-flex justify-content-end">
              <button type="button" className="btn border-0 p-0 pe-4 search-btn main-search" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                <i className="fa-solid fa-magnifying-glass fs-5"></i>
              </button>
              <Link href="/contact" className="header-btn text-decoration-none">
                <div className="btn border-0 rounded-0 p-0 d-flex justify-content-center align-items-center">Get A Quote</div>
              </Link>
            </div>

            <button type="button" className="btn border-0 p-0 search-btn res-search" data-bs-toggle="modal"
              data-bs-target="#staticBackdrop">
              <i className="fa-solid fa-magnifying-glass fs-5"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Search Modal */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}
        aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-grid align-items-center">
              <div className="d-flex justify-content-center">
                <div className="d-flex border-0 border-1 border-bottom w-50">
                  <input type="text" id="searchInput" placeholder="Search ..."
                    className="text-white form-control border-0 rounded-0" />
                  <a href="#" className="icon px-4 py-3" id="searchButton">
                    <i className="fa-solid fa-magnifying-glass text-white fs-6"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Menu */}
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasLeft">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <Link className={`nav-link active py-3 border-bottom border-gary ${getActiveClass('home')}`} href="/">Home</Link>
          <div className="dropdown">
            <span className="text-black">Pages</span>
            <a className="btn border-0 p-0 py-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-chevron-down ms-5 text-black"></i>
            </a>
            <div className="border-bottom border-gary"></div>
            <ul className="dropdown-menu py-0 rounded-0 border-0"
              style={{ transform: 'translate(-37rem, 52px) !important' }}>
              <li><Link className="dropdown-item border-bottom border-gary py-3" href="/team">Our Team</Link></li>
              <li><Link className="dropdown-item border-bottom border-gary py-3" href="/services">Services</Link></li>
              <li><Link className="dropdown-item border-bottom border-gary py-3" href="/price">Pricing plan</Link></li>
              <li><Link className="dropdown-item border-bottom border-gary py-3" href="/faq">Faq</Link></li>
              <li><Link className="dropdown-item border-bottom border-gary py-3" href="/error">404 error</Link></li>
            </ul>
          </div>
          <Link className={`nav-link active py-3 border-bottom border-gary ${getActiveClass('about')}`} href="/about">About</Link>
          <Link className={`nav-link active py-3 border-bottom border-gary ${getActiveClass('blog')}`} href="/blog">Blog</Link>
          <Link className={`nav-link active py-3 border-bottom border-gary ${getActiveClass('contact')}`} href="/contact">Contact</Link>
        </div>
      </div>

      {/* Scripts loaded in layout */}
    </>
  )
}
