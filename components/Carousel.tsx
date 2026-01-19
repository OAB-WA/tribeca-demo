'use client'

import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  options?: {
    loop?: boolean
    autoplay?: boolean
    autoplayDelay?: number
    slidesToScroll?: number
  }
  showDots?: boolean
  showNav?: boolean
  slidesPerView?: number | { [key: number]: number }
}

/**
 * Performance Optimization: Embla Carousel component
 * Replaces jQuery-dependent Owl Carousel (~44KB) with lightweight Embla (~2KB)
 * Saves ~42KB and eliminates jQuery dependency
 */
export default function Carousel({ 
  children, 
  className = '', 
  options = {},
  showDots = false,
  showNav = false,
  slidesPerView = 1
}: CarouselProps) {
  const { loop = true, autoplay = true, autoplayDelay = 5000, slidesToScroll = 1 } = options

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop,
      slidesToScroll,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
    },
    autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : []
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(
    typeof slidesPerView === 'number' ? slidesPerView : 1
  )

  // Handle responsive slides per view
  useEffect(() => {
    if (typeof slidesPerView === 'object') {
      const updateSlidesPerView = () => {
        const width = window.innerWidth
        const breakpoints = Object.keys(slidesPerView)
          .map(bp => parseInt(bp))
          .sort((a, b) => b - a)

        for (const bp of breakpoints) {
          if (width >= bp) {
            setCurrentSlidesPerView(slidesPerView[bp])
            return
          }
        }
        setCurrentSlidesPerView(1)
      }

      updateSlidesPerView()
      const handleResize = () => updateSlidesPerView()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [slidesPerView])

  useEffect(() => {
    if (!emblaApi) return

    const updateScrollSnaps = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
    }

    const updateSelectedIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    updateScrollSnaps()
    updateSelectedIndex()
    emblaApi.on('select', updateSelectedIndex)
    emblaApi.on('reInit', updateScrollSnaps)
    emblaApi.on('resize', updateScrollSnaps)

    return () => {
      emblaApi.off('select', updateSelectedIndex)
      emblaApi.off('reInit', updateScrollSnaps)
      emblaApi.off('resize', updateScrollSnaps)
    }
  }, [emblaApi])

  const slideWidth = typeof slidesPerView === 'object' 
    ? `${100 / currentSlidesPerView}%` 
    : `${100 / (typeof slidesPerView === 'number' ? slidesPerView : 1)}%`

  return (
    <div className={`embla ${className}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Array.isArray(children) ? children.map((child, index) => (
            <div key={index} className="embla__slide" style={{ minWidth: slideWidth, maxWidth: slideWidth }}>
              {child}
            </div>
          )) : (
            <div className="embla__slide" style={{ minWidth: slideWidth, maxWidth: slideWidth }}>
              {children}
            </div>
          )}
        </div>
      </div>
      
      {showNav && (
        <>
          <button className="embla__prev" onClick={scrollPrev} aria-label="Previous slide" type="button">
            ‹
          </button>
          <button className="embla__next" onClick={scrollNext} aria-label="Next slide" type="button">
            ›
          </button>
        </>
      )}
      
      {showDots && (
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  )
}
