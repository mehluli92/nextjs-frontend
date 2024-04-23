import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footer'>
      <div>
      <Image
        src="/img/tagline.png"
        width={290}
        height={50}
        alt="logo"
      />
      </div>
      <div className='footer-menu'>
            <button className="btn-footer" type="button" id="region" data-bs-toggle="dropdown" aria-expanded="false">
              <div>USEFUL LINKS</div>
              <span className="material-symbols-outlined">expand_more</span>
            </button>
            <ul class="dropdown-menu footer-drop" aria-labelledby="region">
              <li><Link className="dropdown-item text-white" href="#">MY ACCOUNT</Link></li>
              <li><Link className="dropdown-item text-white" href="#">STORE LOCATIONS</Link></li>
              <li><Link className="dropdown-item text-white" href="#">STORE LOCATOR</Link></li>
            </ul>
          
            <button className="btn-footer" type="button" id="region" data-bs-toggle="dropdown" aria-expanded="false">
              <div>HELP</div>
              <span className="material-symbols-outlined">expand_more</span>
            </button>
            <ul class="dropdown-menu footer-drop" aria-labelledby="region">
              <li><Link className="dropdown-item text-white" href="#">FAQs</Link></li>
              <li><Link className="dropdown-item text-white" href="#">CONTACT US</Link></li>
            </ul>
            <Link className='btn-footer text-decoration-none' href="#">SHOPPING LIST</Link>

          </div>
      
    <div className='follow-social'>
       Follow Us On:
        <Link href="#">
          <Image
            src="/img/facebook_icon.png"
            width={20}
            height={20}
            alt="logo"
          />
        </Link>
    </div>

    <div className='credits-container'>
      <div>© 2024 TM Pick n Pay. All rights reserved.</div>
      <div>Developed by Quatrohaus.</div>
    </div>
     
    </div>
  )
}

export default Footer