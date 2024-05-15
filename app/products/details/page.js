import React from 'react'

function Page() {
    return (
        <>
             {/* <!-- product details section --> */}
        <section className="product-details mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://fakeimg.pl/600x400" alt="product" class="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h2>Product Name</h2>
                        {/* <!-- add start reviews --> */}
                        <div className="d-flex">

                            <div className="star-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <p className="reviews"> (2 reviews)</p>
                        </div>

                        <p className="price">$ Price here</p>
                        <p className="text-success">In stock</p>
                        <p className="description">Product description here</p>
                        <div className="d-flex mb-4">
                            <input type="number" className="form-control quantity" value="1"/>
                            <a href="#" className="btn secondary-box-btn">Add to cart</a>
                        </div>

                        {/* <!-- add to shopping list button with icon--> */}
                        <button className="btn secondary-box-btn mb-4">
                            <i className="fas fa-bars"></i>
                            <span className="text-uppercase btn-txt">add to shopping list</span>
                        </button>

                        <p>Additional Info Here</p>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- add tab section for additional information & reviews --> */}
        <section className="tab-section mt-5">
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="#additional-info" className="nav-link active fs-4" data-bs-toggle="tab">Additional Information</a>
                    </li>
                    <li className="nav-item">
                        <a href="#reviews" className="nav-link fs-4" data-bs-toggle="tab">Reviews</a>
                    </li>
                </ul>
                <div className="tab-content mt-4">
                    <div className="tab-pane active" id="additional-info">
                        <p>Additional Information Here</p>
                    </div>
                    <div className="tab-pane" id="reviews">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>2 Reviews for Product Name</h3>
                                <div className="d-flex">
                                    <div className="star-rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <p className="reviews">4.5 (2 reviews)</p>
                                </div>
                                <div className="review">
                                    <h5>Review Title Here</h5>
                                    <p>Review Description Here</p>
                                    <div className="d-flex">
                                        <p className="reviewer">Reviewer Name</p>
                                        <p className="review-date">Review Date</p>
                                    </div>
                                </div>
                                <div className="review">
                                    <h5>Review Title Here</h5>
                                    <p>Review Description Here</p>
                                    <div className="d-flex">
                                        <p className="reviewer">
                                            Reviewer Name
                                        </p>
                                        <p className="review-date">Review Date</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3>Add a review</h3>
                                <form action="">
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control" id="name"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="review">Review</label>
                                        <textarea name="review" id="review" cols="30" rows="10" className="form-control"></textarea>
                                    </div>
                                    <div className="form-group mb-4">
                                        <label for="rating">Rating</label>
                                        <select name="rating" id="rating" className="form-control">
                                            <option value="5">5 Stars</option>
                                            <option value="4">4 Stars</option>
                                            <option value="3">3 Stars</option>
                                            <option value="2">2 Stars</option>
                                            <option value="1">1 Star</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn secondary-box-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- related products section --> */}
        <section className="related-products mt-5">
            <div className="container">
                <h2>Related Products</h2>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://fakeimg.pl/300x200" alt="product" class="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Product Name</h5>
                                <p className="card-text">$ Price here</p>
                                <div className="d-flex">
                                    <input type="number" class="form-control quantity" value="1"/>
                                    <a href="#" className="btn secondary-box-btn">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://fakeimg.pl/300x200" alt="product" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Product Name</h5>
                                <p className="card-text">$ Price here</p>
                                <div className="d-flex">
                                    <input type="number" class="form-control quantity" value="1"/>
                                    <a href="#" className="btn secondary-box-btn">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://fakeimg.pl/300x200" alt="product" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Product Name</h5>
                                <p className="card-text">$ Price here</p>
                                <div className="d-flex">
                                    <input type="number" className="form-control quantity" value="1"/>
                                    <a href="#" className="btn secondary-box-btn">Add to cart</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://fakeimg.pl/300x200" alt="product" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Product Name</h5>
                                <p className="card-text">$ Price here</p>

                                <div className="d-flex">
                                    <input type="number" className="form-control quantity" value="1"/>
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
