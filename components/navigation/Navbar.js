import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuButton from '@/app/components/MenuButton';

function Navbar() {

  return (
    <div>
      {/* top nav start  */}
      <nav className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="">
            <Image
            src="/img/tm-click-n-collect-logo.png"
            width={390}
            height={50}
            alt="logo"
            />
          </Link>
          <div>
            <button className='fav-btn'>
              <span className="material-symbols-outlined">favorite</span>
              <p className='p-0 m-0'>FAVOURITES</p>
            </button>
          </div>
          <div>
            <button className='shop-btn'>
            <span className="material-symbols-outlined">list</span>
              <p className='p-0 m-0'>SHOPPING LIST</p>
            </button>
          </div>
          <span className="material-symbols-outlined truck-icon">shopping_cart</span>
          <span className="material-symbols-outlined shop-icon">local_shipping</span>
        </div>
      </nav>
      {/* top nav end  */}

      {/* bottom nav start  */}

      <nav className="navbar navbar-light bottom-nav-borders">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <MenuButton/>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>
        <form>
          <div className="input-group">
            <input type="text" className="form-control search-items" placeholder="What are you looking for..."/>
            <button className="btn search-btn" >
            <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </form>
        </div>
      </nav>
      {/* bottom nav end  */}
    </div>
  )
}

export default Navbar