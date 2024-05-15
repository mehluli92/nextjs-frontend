import Link from 'next/link'
import React from 'react'

function Topnav() {
  return (
    <div>
          {/* <!-- login/register header section --> */}
    <header className="login-header">
        <nav className="navbar navbar-custom ml-4">
            <div className="navbar-brand">
                <div className="row">

                    <div className="col-md-6">
                        {/* <!-- select option dropdown list of provinces in Zimbabwe --> */}
                        <div className="custom-select">
                            <select name="province" id="province">
                                <option value="harare">Harare Region</option>
                                <option value="bulawayo">Bulawayo Region</option>
                                <option value="midlands">Midlands Region</option>
                                <option value="manicaland">Manicaland Region</option>
                                <option value="masvingo">Masvingo Region</option>
                                <option value="mashonaland east">Mashonaland East Region</option>
                                <option value="mashonaland west">Mashonaland West Region</option>
                                <option value="mashonaland central">Mashonaland Central Region</option>
                                <option value="matabeleland north">Matabeleland North Region</option>
                                <option value="matabeleland south">Matabeleland South Region</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* <!-- select option dropdown list of provinces in Zimbabwe --> */}
                        <div className="custom-select">
                            <select name="store" id="store">
                                <option value="PICK n PAY ARUNDEL">Store: PICK n PAY ARUNDEL</option>
                                <option value="PICK n PAY ASPINDALE">Store: PICK n PAY ASPINDALE</option>
                                <option value="PICK n PAY ASPINDALE">Store: PICK n PAY JOINA CITY</option>
                                <option value="PICK n PAY ARUNDEL">Store: PICK n PAY ARUNDEL</option>
                                <option value="PICK n PAY ASPINDALE">Store: PICK n PAY ASPINDALE</option>
                                <option value="PICK n PAY ASPINDALE">Store: PICK n PAY JOINA CITY</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- align login/register text to the right --> */}
            <span className="login-reg-txt">
                <Link href="/login" className="text-white">Login</Link> 
                <span class="text-white p-2">|</span>
                <Link href="/register" className="text-white">Register</Link>
            </span>
        </nav>
    </header>
    </div>
  )
}

export default Topnav