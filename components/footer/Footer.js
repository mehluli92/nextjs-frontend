import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    // <div className='footer'>
    //   <div>
    //   <Image
    //     src="/img/tagline.png"
    //     width={290}
    //     height={50}
    //     alt="logo"
    //   />
    //   </div>
    //   <div className='footer-menu'>
    //         <button className="btn-footer" type="button" id="region" data-bs-toggle="dropdown" aria-expanded="false">
    //           <div>USEFUL LINKS</div>
    //           <span className="material-symbols-outlined">expand_more</span>
    //         </button>
    //         <ul class="dropdown-menu footer-drop" aria-labelledby="region">
    //           <li><Link className="dropdown-item text-white" href="#">MY ACCOUNT</Link></li>
    //           <li><Link className="dropdown-item text-white" href="#">STORE LOCATIONS</Link></li>
    //           <li><Link className="dropdown-item text-white" href="#">STORE LOCATOR</Link></li>
    //         </ul>
          
    //         <button className="btn-footer" type="button" id="region" data-bs-toggle="dropdown" aria-expanded="false">
    //           <div>HELP</div>
    //           <span className="material-symbols-outlined">expand_more</span>
    //         </button>
    //         <ul class="dropdown-menu footer-drop" aria-labelledby="region">
    //           <li><Link className="dropdown-item text-white" href="#">FAQs</Link></li>
    //           <li><Link className="dropdown-item text-white" href="#">CONTACT US</Link></li>
    //         </ul>
    //         <Link className='btn-footer text-decoration-none' href="#">SHOPPING LIST</Link>

    //       </div>
      
    // <div className='follow-social'>
    //    Follow Us On:
    //     <Link href="#">
    //       <Image
    //         src="/img/facebook_icon.png"
    //         width={20}
    //         height={20}
    //         alt="logo"
    //       />
    //     </Link>
    // </div>

    // <div className='credits-container'>
    //   <div>© 2024 TM Pick n Pay. All rights reserved.</div>
    //   <div>Developed by Quatrohaus.</div>
    // </div>
     
    // </div>

    <>
      {/* <!-- footer with gray background --> */}
    <footer className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="footer-tag-line">
                        {/* <!-- img --> */}
                        <Image
                        src="/img/tagline.svg"
                        width={290}
                        height={50}
                        alt="tagline"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="footer-links mt-4">
                        {/* <!-- links --> */}
                        {/* <!-- nav ul li --> */}
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#" class="nav-link">useful links</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" class="nav-link">help</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">shopping list</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- social media links and icons --> */}

            <div className="row">
                <div className="col-md-12 text-center">
                    <hr className="hr1"/>
                    <div className="social-media">
                        <h6>Follow Us On</h6>
                           <Link href="#" className='p-2'>
                            <Image
                              src="/img/facebook_icon.svg"
                              width={20}
                              height={20}
                              alt="logo"
                            />
                          </Link>
                          <Link href="#" className='p-2'>
                            <Image
                              src="/img/twitter_icon.svg"
                              width={20}
                              height={20}
                              alt="logo"
                            />
                          </Link>
                          <Link href="#" className='p-2'>
                            <Image
                              src="/img/instagram_icon.svg"
                              width={20}
                              height={20}
                              alt="logo"
                            />
                          </Link>
                    </div>
                </div>
            </div>
        </div>



        {/* <!-- copyright --> */}
        <div className="container">
            <div className="row">
                <hr className="hr1 mt-3"/>
                <div className="col-md-6">
                    <p>&copy; 2024 TM Pick n Pay Zimbabwe. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <p>Developed by <a href="#" className="text-decoration-none">Quatrohaus </a></p>
                </div>

            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer