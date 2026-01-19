'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loader behavior matching original loader.js
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <>
      <div id="loader" style={{
        position: 'fixed',
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        background: "url('/img/loader.gif') 50% 50% no-repeat #fff",
        backgroundSize: '18rem'
      }}></div>
      <Script src="/js/loader.js" strategy="beforeInteractive" />
    </>
  )
}
