import React from 'react';
import Link from 'next/link'
import {db, getCollectionRecords, AREA_COLLECTION, CITY_COLLECTION, EMPLOYER_COLLECTION, JOB_COLLECTION} from "../lib/db";


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
            all_jobs : this.props.all_jobs || [],
            recommended_jobs : this.props.recommended_jobs || [],
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
    static async getInitialProps(type){
        let recommended_jobs = []
        let all_jobs = await getCollectionRecords(JOB_COLLECTION)
        let companies = await getCollectionRecords(EMPLOYER_COLLECTION)
        let cities = await getCollectionRecords(CITY_COLLECTION)
        let areas = await getCollectionRecords(AREA_COLLECTION)

        const querySnapshotLimitedJobs = await db.collection('job').orderBy("PostedDate").get()
        querySnapshotLimitedJobs.forEach(doc => {
          recommended_jobs.push(Object.assign(
              {id : doc.id,
            data : doc.data()}
          ))
        })

        return {all_jobs, recommended_jobs : recommended_jobs.reverse(), companies, cities, areas}
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
      console.log(obj)
      var t = new Date(1970, 0, 1);
      t.setSeconds(obj.seconds);
      console.log(`date string is ${t}`)
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
      const companies=this.props.companies
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
            
              <section className="home-section section-hero overlay bg-image" style={{backgroundImage: "url('/images/image_3.png')"}} id="home-section">
          
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-12">
                      <div className="mb-5 text-center" style={{paddingTop:50}}>
                        <h1 className="text-white font-weight-bold" style={{background:"rgba(187, 7, 106, 0.507)", width:600, margin:"auto"}}>A Powerful Job Agency</h1>
                        
                      </div>
                     
                      
                  </div>
                </div>
                </div>
              </section>
              
              
          
              
          
              <section className="site-section">
                <div className="container">
          
                <section className="py-5 bg-image overlay-primary fixed overlay" >
                <div className="container">
                  <div className="row mb-5 justify-content-center">
                    <div className="col-md-7 text-center">
                      <h2 className="section-title mb-2">Jobs Statistics</h2>
                      <p className="lead" style={{color:"rgb(61, 58, 58)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde officiis recusandae sequi excepturi corrupti.</p>
                    </div>
                  </div>
                  <div className="row pb-0 block__19738 section-counter">
                    <div className="col-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="d-flex align-items-center justify-content-center mb-2">
                        <strong className="number">{`${all_jobs.length}`} </strong>
                      </div>
                      <span className="caption">Jobs In List</span>
                    </div>
          
                    <div className="col-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="d-flex align-items-center justify-content-center mb-2">
                        <strong className="number">120</strong>
                      </div>
                      <span className="caption">Jobs Filled</span>
                    </div>
          
                    <div className="col-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div className="d-flex align-items-center justify-content-center mb-2">
                   <strong className="number">{`${companies.length}`} </strong>
                      </div>
                      <span className="caption">Companies</span>
                    </div>
                  </div>
                  <div className="row mb-5 justify-content-center" style={{paddingTop:50}}>
                    <div className="col-md-7 text-center">

                      <h2 className="section-title mb-2">New Job Posts</h2>
                    </div>
                  </div>
                </div>
              
              </section>    
                  
                  
                  <div className="mb-5">
                  <div className="mb-5">
                  
                  {this.state.recommended_jobs && this.state.recommended_jobs.slice(0,10).map((job) => (
                       
  
                       <table style={{width:"100%",  borderBottomStyle:"dotted"}}>
                         <tr>
                       <div className="row align-items-start job-item-3 pb-2 mb pt-2">
                        <div className="col-md-2">
                          <a href="job-single"><img src="images/featured-listing-1.jpg" alt="Image" className="img-fluid"/></a>
                        </div>
                        <div className="col-md-4">
                          <span className="badge px-2 py-1 mb-3" style={{background: "rgb(187, 7, 106)", color: "white"}}>{`${job.data.J_Contract}`}</span>
                          <h2><a href="job-single" style={{color:"#3c3c3c",fontWeight:"bold"}}>{`${job.data.Jname}`}</a></h2>
                          <p className="meta">Employer: <strong>{this.getCompanyName(job.data.EMPLOYERID)}&nbsp;&nbsp;&nbsp;</strong>Posted In: <strong>{`${this.getDateString(job.data.PostedDate)}`}</strong></p>
                        
                        </div>
                        <div className="col-md-3 text-left">
                          <h3 style={{color:"#3c3c3c",fontSize:16}}><strong>{this.getCityLocation(job.data.J_city)}</strong></h3>
                          <span className="meta">{this.getAreaLocation(job.data.J_area)}</span>
                        </div>
                        <div className="col-md-3 text-md-right">
                          <strong style={{color:"#3c3c3c"}}>¥{`${job.data.J_min_salary} ~ ¥${job.data.J_max_salary}`}</strong>
                        </div>
                       
                      </div></tr>
                      </table>
                  ) )
                  }
              
                     
                    </div>
                    
                 
                  </div>
                  
               
          
                </div>
                <a class="btn btn-float signin" href="filter" role="button" style={{background: "rgb(187, 7, 106)", color: "white",width:200,marginLeft:500}}>View Mores!</a>

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