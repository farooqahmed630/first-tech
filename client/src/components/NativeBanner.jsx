import { useEffect, useRef } from 'react'

// Adsterra Native Banner (ID 32415770)
export default function NativeBanner(){
  const ref = useRef(null)
  useEffect(()=>{
    if(!ref.current) return
    ref.current.innerHTML = ''
    const container = document.createElement('div')
    container.id = 'container-7d6a73e2590ddc8267c5a80c46c8af76'
    ref.current.appendChild(container)
    const s = document.createElement('script')
    s.async = true
    s.dataset.cfasync = 'false'
    s.src = 'https://bauval.org/21/7d6a73e2590ddc8267c5a80c46c8af76'
    ref.current.appendChild(s)
  },[])
  return (
    <section aria-label="Advertisement" style={{maxWidth:'1100px',margin:'0 auto',padding:'8px 16px'}}>
      <div ref={ref}></div>
    </section>
  )
}
