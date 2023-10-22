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
    static async getInitialProps(type){
        let all_jobs = []
        let companies = []
        let cities = []
        let areas = []
        let firebase = loadFirebase()

        const querySnapshotAllJobs = await firebase.firestore().collection('job').get()
        querySnapshotAllJobs.forEach(doc => {
          all_jobs.push(Object.assign(
              {id : doc.id,
            data : doc.data()}
          ))
        })

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
        return {all_jobs, companies, cities, areas}
    }

    

    reGenerateJobs = (event) => {
            let jobs = []
            this.setState({[event.target.name] : event.target.value})
            if(event.target.value == "old_to_new")
            {
                
                try{
                    db.collection('job').orderBy('PostedDate').get()
                    .then(snaphsot => {
                        snaphsot.forEach(doc=>{
                            jobs.push(Object.assign({
                                id : doc.id,
                                data : doc.data()
                            }))
                        })
                        this.setState({regenerated_jobs : jobs})
                    })
                }catch(error){
                    console.log(error)
                }
            }else if(event.target.value == "new_to_old")
            {
                try{
                    db.collection('job').orderBy('PostedDate').get()
                    .then(snaphsot => {
                        snaphsot.forEach(doc=>{
                            jobs.push(Object.assign({
                                id : doc.id,
                                data : doc.data()
                            }))
                        })
                        this.setState({regenerated_jobs : jobs.reverse()})
                    })
                }catch(error){
                    console.log(error)
                }
            }else {
                try{
                    db.collection('job').get()
                    .then(snaphsot => {
                        snaphsot.forEach(doc=>{
                            jobs.push(Object.assign({
                                id : doc.id,
                                data : doc.data()
                            }))
                        })
                        this.setState({regenerated_jobs : jobs})
                    })
                }catch(error){
                    console.log(error)
                }
            }
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
       
    filterShow = () => {
        $("#filterModal").modal('show')
    }
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
                      <h2 className="section-title mb-2"style={{color:"rgba(187, 7, 106)",marginLeft:"center"}}>{`${all_jobs.length} - Jobs Found`}</h2>
                    </div>
                </div>
                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="count-job mb-35">
                                            <a onClick={this.filterShow} className="filter_btn"><img style={{width : 1+"em",height : 1+"em", marginRight : 1+"em"}} src="/assets/img/logo/filter.png"></img>Filter jobs</a>
                                               
                                                
                                                <h5>{ this.state.regenerated_jobs.length > 0 && `${this.state.regenerated_jobs.length} - Jobs Found` || `No Jobs Found !`}</h5>
                                                
                                                <div className="select-job-items">
                                                    <span>Sort by</span>
                                                    <select name="sortby" style={{marginRight : 1+"em"}} onChange={this.reGenerateJobs}>
                                                        <option value="none">None</option>
                                                        <option value="new_to_old">Newest to Oldest</option>
                                                        <option value="old_to_new">Oldest to Newest</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div>
              <table ref={this.datatableRef} style={{width : 100 + "%"}}>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.regenerated_jobs && this.state.regenerated_jobs.map((job) => (
                    <tr id={job.id} >

                     <td>
                     <div className="row align-items-start job-item  pb-2 mb pt-2">
                      <div className="col-md-2">
                        <a href="job-single"><img src="images/featured-listing-1.jpg" alt="Image" className="img-fluid"/></a>
                      </div>
                      <div className="col-md-4">
                        <span className="badge px-2 py-1 mb-3" style={{background: "rgb(187, 7, 106)", color: "white"}}>{`${job.data.J_Contract}`}</span>
                        <h2><a href="job-single" style={{color:"#3c3c3c",fontWeight:"bold"}}>{`${job.data.Jname}`}</a></h2>
                        <p className="meta">Employer: <strong>{this.getCompanyName(job.data.EMPLOYERID)}&nbsp;&nbsp;&nbsp;</strong>Posted In: <strong>{`${job.data.PostedDate}`}</strong></p>
                      
                      </div>
                      <div className="col-md-3 text-left">
                        <h3 style={{color:"#3c3c3c",fontSize:16}}><strong>{this.getCityLocation(job.data.J_city)}</strong></h3>
                        <span className="meta">{this.getAreaLocation(job.data.J_area)}</span>
                      </div>
                      <div className="col-md-3 text-md-right">
                        <strong style={{color:"#3c3c3c"}}>¥{`${job.data.J_min_salary} ~ ¥${job.data.J_max_salary}`}</strong>
                      </div>
                    </div>
                     </td>
                    </tr>
                ) )
                }
            </tbody>
        </table>
                      
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
          <div className="modal fade" id="filterModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Filter Jobs</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="job-category-listing mb-50">
                        <div className="single-listing pb-50">
    
                            <div className="small-section-tittle2">
                                <h4>Job Area</h4>
                            </div>
                            <div className="select-job-items2">
                                <select name="area" className="form-control" value={this.state.area} onChange={this.handleChange}>
                                    <option value="">Any</option>
                                    {areas && areas.map(area => 
                                        (<option value={area.id}>{area.data.name}</option>)
                                    )}
                                </select>
                            </div>
                        </div>
                        
                        <div className="single-listing">
                            {(this.state.showCities || this.state.areaName !== "") && (
                                <React.Fragment>
                                    <div className="small-section-tittle2">
                                        <h4>{this.state.area == "" ? 'Cities' : `Cities in ${this.state.areaName}`}</h4>
                                    </div>
                                    <div className="select-job-items2 pb-50">
                                        <select name="city" className="form-control" value={this.state.city} onChange={this.handleChange}>
                                        <option value="">Any</option>
                                        {cities && cities.map(city => 
                                                (<option value={city.id}>{city.data.name}</option>)
                                            )}
                                        </select>
                                    </div>
                                </React.Fragment>
                            )}
                            
    
                            <div className="select-Categories pb-50">
                                <div className="small-section-tittle2">
                                    <h4>Employment Type</h4>
                                </div>
                                <div className="select-job-items2">
                                <select name="employment_type" className="form-control" value={this.state.employment_type} onChange={this.handleChange}>
                                    <option value="" >Any</option>
                                    <option value="Full">Full Time</option>
                                    <option value="Part">Part Time</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single-listing">
                            <div className="select-Categories pb-50">
                                <div className="small-section-tittle2">
                                    <h4>Experience</h4>
                                </div>
                                <div className="select-job-items2">
                                <select name="min_exp_year" className="form-control" value={this.state.min_exp_year} onChange={this.handleChange}>
                                    <option value="" >Any</option>
                                    <option value="1">Less Than 1 Year</option>
                                    <option value="2">1-2 Years</option>
                                    <option value="3">2-3 Years</option>
                                    <option value="4">3-6 Years</option>
                                    <option value="5">6 Years and more</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="single-listing">
                            <div className="select-Categories pb-50">
                                <div className="small-section-tittle2">
                                    <h4>Maximum Japanese Skill</h4>
                                </div>
                                <select name="min_lang_skill" className="form-control" value={this.state.min_lang_skill} onChange={this.handleChange}>
                                    <option value="" >Any</option>
                                    <option value="3">N3</option>
                                    <option value="2">N2</option>
                                    <option value="1">N1</option>  
                                </select>
                            </div>
                        </div>
                        <div className="single-listing">
                            <div className="select-Categories pb-50">
                                <div className="small-section-tittle2">
                                    <h4>Posted Within</h4>
                                </div>
                                <select name="posted_within" className="form-control" value={this.state.posted_within} onChange={this.handleChange}>
                                    <option value="">All Time</option>
                                    <option value="1">Today</option>
                                    <option value="2">Last 3 Days</option> 
                                    <option value="3">Last 7 Days</option> 
                                    <option value="4">Last 30 Days</option>  
    
                                </select>
                            </div>
                        </div>
                        <div className="single-listing">
                            <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                                <div className="small-section-tittle2">
                                    <h4>Minimum Salary</h4>
                                </div>
                                <div className="widgets_inner">
                                    <div className="range_item">
                                        <div className="align-items-center">
                                            <div className="price_text">
                                            </div>
                                            <div className="justify-content-center">
                                                <input type="number" className="form-control" id="min_salary" name="min_salary" value={this.state.min_salary} onChange={this.handleChange} />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
                
                <div className="modal-footer">
                    <button type="button" className="btn" onClick={this.resetFilter} aria-label="Cancel">Reset Filter</button>  
                    <button type="button" className="btn" data-dismiss="modal" onClick={this.applyFilter}>Apply Filter</button>
                </div>
                </div>
            </div>
            </div>
              
                  
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