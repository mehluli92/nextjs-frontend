import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';

function BottomSection() {
    return (
        <>
              {/* <!-- align 3 icons in a row with title and description --> */}
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="bottom-icons">
                            {/* <i className="fas fa-shopping-basket fa-5x mb-3"></i> */}
                            <Image
                            src="/img/shopping-basket.svg"
                            width={80}
                            height={80}
                            alt="basket"
                            />
                            <div className="text-uppercase fw-bold mb-2">shop your favourites</div>
                            <p>Order your most loved products in just a few seconds</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="bottom-icons">
                            <Image
                            src="/img/delivery-bike.svg"
                            width={80}
                            height={80}
                            alt="delivery"
                            />
                            <div className="text-uppercase fw-bold mb-2">same day delivery</div>
                            <p>Same day delivery in as little as 60 minutes</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bottom-icons">
                            <Image
                            src="/img/collect.svg"
                            width={80}
                            height={80}
                            alt="clickncollect"
                            />
                            <div className="text-uppercase fw-bold mb-2">click n collect</div>
                            <p>Order online and collect at your nearest store for free</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default BottomSection
