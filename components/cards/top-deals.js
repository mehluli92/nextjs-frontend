import React from 'react'

function TopDeals() {
    return (
        <>
        {/*  <!-- top online deals section --> */}

        <section class="products mt-5">
            <div class="container">
                {/* <!-- add horizontal line beside text --> */}
                <div class="row mb-4">
                    <div class="col-md-2">
                        <div class="headings">top online deals</div>
                    </div>
                    <div class="col-md-10">
                        <hr class="hr1"/>
                    </div>
                </div>
                <div class="row">

                    {/* <!-- put product slider --> */}
                    <div class="col-lg-12">
                        <div id="productSlider" class="carousel slide prodCarousel" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="row">
                                    <div class="carousel-item active">
                                        <div class="col">
                                            <div class="card">
                                                <img src="https://fakeimg.pl/600x400" alt="product1" class="card-img-top"/>
                                                <div class="card-body">
                                                    <h5 class="card-title">Product 1</h5>
                                                    <p class="card-text">$ Price here</p>
                                                    {/* <!-- place quantity box next to add to cart --> */}
                                                    <div class="d-flex">
                                                        <input type="number" class="form-control quantity" value="1"/>
                                                        <a href="#" class="btn secondary-box-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="col">
                                            <div class="card">
                                                <img src="https://fakeimg.pl/600x400" alt="product2" class="card-img-top"/>
                                                <div class="card-body">
                                                    <h5 class="card-title">Product 2</h5>
                                                    <p class="card-text">$ Price here</p>
                                                    {/* <!-- place quantity box next to add to cart --> */}
                                                    <div class="d-flex">
                                                        <input type="number" class="form-control quantity" value="1"/>
                                                        <a href="#" class="btn secondary-box-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="col">
                                            <div class="card">
                                                <img src="https://fakeimg.pl/600x400" alt="product3" class="card-img-top"/>
                                                <div class="card-body">
                                                    <h5 class="card-title">Product 3</h5>
                                                    <p class="card-text">$ Price here</p>
                                                    {/* <!-- place quantity box next to add to cart --> */}
                                                    <div class="d-flex">
                                                        <input type="number" class="form-control quantity" value="1"/>
                                                        <a href="#" class="btn secondary-box-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="col">
                                            <div class="card">
                                                <a href="product-details.html"><img src="https://fakeimg.pl/600x400" alt="product4" class="card-img-top"/></a>
                                                <div class="card-body">
                                                    <h5 class="card-title">Product 4</h5>
                                                    <p class="card-text">$ Price here</p>
                                                    {/* <!-- place quantity box next to add to cart --> */}
                                                    <div class="d-flex">
                                                        <input type="number" class="form-control quantity" value="1"/>
                                                        <a href="#" class="btn secondary-box-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="col">
                                            <div class="card">
                                                <a href="product-details.html"><img src="https://fakeimg.pl/600x400" alt="product4" class="card-img-top"/></a>
                                                <div class="card-body">
                                                    <h5 class="card-title">Product 5</h5>
                                                    <p class="card-text">$ Price here</p>
                                                    {/* <!-- place quantity box next to add to cart --> */}
                                                    <div class="d-flex">
                                                        <input type="number" class="form-control quantity" value="1"/>
                                                        <a href="#" class="btn secondary-box-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="col">
                                            <div class="card">
                                                <a href="product-details.html"><img src="https://fakeimg.pl/600x400" alt="product4" class="card-img-top"/></a>
                                                <div class="card-body">
                                                    <h5 class="card-title">Product 6</h5>
                                                    <p class="card-text">$ Price here</p>
                                                    {/* <!-- place quantity box next to add to cart --> */}
                                                    <div class="d-flex">
                                                        <input type="number" class="form-control quantity" value="1"/>
                                                        <a href="#" class="btn secondary-box-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="col">
                                            <div class="card">
                                                <a href="product-details.html"><img src="https://fakeimg.pl/600x400" alt="product4" class="card-img-top"/></a>
                                                <div class="card-body">
                                                    <h5 class="card-title">Product 7</h5>
                                                    <p class="card-text">$ Price here</p>
                                                    {/* <!-- place quantity box next to add to cart --> */}
                                                    <div class="d-flex">
                                                        <input type="number" class="form-control quantity" value="1"/>
                                                        <a href="#" class="btn secondary-box-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="col">
                                            <div class="card">
                                                <a href="product-details.html"><img src="https://fakeimg.pl/600x400" alt="product4" class="card-img-top"/></a>
                                                <div class="card-body">
                                                    <h5 class="card-title">Product 8</h5>
                                                    <p class="card-text">$ Price here</p>
                                                    {/* <!-- place quantity box next to add to cart --> */}
                                                    <div class="d-flex">
                                                        <input type="number" class="form-control quantity" value="1"/>
                                                        <a href="#" class="btn secondary-box-btn">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#productSlider" role="button" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#productSlider" role="button" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>



                        {/* <!-- put button on center with no bg color --> */}
                        <div class="col-lg-12 mt-5 text-center">
                            <button class="btn btn-outline-danger fw-bold secondary-color text-uppercase btn-padding">shop all</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default TopDeals
