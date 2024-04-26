import React from "react";
import Link from "next/link";

function Card(){
   return(
    <>
        <div className="card top-card">
            <div className="card-body">
                <Link className="top-card-content" href="">
                    SHOP LOCATOR
                </Link>
                <Link className="top-card-content" href="">
                    MY ACCOUNT
                </Link>
                <Link className="top-card-content" href="">
                    HELP AND SUPPORT
                </Link>
                <Link className="top-card-content" href="">
                    FAQs
                </Link>
            </div>
        </div>
    </>
   );
}

export default Card;