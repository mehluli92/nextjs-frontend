'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setCpassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(name);
        try {
            const response = await fetch('http://localhost:8080/sanctum/csrf-cookie', {
                method: 'GET',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if(response == 204){
                console.log('cookie received sucess');
                const data = await response.json();
                console.log(data);
            }
            
        } catch (error) {
            
        }
        try {
            const response = await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            if(response.ok){
                const data = await response.json();
                console.log(data);
            }else{
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    }

    return (
        <>
                 {/* login section with remember me and forgot password */}
        <section class="login-section">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="login-form">
                            <h2 class="text-center">Register</h2>
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input 
                                    type="string" 
                                    class="form-control" 
                                    value={name}
                                    id="name" 
                                    onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input 
                                    type="email" 
                                    class="form-control" 
                                    id="email" 
                                    aria-describedby="emailHelp"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input 
                                    type="password" 
                                    class="form-control" 
                                    id="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="c_password" class="form-label">Confirm Password</label>
                                    <input 
                                    type="c_password" 
                                    class="form-control" 
                                    id="password"
                                    value={c_password}
                                    onChange={(e)=>setCpassword(e.target.value)}
                                    />
                                </div>
                                
                                <button type="submit" class="btn secondary-box-btn">Register</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default Page
