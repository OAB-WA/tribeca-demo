import Image from 'next/image'

interface ParallaxSectionProps {
  backgroundImage: string
  children: React.ReactNode
  className?: string
}

export default function ParallaxSection({ backgroundImage, children, className = "" }: ParallaxSectionProps) {
  return (
    <div className={`img-section fix-img wow fadeIn position-relative overflow-hidden ${className}`}>
      <Image 
        src={backgroundImage} 
        alt="Background image" 
        fill 
        sizes="100vw" 
        className="object-fit-cover z-n1" 
      />
      <div className="img-inner">
        <div className="card-img-overlay d-grid align-items-center justify-content-center text-center">
          {children}
        </div>
      </div>
    </div>
  )
}
