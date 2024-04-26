import React from "react";
import Link from "next/link";

function AisleCard(props){
   return(
    <>
        <div>
            <div className="card aisle-card">
                    <div className="card-body">
                        <Link className="aisle-card-content" href="">
                            <img src={props.image}/>
                        </Link>
                    </div>
                </div>
        </div>
    </>
   );
}

export default AisleCard;