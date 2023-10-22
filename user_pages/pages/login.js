import React from 'react';
import Link from 'next/link'


export default class JobListing extends React.Component {
   
     render(){
    
        return(
            <html>
            <body id="top">
            <nav className="navbar nav-color sticky-top">
            <div className="site-logo col-6"><a href="index" style={{fontSize:30, color: "white"}}>Nursing Job <b style={{color : "rgb(187, 7, 106)"}}>Agency</b></a></div>
            <a href="index">Home</a>
            <a href="#">About</a>
            <a href="contact">Contact</a>
            <a href="filter">Filter</a>
            <a class="btn btn-float signin" href="login" role="button" style={{background: "rgb(187, 7, 106)", color: "white"}}>Sign In</a>
            </nav>
         
              <div className="site-wrap">
            <section className="site-section">
                <div className="container">
                <div class="row">
                            <form class="login100-form validate-form "> <span class="login100-form-title p-b-55">
                    Login
                </span>

                <div class="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
                    <input class="input100" type="text" name="email" placeholder="Email"/>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <span class="lnr lnr-envelope"></span>
                    </span>
                </div>
                <div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
                    <input class="input100" type="text" name="pass" placeholder="Password"/>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <span class="lnr lnr-lock"></span>
                    </span>
                </div>

               

                <div class="contact100-form-checkbox m-l-4">
                    <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                    <label class="label-checkbox100" for="ckb1">
                        Remember me
                    </label>
                </div>
                
                <div class="container-login100-form-btn p-t-25">
                    <button class="login100-form-btn">
                        Login
                    </button>
                </div>

                <div class="text-center w-full p-t-42 p-b-22">
                    <span class="txt1">
                        Or login with
                    </span>
                </div>

                <a href="#" class="btn-face m-b-10">
                    <i class="fa fa-facebook-official"></i>
                    Facebook
                </a>

                <a href="#" class="btn-google m-b-10">
                    <img src="/images/icons/icon-google.png" alt="GOOGLE"/>
                    Google
                </a>

                <div class="text-center w-full p-t-15">
                    <span class="txt1">
                        Not a member?
                    </span>

                    <a class="txt1 bo1 " href="userSignUp">
                        Sign up now							
                    </a>
                    </div>
                </form>
             </div>
            
                </div>
                
              </section>
              
              <footer className="site-footer">
          
                
                <div className="container">
                  <div className="row mb-5">
                    <div className="col-6 col-md-3 mb-4 mb-md-0">
                      <h3>Address</h3>
                      <ul className="list-unstyled">
                        <li><a href="#">87,Ward Tyokyo,Japan </a></li>
                        <li><a href="#">nursejobagency@gmail.com</a></li>
                        <li><a href="#">864-11-222</a></li>
                        
                      </ul>
                    </div>
                    <div className="col-6 col-md-3 mb-4 mb-md-0">
                      <h3>Company</h3>
                      <ul className="list-unstyled">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Resources</a></li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-3 mb-4 mb-md-0">
                      <h3>Support</h3>
                      <ul className="list-unstyled">
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-3 mb-4 mb-md-0">
                      <h3>Contact Us</h3>
                      <div className="footer-social">
                        <a href="#"><span className="icon-facebook"></span></a>
                        <a href="#"><span className="icon-twitter"></span></a>
                        <a href="#"><span className="icon-instagram"></span></a>
                        <a href="#"><span className="icon-linkedin"></span></a>
                      </div>
                    </div>
                  </div>
          
                 
                </div>
              </footer>
            
            </div>
          
         
               
            </body>
          </html>
        )
    }
} 