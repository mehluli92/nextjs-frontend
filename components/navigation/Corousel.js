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
    <>
              {/* <!-- full screen slider --> */}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

            <div class="carousel-inner">
                {
                images.map( (image)=>(
                  <div key={image.id}>
                    <div className="carousel-item active">
                    <img src={image} className="d-block w-100" alt="image"/>
                    </div>
                  </div>
                )
                )
                }

            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>

            </a>
        </div>
    </>
  )
}

export default Corousel