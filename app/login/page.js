import React from 'react'

function About() {
    return (
        <>
            {/* login section with remember me and forgot password */}
        <section class="login-section">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="login-form">
                            <h2 class="text-center">Login</h2>
                            <form action="">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="remember"/>
                                    <label class="form-check-label" for="remember">Remember me</label>
                                </div>
                                <div class="mb-3">
                                    <a href="#" class="text-decoration-none">Forgot password?</a>
                                </div>
                                <button type="submit" class="btn secondary-box-btn">Login</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default About;
