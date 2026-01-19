'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Performance Optimization: Reduced loader time from 500ms to 300ms for faster perceived load
    // Also hide loader immediately when DOM is ready to improve LCP
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    // Performance Optimization: Hide loader when page is fully loaded
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        setIsLoading(false)
      } else {
        window.addEventListener('load', () => {
          setIsLoading(false)
        })
      }
    }

    return () => {
      clearTimeout(timer)
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', () => {})
      }
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
