import { cookies } from "next/headers";
// Function that works on the server side
export const getAuthCookies = async () => {
  // Perform server-side operations here
  const serverSideData = 'Some data from the server';

  return { serverSideData };
};
// import React from 'react'

// function AuthCookies() {
//     useEffect(() => {
//         const fetchCSRFToken = async () => {
//           try {
//             // Make a request to fetch the CSRF token
//             const response = await axios.get('http://localhost:8080/sanctum/csrf-cookie');
//             console.log(response);
//             // Extract the CSRF token from the response headers
//             const csrfToken = response.headers['x-csrf-token'];
//             res.setHeader('Set-Cookie', `XSRF-TOKEN=${csrfToken}; Path=/; HttpOnly`);
            
//           } catch (error) {
//             console.error('Error fetching CSRF token:', error);
//           }
//         };
    
//         fetchCSRFToken();
//       }, []);
//   // Perform server-side operations here
//   return { serverSideData: 'Some data from the server' };
// }

// export default AuthCookies;
