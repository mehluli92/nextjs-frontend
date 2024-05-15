import React from 'react'

function Page() {
    return (
        <>
             {/* <!-- special products with sale badge top right --> */}
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">

                            <a href="product-details.html"><img src="https://fakeimg.pl/600x400" alt="special1" className="card-img-top"/></a>
                            <span className="position-absolute top-0 start-100  
                            translate-middle p-2 rounded-pill  
                            badge-color border border-light  
                            rounded-circle"> Sale
    
                            </span>

                            <div className="card-body">
                                <h5 className="card-title">Product 1</h5>

                                {/* <!-- display strikethrough price and sale price --> */}
                                <span className="fw-bold text-secondary fs-6">
                                    <del>$20.00</del>
                                </span>

                                <span className="fw-bold fs-5">
                                    $15.00
                                </span>

                                <div className="d-flex mt-3">
                                    <input type="number" className="form-control quantity" value="1"/>
                                    <a href="#" className="btn secondary-box-btn">Add to cart</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">

                            <a href="product-details.html"><img src="https://fakeimg.pl/600x400" alt="special1" class="card-img-top"/></a>
                            <span className="position-absolute top-0 start-100  
                            translate-middle p-2 rounded-pill  
                            badge-color border border-light  
                            rounded-circle"> Sale
    
                            </span>

                            <div className="card-body">
                                <h5 className="card-title">Product 2</h5>
                                {/* <!-- display strikethrough price and sale price --> */}
                                <span className="fw-bold text-secondary fs-6">
                                    <del>$20.00</del>
                                </span>

                                <span className="fw-bold fs-5">
                                    $15.00
                                </span>

                                <div className="d-flex mt-3">
                                    <input type="number" class="form-control quantity" value="1"/>
                                    <a href="#" className="btn secondary-box-btn">Add to cart</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">

                            <a href="product-details.html"><img src="https://fakeimg.pl/600x400" alt="special1" className="card-img-top"/></a>
                            <span className="position-absolute top-0 start-100  
                            translate-middle p-2 rounded-pill  
                            badge-color border border-light  
                            rounded-circle"> Sale
    
                            </span>

                            <div className="card-body">
                                <h5 className="card-title">Product 3</h5>

                                {/* <!-- display strikethrough price and sale price --> */}
                                <span className="fw-bold text-secondary fs-6">
                                    <del>$20.00</del>
                                </span>

                                <span className="fw-bold fs-5">
                                    $15.00
                                </span>

                                <div className="d-flex mt-3">
                                    <input type="number" className="form-control quantity" value="1"/>
                                    <a href="#" className="btn secondary-box-btn">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">

                            <a href="product-details.html"><img src="https://fakeimg.pl/600x400" alt="special1" className="card-img-top"/></a>
                            <span className="position-absolute top-0 start-100  
                            translate-middle p-2 rounded-pill  
                            badge-color border border-light  
                            rounded-circle"> Sale
    
                            </span>

                            <div className="card-body">
                                <h5 className="card-title">Product 4</h5>

                                {/* <!-- display strikethrough price and sale price --> */}
                                <span className="fw-bold text-secondary fs-6">
                                    <del>$20.00</del>
                                </span>

                                <span className="fw-bold fs-5">
                                    $15.00
                                </span>

                                <div className="d-flex mt-3">
                                    <input type="number" class="form-control quantity" value="1"/>
                                    <a href="#" className="btn secondary-box-btn">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
        </>
    )
}

export default Page
