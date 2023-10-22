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
            
              <section className="site-section" id="next-section">
        <div className="container">
        <h3 className="text-center">Please fill questions: </h3><br/><br/>
        <div className="row">
        <div className="col-lg-6 mb-5 mb-lg-0 border-right">


        <form action="#" method="post" style={{width: 100+"%"}}>
          
        <div className="row form-group">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <div className="wrap-input100 validate-input m-b-16">
                                    <input className="input100" type="text" name="user_fname" placeholder="First Name"required />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <span className="lnr lnr-pencil"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wrap-input100 validate-input m-b-16">
                                    <input className="input100" type="text" name="user_sname" placeholder="Last Name" required />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <span className="lnr lnr-pencil"></span>
                                    </span>
                                </div>
                            </div>
                          </div>
                
                          <div className="row form-group">
                
                            <div className="col-md-12">
                                <div className="wrap-input100 validate-input m-b-16">
                                    <input className="input100" type="text" name="user_bd" placeholder="Birthday"required />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <span className="lnr lnr-calendar-full"></span>
                                    </span>
                                </div>
                            </div>
                          </div>
                         
                
                          <div className="row form-group">
                            <div className="col-md-12">
                                <div className="wrap-input100 validate-input m-b-16">
                                    <input className="input100" type="text" name="user_address" placeholder="Address"  required />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <span className="lnr lnr-location"></span>
                                    </span>
                                </div>
                            </div>
                          </div>
        </form>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="row form-group">
                                <div className="col-md-12">
                                    <div className="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
                                        <input className="input100" type="text" name="user_email" placeholder="Email"  required />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <span className="lnr lnr-envelope"></span>
                                        </span>
                                    </div>
                
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <div className="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
                                        <div className="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
                                            <input className="input100" type="password" name="user_pass" placeholder="Password" required />
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
                                                <span className="lnr lnr-lock"></span>
                                            </span>
                                        </div>
                                    </div>
                
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <div className="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
                                        <input className="input100" type="password" name="pass" placeholder="Confirmed Password"/>
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <span className="lnr lnr-lock"></span>
                                        </span>
                                    </div>
                
                                </div>
                            </div>

            </div>
            <div className="container-login100-form-btn p-t-0">
            <div class="container-login100-form-btn p-t-25">
                    <button class="login100-form-btn" style={{width:200,height:50}}>
                       Sign Up
                    </button>
                </div>
                                <div className="text-center w-full p-t-15">
                                    <span className="txt1">
                                        Do you have an account?
                                    </span>
            
                                    <a className="txt1 bo1" href="login">
                                        Log in now!							
                                    </a>
                                </div>
                            </div>
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