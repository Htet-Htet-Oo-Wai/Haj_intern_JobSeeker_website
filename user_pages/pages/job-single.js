import React from 'react';
import Link from 'next/link'
import {loadFirebase} from '../lib/db.js';


export default class JobListing extends React.Component {
    constructor (props){
        super(props)
        //this.handleChangeFilter = this.handleChangeFilter.bind(this)
        this.datatableRef = React.createRef();
        this.$datatable = null

        this.initialState = {
            Jname:'',
            J_tel:'',
            J_min_salary:'',
            J_max_salary:'',
            PostedDate:'',
            J_hours:'',
            J_email:'',
            J_city:'',
            J_area:'',
            J_Working_Day:'',
            J_Qualification:'',
            J_JpLevel:'',
            J_Description:'',
            J_Contract:'',
            J_Address:'',
        regenerated_jobs : this.props.all_jobs || [],
            showCities : false,
            cities : []
        }
        this.state = this.initialState
    }
    
    componentDidMount() {
        this.initializeDatatable()
    }
    
    initializeDatatable() {
        this.$datatable = $(this.datatableRef.current).DataTable({
            "pagingType": "full",
            "ordering" : false
        });

       
    }
    static async getInitialProps({res,req,query}){
        let all_jobs = []
        let job = {}
        let companies = []
        let cities = []
        let areas = []
        let firebase = loadFirebase()

        const snaphost = await firebase.firestore().collection('job').doc(query.id).get()
        job = snaphost.data()       

        const querySnapshotCompanies = await firebase.firestore().collection('employer').get()
        querySnapshotCompanies.forEach(doc => {
          companies.push(Object.assign(
              {id : doc.id,
            data : doc.data()}
          ))
        })

        const querySnapshotCities = await firebase.firestore().collection('city').get()
        querySnapshotCities.forEach(doc => {
          cities.push(Object.assign(
              {id : doc.id,
            data : doc.data()}
          ))
        })

        const querySnapshotAreas = await firebase.firestore().collection('area').get()
        querySnapshotAreas.forEach(doc => {
          areas.push(Object.assign(
              {id : doc.id,
            data : doc.data()}
          ))
        })
        return {job,all_jobs, companies, cities, areas}
    }

    

    getCompanyName = (id) => {
        
       const companies = this.props.companies
       let name = ''
       companies.map(company=>{
           if(company.id == id){
               name = company.data.C_Name
           }
       })
       return name
    }
  getDateString = (obj) => {
        var t = new Date(obj);
        t.setSeconds(obj.seconds);
        return t.getDate()+'/'+(t.getMonth()+1)+'/'+t.getFullYear()
    }
    getCityLocation = (city_id) => {
        
        const cities = this.props.cities
       
        
        let city_name = ''
      

        cities.map(city=>{
            if(city.id == city_id){
                city_name = city.data.cityName
            }
        })

       
       return city_name }
       getAreaLocation = (area_id) => {
        
        
        const areas = this.props.areas
        
       
        let area_name = ''


        areas.map(area=>{
            if(area.id == area_id){
                area_name = area.data.areaName
            }
        })
       return area_name
     }
     
     render(){
      const all_jobs = this.state.all_jobs
      const job = this.props.job
      const areas = this.props.areas
      const cities = this.state.cities
      const viewCities = this.props.cities
      const stateObj = this.state
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
              {job && (
                <div>
                     <section className="site-section">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="d-flex align-items-center">
              <div className="border p-2 d-inline-block mr-3 rounded">
                <img src="images/featured-listing-1.jpg" alt="Free Website Template By Free-Template.co"/>
              </div>
              <div>
              <h2>{job.Jname}</h2>
                <div>
            
              <span className="m-2"><span className="icon-clock-o mr-2"></span><span className="text-primary">{job.J_Contract}</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-6">
                <a href="#" className="btn btn-block btn-light btn-md"><span className="icon-heart-o mr-2 text-danger"></span>Save
                  Job</a>
              </div>
              <div className="col-6">
                <a href="login" className="btn btn-block btn-primary btn-md">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-5">
              <figure className="mb-5"><img src="images/images (1).jpg" alt="Free Website Template by Free-Template.co" className="img-fluid rounded"/></figure>
              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3"></span>Job
                Description</h3>
              <p>{job.J_Description}
              </p>
              <p>{job.J_Qualification}</p>
            </div>
            <div className="mb-5">
              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span
                  className="icon-rocket mr-3"></span>Responsibilities</h3>
              <ul className="list-unstyled m-0 p-0">
                <li className="d-flex align-items-start mb-2"><span
                    className="icon-check_circle mr-2 text-muted"></span><span>Necessitatibus quibusdam facilis</span></li>
                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Velit
                    unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente
                    labore</span></li>
                <li className="d-flex align-items-start mb-2"><span
                    className="icon-check_circle mr-2 text-muted"></span><span>Commodi quae ipsum quas est itaque</span></li>
                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit</span></li>
                <li className="d-flex align-items-start mb-2"><span
                    className="icon-check_circle mr-2 text-muted"></span><span>Deleniti asperiores blanditiis nihil quia
                    officiis dolor</span></li>
              </ul>
            </div>
    
            <div className="mb-5">
              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-book mr-3"></span>Education +
                Experience</h3>
              <ul className="list-unstyled m-0 p-0">
                <li className="d-flex align-items-start mb-2"><span
                    className="icon-check_circle mr-2 text-muted"></span><span>N {job.J_JpLevel}</span></li>
                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Velit
                    unde aliquam et voluptas reiciendis non sapiente labore</span></li>
                <li className="d-flex align-items-start mb-2"><span
                    className="icon-check_circle mr-2 text-muted"></span><span>Commodi quae ipsum quas est itaque</span></li>
                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit</span></li>
                <li className="d-flex align-items-start mb-2"><span
                    className="icon-check_circle mr-2 text-muted"></span><span>Deleniti asperiores blanditiis nihil quia
                    officiis dolor</span></li>
              </ul>
            </div>
    
            <div className="mb-5">
              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-turned_in mr-3"></span>Other
                Benifits</h3>
              <ul className="list-unstyled m-0 p-0">
                <li className="d-flex align-items-start mb-2"><span
                    className="icon-check_circle mr-2 text-muted"></span><span>{job.J_min_salary}~{job.J_max_salary}</span></li>
                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Velit
                    unde aliquam et voluptas reiciendis non sapiente labore</span></li>
                <li className="d-flex align-items-start mb-2"><span
                    className="icon-check_circle mr-2 text-muted"></span><span>Commodi quae ipsum quas est itaque</span></li>
                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit</span></li>
                <li className="d-flex align-items-start mb-2"><span
                    className="icon-check_circle mr-2 text-muted"></span><span>Deleniti asperiores blanditiis nihil quia
                    officiis dolor</span></li>
              </ul>
            </div>
    
            
          </div>
          <div className="col-lg-4">
            <div className="bg-light p-3 border rounded mb-4">
              <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
              <ul className="list-unstyled pl-3 mb-0">
                <li className="mb-2"><strong className="text-black">Published on:</strong> 26/6/2020</li>
                <li className="mb-2"><strong className="text-black">Vacancy:</strong> 20</li>
              <li className="mb-2"><strong className="text-black">Employment Status:</strong>{job.J_Contract}</li>
                <li className="mb-2"><strong className="text-black">Experience:</strong> 2 to 3 year(s)</li>
                <li className="mb-2"><strong className="text-black">Job Location:</strong> 82,Ward, Sapporo, Hokkaido</li>
              <li className="mb-2"><strong className="text-black">Salary:</strong>{job.J_min_salary}~{job.J_max_salary}</li>
                <li className="mb-2"><strong className="text-black">Application Deadline:</strong> 20/7/2020</li>
              </ul>
            </div>
    
            <div className="bg-light p-3 border rounded">
              <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Share</h3>
              <div className="px-3">
                <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-facebook"></span></a>
                <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-twitter"></span></a>
                <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-linkedin"></span></a>
                <a href="#" className="pt-3 pb-3 pr-3 pl-0"><span className="icon-pinterest"></span></a>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </section>

                </div>
              )}
              
    
                  
              
            
             
            
          
              
                  
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