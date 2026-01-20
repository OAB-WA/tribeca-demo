import Image from 'next/image'
import Link from 'next/link'

interface PageHeaderProps {
  title: string
  parentLink?: string
  parentText?: string
}

export default function PageHeader({ title, parentLink = "/", parentText = "Home" }: PageHeaderProps) {
  return (
    <section className="top wow fadeIn position-relative overflow-hidden" data-wow-duration="1s">
      <Image 
        src="/img/bred.jpg" 
        alt={title} 
        fill 
        priority 
        className="object-fit-cover z-n1" 
        sizes="100vw"
      />
      <div className="top-text">
        <div className="text-inner">
          <h2 className="text-capitalize text-white mt-0">{title}</h2>
          <div className="d-flex text-white justify-content-center">
            <Link href={parentLink}><i className="fa-solid fa-house"></i></Link>
            <p className="mb-0"><span className="mx-1">/</span>{parentText !== "Home" ? <><Link href={parentLink}>{parentText}</Link><span className="mx-1">/</span></> : null}{title}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
