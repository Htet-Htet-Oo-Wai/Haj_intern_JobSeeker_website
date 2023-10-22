export default class Index extends React.Component{
    render(){
        return(
            
            <html>
                <body id="top">
                <div class="site-wrap">
                        <div class="site-mobile-menu site-navbar-target">
                        <div class="site-mobile-menu-header">
                        <div class="site-mobile-menu-close mt-3">
                        <span class="icon-close2 js-menu-toggle"></span>
                        </div>
                        </div>
                        <div class="site-mobile-menu-body"></div>
                        </div>
                        <header className="site-navbar mt-3">
                    <div className="container-fluid">
                      <div className="row align-items-center">
                        <div className="site-logo col-6"><a href="index">Nursing Job <b style={{color : "lightseagreen"}}>Agency</b></a></div>
              
                        <nav className="mx-auto site-navigation">
                          <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                            <li><a href="index" className="nav-link active">Home</a></li>
                            <li><a href="about">About</a></li>
                            <li><a href="contact">Contact</a></li>
                            <li><a href="userSignUp">Registration</a></li>
                           </ul>
                        </nav>
                        
                        <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                          <div className="ml-auto">
                            
          
                          </div>
                          <a href="#" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2"></span></a>
                        </div>
              
                      </div>
                    </div>
                  </header>
                  <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: "url('/images/homelogo2.png')"}}id="home-section">
          
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="mb-5 text-center">
                  <h1 className="text-white font-weight-bold">A Powerful Job Agency</h1>
                  <p>Find your dream jobs in our powerful website.</p>
                </div>
           </div>
          </div>
          </div>
        </section>

        <section class="site-section" id="next-section">
        <div class="container">
        <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">


        <form action="#" class="">
    
    <div class="row form-group">
      <div class="col-md-6 mb-3 mb-md-0">
        <label class="text-black" for="fname">First Name</label>
        <input type="text" id="fname" class="form-control"/>
      </div>
      <div class="col-md-6">
        <label class="text-black" for="lname">Last Name</label>
        <input type="text" id="lname" class="form-control"/>
      </div>
    </div>

    <div class="row form-group">

      <div class="col-md-12">
        <label class="text-black" for="email">Email</label>
        <input type="email" id="email" class="form-control"/>
      </div>
    </div>

    <div class="row form-group">

      <div class="col-md-12">
        <label class="text-black" for="subject">Subject</label>
        <input type="subject" id="subject" class="form-control"/>
      </div>
    </div>

    <div class="row form-group">
      <div class="col-md-12">
        <label class="text-black" for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="7" class="form-control"
          placeholder="Write your notes or questions here..."></textarea>
      </div>
    </div>

    <div class="row form-group">
      <div class="col-md-12">
        <input type="submit" value="Send Message" class="btn btn-primary btn-md text-white"/>
      </div>
    </div>
 </form>
            </div>
            <div class="col-lg-5 ml-auto">
            <div class="p-4 mb-3 bg-white">
              <p class="mb-0 font-weight-bold">Address</p>
              <p class="mb-4">87,Ward Tyokyo,Japan</p>
    
              <p class="mb-0 font-weight-bold">Phone</p>
              <p class="mb-4"><a href="#">864-11-222</a></p>
    
              <p class="mb-0 font-weight-bold">Email Address</p>
              <p class="mb-0"><a href="#">nursejobagency@gmail.com</a></p>
    
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