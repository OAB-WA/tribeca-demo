'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyMapProps {
  src: string
  className?: string
  style?: React.CSSProperties
}

/**
 * Performance Optimization: Lazy load Google Maps iframe using Intersection Observer
 * Only loads the iframe when it's about to enter the viewport
 */
export default function LazyMap({ src, className = '', style }: LazyMapProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      {
        // Start loading when map is 200px away from viewport
        rootMargin: '200px',
      }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className={className} style={style}>
      {shouldLoad ? (
        <iframe
          src={src}
          style={{ height: '500px', border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-100"
          title="Tribeca Plumbing Location Map"
        />
      ) : (
        <div
          style={{
            height: '500px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 0,
          }}
          className="w-100"
        >
          <p style={{ color: '#666', margin: 0 }}>Loading map...</p>
        </div>
      )}
    </div>
  )
}
