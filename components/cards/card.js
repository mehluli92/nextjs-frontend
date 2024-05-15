import React from "react";
import Link from "next/link";

function Card(){
   return(
    <>
        <section className="hero mt-5">
            <div className="container">
                <div className="row border border-1 p-3 shadow-sm text-center">
                    {/* <!-- place 4 titles in a row surronded by a box --> */}
                    <div className="col-md-3">
                        <div className="text-uppercase fw-bolder">
                            <div>shop locator</div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="text-uppercase fw-bolder">
                            <div>my account</div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="text-uppercase fw-bolder">
                            <div>help &amp; support</div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="text-uppercase fw-bolder">
                            <div>faqs</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
   );
}

export default Card;