import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faList,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {

  return (
    <div>
      {/* top nav start  */}
        {/* <!-- header with logo, nav menu items, and search box --> */}
    <header>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" href="">
              <Image
              src="/img/tm-click-n-collect-logo.png"
              width={390}
              height={50}
              alt="logo"
              />
            </Link>
                {/* <!-- add 2 buttons with icons --> */}
                <div className="d-flex flex-row header-btns ms-auto">
                    <button className="btn btn-favorite">
                        <FontAwesomeIcon 
                            icon={faHeart} 
                            style={{color: "white" }}
                        />
                        <span className="text-uppercase btn-txt">favourites</span>
                    </button>
                    <button className="btn btn-shopping">
                        <FontAwesomeIcon 
                            icon={faList} 
                            style={{color: "white" }}
                        />
                        <span className="text-uppercase btn-txt">shopping list</span>
                    </button>
                    {/* <!-- add truck icon and shopping basket icon --> */}
                    <div className="d-flex header-icons">
                        <Link href="/cart">
                            < FontAwesomeIcon 
                            icon={faCartShopping}
                            style={{color: "#006CB7" }}
                            size="2x"
                            />
                        </Link>
                    </div>
                </div>


            </nav>
        </div>
    </header>

    {/* <!-- horizontal line --> */}
    <hr className="container hr1"></hr>
      {/* top nav end  */}

      {/* bottom nav start  */}
          <header>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link href="/" className="navbar-brand">
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav list-items ml-auto">
                        <li className="nav-item">
                            <Link href="/" className="nav-link nav-txt">Home</Link>
                        </li>
                        {/* <!-- list with dropdown items --> */}
                        <li class="nav-item dropdown">
                            <Link href="/" className="nav-link nav-txt dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop by aisle
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link href="#" class="dropdown-item">Aisle 1</Link></li>
                                <li><Link href="#" class="dropdown-item">Aisle 2</Link></li>
                                <li><Link href="#" class="dropdown-item">Aisle 3</Link></li>
                            </ul>

                        </li>
                        <li className="nav-item">
                            <Link href="/specials" class="nav-link nav-txt">Specials</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/recipes" class="nav-link nav-txt">Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/locations" class="nav-link nav-txt">Store locations</Link>
                        </li>
                    </ul>

                    {/* <!-- search box with search icon inside --> */}
                    <div className="search-box ms-auto">
                        <input type="text" placeholder="What are you looking for?" className="form-control"/>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        />
                    </div>
                </div>
            </nav>
        </div>
    </header>
      {/* bottom nav end  */}
    </div>
  )
}

export default Navbar