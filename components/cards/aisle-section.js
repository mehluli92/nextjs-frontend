import React from "react";
import Link from "next/link";

function AisleSection(){
   return(
    <>
                <section class="products mt-5">
            <div class="container">
                {/* <!-- add horizontal line beside text --> */}
                <div class="row mb-4">
                    <div class="col-md-2">
                        <div class="headings">shop by aisle</div>
                    </div>
                    <div class="col-md-10">
                        <hr class="hr1"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4">
                        <div class="card p-4">
                            <img src="img/grocery.svg" alt="product1" class="card-img-top aisle-img mx-auto d-block"/>
                        </div>
                        <div class="text-center text-uppercase fw-bolder mt-3">groceries</div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card p-4">
                            <img src="img/group.svg" alt="product2" class="card-img-top aisle-img mx-auto d-block"/>
                        </div>
                        <div class="text-center text-uppercase fw-bolder mt-3">household cleaning</div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card p-4">
                            <img src="img/wine.svg" alt="product3" class="card-img-top aisle-img mx-auto d-block"/>
                        </div>
                        <div class="text-center text-uppercase fw-bolder mt-3">wine &amp; liquour</div>
                    </div>

                    {/* <!-- put button on center with no bg color --> */}
                    <div class="col-lg-12 mt-5 text-center">
                        <button class="btn btn-outline-danger fw-bold secondary-color text-uppercase btn-padding ">shop all</button>
                    </div>
                </div>
            </div>
        </section>
    </>
   );
}

export default AisleSection;