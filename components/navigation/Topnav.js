import Link from 'next/link'
import React from 'react'

function Topnav() {
  return (
    <div className='top-nav container-fluid'>
      <p className='p-0 m-0'>Region:</p>
        <button className="btn-largest" type="button" id="region" data-bs-toggle="dropdown" aria-expanded="false">
          <div>BULAWAYO REGION ZIMBABWE</div>
          <span className="material-symbols-outlined">expand_more</span>
        </button>
          <ul class="dropdown-menu menu-items" aria-labelledby="region">
            <li><Link className="dropdown-item text-white" href="#">HARARE REGION ZIMBABWE</Link></li>
            <li><Link className="dropdown-item text-white" href="#">MANICALAND REGION ZIMBABWE</Link></li>
            <li><Link className="dropdown-item text-white" href="#">MASHONALAND CENTRAL REGION ZIMBABWE</Link></li>
          </ul>
      <p className='p-0 m-0'>Store:</p>
        <button className="btn-largest" type="button" id="store" data-bs-toggle="dropdown" aria-expanded="false">
          <div>PICK n PAY BRADFIELD</div>
          <span className="material-symbols-outlined">expand_more</span>
        </button>
        <ul class="dropdown-menu menu-items" aria-labelledby="store">
            <li><Link className="dropdown-item text-white" href="#">HARARE REGION ZIMBABWE</Link></li>
            <li><Link className="dropdown-item text-white" href="#">MANICALAND REGION ZIMBABWE</Link></li>
            <li><Link className="dropdown-item text-white" href="#">MASHONALAND CENTRAL REGION ZIMBABWE</Link></li>
          </ul>
    </div>
  )
}

export default Topnav