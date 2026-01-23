'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Performance Optimization: Hide loader as soon as DOM is interactive (not waiting for all resources)
    // This improves LCP and FCP significantly
    if (typeof window === 'undefined') return

    const hideLoader = () => {
      setIsLoading(false)
    }

    // Hide immediately if already loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      // Minimal delay to prevent flash, optimized for LCP
      setTimeout(hideLoader, 50)
      return
    }

    // Hide when DOM is ready (interactive), not waiting for all resources
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(hideLoader, 50)
      })
    }

    // Fallback: hide after max 50ms regardless (reduced from 500ms for better LCP)
    const maxTimer = setTimeout(hideLoader, 50)

    return () => {
      clearTimeout(maxTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      id="loader" 
      style={{
        position: 'fixed',
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Performance Optimization: Use next/image for loader GIF to enable optimization */}
      <Image 
        src="/img/loader.gif" 
        alt="Loading..." 
        width={288} 
        height={288}
        priority
        style={{ maxWidth: '18rem', height: 'auto' }}
      />
    </div>
  )
}
