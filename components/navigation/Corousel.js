'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function Corousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const images = ['/img/Butcheries-Best-cuts-scaled.jpeg',
                  '/img/Fresh-of-the-Farm-scaled.jpeg',
                  '/img/Liquor-best-buys-new.png',
                  '/img/Price-Cut-Banner-1-scaled.jpeg',
                  '/img/Price-Cut-Banner-5-scaled.jpeg'
                ];
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container pt-3">
        {images.map(
          (src, index)=>(
            <div className='embla__slide' key={index}>
                <img src={src} className='embla__image'/>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Corousel