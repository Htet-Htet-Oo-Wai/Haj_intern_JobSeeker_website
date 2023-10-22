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
    static async getInitialProps(type){

        const all_jobs = await getCollectionRecords(JOB_COLLECTION)

        const companies = await getCollectionRecords(EMPLOYER_COLLECTION)

        const cities = await getCollectionRecords(CITY_COLLECTION)

        const areas = await getCollectionRecords(AREA_COLLECTION)

        return {all_jobs, companies, cities, areas}
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
      const all_jobs = this.state.regenerated_jobs
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
            
              <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: "url('/images/1.png')"}}id="home-section">
                <br/>
              <h1 className="font-weight-bold text-center" style={{color:"rgba(187, 7, 106)", width:600, margin:"auto"}}>A Powerful Job Agency</h1>
             
              </section>
              <section className="site-section">
                <div className="container">
                <div className="row mb-5 justify-content-center" >
                    <div className="col-md-7 text-center">
                      <h2 className="section-title mb-2" style={{color:"rgba(187, 7, 106)",marginLeft:"center"}}>{`${all_jobs.length} - Jobs Found`}</h2>
                    </div>
                </div>
                <div className="row">
                  <div className="col-6">
                  <div className="select-job-items">
                      <span>Sort by</span>
                      <select name="sortby" style={{marginRight : 1+"em"}} onChange={this.reGenerateJobs}>
                          <option value="new_to_old">Newest to Oldest</option>
                          <option value="old_to_new">Oldest to Newest</option>
                      </select>
                </div>
                <div className="col-6">

                </div>
                  </div>
                </div>
               <br/>
              <ul style={{width : 100 + "%"}}>
            
                {this.state.regenerated_jobs && this.state.regenerated_jobs.map((job) => (
                    <li id={job.id} >

                     <div>
                     <div className="row align-items-start job-item  pb-2 mb pt-2">
                      <div className="col-md-2">
                        <Link href={`/job-single?id=${job.id}`}><img src="images/featured-listing-1.jpg" alt="Image" className="img-fluid"/></Link>
                      </div>
                      <div className="col-md-4">
                        <span className="badge px-2 py-1 mb-3" style={{background: "rgb(187, 7, 106)", color: "white"}}>{`${job.data.J_Contract}`}</span>
                        <h2><Link href={`/job-single?id=${job.id}`}><a style={{color:"#3c3c3c",fontWeight:"bold"}}>{`${job.data.Jname}`}</a></Link></h2>

                        <p className="meta">Employer: <strong>{this.getCompanyName(job.data.EMPLOYERID)}&nbsp;&nbsp;&nbsp;</strong>Posted In: <strong>{`${this.getDateString(job.data.PostedDate)}`}</strong></p>
                      
                      </div>
                      <div className="col-md-3 text-left">
                        <h3 style={{color:"#3c3c3c",fontSize:16}}><strong>{this.getCityLocation(job.data.J_city)}</strong></h3>
                        <span className="meta">{this.getAreaLocation(job.data.J_area)}</span>
                      </div>
                      <div className="col-md-3 text-md-right">
                        <strong style={{color:"#3c3c3c"}}>¥{`${job.data.J_min_salary} ~ ¥${job.data.J_max_salary}`}</strong>
                      </div>
                    </div>
                     </div>
                     </li>
                ) )
                }
                </ul>
                      
        <div className="pagination-area pb-115 text-center ">
            <div className="container ">
                <div className="row ">
                    <div className="col-xl-12 ">
                        <div className="single-wrap d-flex justify-content-center ">
                            <nav aria-label="Page navigation example ">
                                <ul className="pagination justify-content-start ">
                                    <li className="page-item " onClick={this.goFirst}><a className="page-link " >First</a></li>
                                    {this.state.current_start > 0 && (<li className="page-item " onClick={this.backwardPage}><a className="page-link " ><span className="ti-angle-left "></span></a></li>)}
                                    {all_jobs.length >= this.state.current_start && (<li className="page-item " onClick={this.forwardPage}><a className="page-link " ><span className="ti-angle-right "></span></a></li>)}
                                    <li className="page-item " onClick={this.goLast}><a className="page-link " >Last</a></li>
                                    
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
          </div></section>  
          
              
                  
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