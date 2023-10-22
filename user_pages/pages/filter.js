import React from 'react';
import Link from 'next/link'
import {db, getCollectionRecords, AREA_COLLECTION, CITY_COLLECTION, EMPLOYER_COLLECTION, JOB_COLLECTION} from "../lib/db";

export default class JobListing extends React.Component {

    constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

    this.initialState = {
        area : props.location || '',
        areaName : props.areaName || '',
        city : '',
        J_Contract : props.type || '',
        J_JpLevel : '',
        posted_within : '',
        J_min_salary : '',
        J_max_salary : '',
        noFoundCondition : false,
        regenerated_jobs : props.jobs || [],
        showCities : false,
        cities : [],
        currentPage : 1,
        firstIndex : 0,
        lastIndex : 5,
        pages : Math.ceil(props.jobs.length/5),
        entryPerPage : 5,
        forWardBtn : true,
        backWardBtn : false,
        icon : "chevron-down"
    }
    this.state = this.initialState
    }

    static async getInitialProps ({req,res,query}){ 

        let jobs = []
        let areas = await getCollectionRecords(AREA_COLLECTION)
        let area = {}
        let cities = await getCollectionRecords(CITY_COLLECTION)
        let dyanmic_cities = []
        let companies = await getCollectionRecords(EMPLOYER_COLLECTION)

        
        let querysnapshot = db.collection('job')
        
        const querySnapshotJob = await querysnapshot.orderBy('PostedDate').get()
        querySnapshotJob.forEach(doc => {
            jobs.push(Object.assign(
                {id : doc.id,
            data : doc.data()}
            ))
        })

        return {...query, areaName : area.name, jobs : jobs.reverse(), areas, cities, dyanmic_cities, companies}
    }

    changeIcon = () => {
        if(this.state.icon == "chevron-down"){
            this.setState({icon : "chevron-up"})
        }else {
            this.setState({icon : "chevron-down"})
        }
        
    }

    getCityLocation = (city_id) => {
        const cities = this.props.cities
        let city_name = ''
        cities.map(city=>{
            if(city.id == city_id){
                city_name = city.data.cityName
            }
        })
       return city_name 
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

    applyFilter = async () => {
        this.setState({
        currentPage : 1,
        firstIndex : 0,
        lastIndex : 5,
        entryPerPage : 5,
        forWardBtn : true,
        backWardBtn : false
        })
        console.log(this.state)
        let jobs = []
        let toReturnJobs = []
        let REGENERATED_IDS = []
        console.log(this.state)
        const today = new Date()
        try{
            let query = db.collection('job')
        if(this.state.J_Contract !== ""){
            query = query.where('J_Contract','==',this.state.J_Contract)
        }
        if(this.state.area !== ""){
            query = query.where('J_area','==',this.state.area)
        }
        if(this.state.city !== ""){
            query = query.where('J_city','==',this.state.city)
        }
        if(this.state.J_min_salary !== ""){
            query = query.where('J_min_salary','>=',parseInt(this.state.J_min_salary))
            query = query.orderBy("J_min_salary")
        }
        if(this.state.J_JpLevel !== ""){
            query = query.where('J_JpLevel','<=',parseInt(this.state.J_JpLevel))
            query = query.orderBy("J_JpLevel")
        }

            query.orderBy("PostedDate").get()
            .then(snaphsot => {
                snaphsot.forEach(doc=>{

                    if(this.state.posted_within !== ""){
                        if(this.state.posted_within == '1'){
                            if(this.checkDateEqual(doc.data().PostedDate)){
                                    jobs.push(Object.assign({
                                        id : doc.id,
                                        data : doc.data()
                                    }))
                            }
                        }else if(this.state.posted_within == '2'){
                            if(this.checkDateLastThreeDays(doc.data().PostedDate)){
                                    jobs.push(Object.assign({
                                        id : doc.id,
                                        data : doc.data()
                                    }))
                            }
                        }else if(this.state.posted_within == '3'){
                            if(this.checkDateLastSevenDays(doc.data().PostedDate)){
                                    jobs.push(Object.assign({
                                        id : doc.id,
                                        data : doc.data()
                                    }))
                            }
                        }else if(this.state.posted_within == '4'){
                            if(this.checkDateThisMonth(doc.data().PostedDate)){
                                jobs.push(Object.assign({
                                    id : doc.id,
                                    data : doc.data()
                                }))
                            }
                        }
                    }else{
                        jobs.push(Object.assign({
                            id : doc.id,
                            data : doc.data()
                        }))
                    }
                    
                })

                REGENERATED_IDS = [...new Set(jobs.reverse().map(job => job.id))] 
                console.log(REGENERATED_IDS)
                if(REGENERATED_IDS.length > 0){
                    REGENERATED_IDS.forEach(id => {
                        db.collection('job').doc(id).get()
                        .then(snapshot=>{
                            toReturnJobs.push(Object.assign({id : id , data : snapshot.data()}))
                            this.setState({regenerated_jobs : toReturnJobs})
                            this.setState({noFoundCondition : false})
                            this.setState({pages : Math.ceil(toReturnJobs.length/5)})
                        })
                    })
                    
                }else {
                    this.setState({noFoundCondition : true})
                    this.setState({regenerated_jobs : []})
                }
            })
        }catch(error){
            console.log(error)
        }
        
    }
    checkDateEqual = (dateobj) => {
        const today = new Date()
        var d = new Date(1970, 0, 1);
        d.setSeconds(dateobj.seconds)
        if(d.getDate()+1 == today.getDate()){
            return true
        }else return false
    }
    checkDateLastThreeDays = (dateobj) => {
        const today = new Date()
        var d = new Date(1970, 0, 1);
        d.setSeconds(dateobj.seconds)
        console.log(`Last 3 days is ${today.getDate()-3}`)
        if(today.getDate()-3 <= d.getDate()+1 && d.getDate()+1 <= today.getDate()){
            return true
        }else return false
    }
    checkDateLastSevenDays = (dateobj) => {
        const today = new Date()
        var d = new Date(1970, 0, 1);
        d.setSeconds(dateobj.seconds)
        console.log(`Last 3 days is ${today.getDate()-7}`)
        if(today.getDate()-7 <= d.getDate()+1 && d.getDate()+1 <= today.getDate()){
            console.log("true")
            return true
        }else return false
    }
    checkDateThisMonth = (dateobj) => {
        let today = new Date()
        var d = new Date(1970, 0, 1);
        d.setSeconds(dateobj.seconds)
        if(Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) ) /(1000 * 60 * 60 * 24) )<= 30){
            console.log("true")
            return true
        }else {
            console.log("false")
            return false
        }
    }

    resetFilter = () => {
        this.setState(this.initialState)
        console.log(this.state)
    }



    handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
    if(event.target.name == "area"){
        this.getAreaName(event.target.value)
        this.getCities(event.target.value)
        this.setState({showCities : true})
    }
    if(event.target.name == "area" && event.target.value == ""){
        this.setState({showCities : false})
    }
    if(event.target.name == "entryPerPage"){
        this.setState({
            currentPage : 1,
            firstIndex : 0,
            lastIndex : parseInt(event.target.value),
            forWardBtn : true,
            backWardBtn : false,
            pages : Math.ceil(this.state.regenerated_jobs.length/parseInt(event.target.value))
            })
    }
    }

    reGenerateJobs = (event) => {
    let jobs = []
    this.setState({[event.target.name] : event.target.value})
    if(this.state.regenerated_jobs.length == this.props.jobs.length){
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
        }
    } else {
        jobs = this.state.regenerated_jobs
        if(event.target.value == "old_to_new"){
            jobs.sort(function(a, b) {
                return a.data.posted_date - b.data.posted_date;
            })
            this.setState({regenerated_jobs : jobs})
        }else if(event.target.value == "new_to_old"){
            jobs.sort(function(a, b) {
                return b.data.posted_date - a.data.posted_date;
            })
            this.setState({regenerated_jobs : jobs})
        }
        
    }

    }

    goPrevious = () => {
    let firstIndex = 0
    this.setState({currentPage : this.state.currentPage-1})
    this.state.currentPage < 3 && this.setState({backWardBtn : false}) 
    this.state.currentPage <= this.state.pages && this.setState({forWardBtn : true}) 
        let lastIndex = this.state.firstIndex
        if(lastIndex==parseInt(this.state.entryPerPage)){
            firstIndex = 0
        }else{
            firstIndex =  lastIndex-parseInt(this.state.entryPerPage)
        }
        
    this.setState({firstIndex : firstIndex})
    this.setState({lastIndex : lastIndex})

    }
    goForward = () => {
    this.setState({currentPage : this.state.currentPage+1})
    this.state.currentPage == this.state.pages-1 && this.setState({forWardBtn : false}) 
    this.state.currentPage >= 1 && this.setState({backWardBtn : true}) 
    this.setState({currentPage : this.state.currentPage+1})
    this.setState({firstIndex : this.state.lastIndex})
    this.setState({lastIndex : this.state.lastIndex+parseInt(this.state.entryPerPage)})

    }

    getCities = (id) => {
    let cities = []
    try{
        db.collection('city').where('AREAID',"==",id).get().
        then((snapshot)=>{
            snapshot.forEach(doc => {
                cities.push(Object.assign(
                    {id : doc.id,
                    data : doc.data()}
                ))
            })
            console.log(cities)
            this.setState({cities})
        })
        
    }catch(error){
        console.log(error)
    }
    }


    getCompanyName = (id) => {
    const companies = this.props.companies
    let name = ''
    companies.map(company=>{
        if(company.id == id){
            name = company.data.name
        }
    })
    return name
    }

    getLocation = (city_id,area_id) => {
        const cities = this.props.cities
        const areas = this.props.areas
        let city_name = ''
        let area_name = ''

        cities.map(city=>{
            if(city.id == city_id){
                city_name = city.data.name
            }
        })
        areas.map(area=>{
            if(area.id == area_id){
                area_name = area.data.name
            }
        })
    return city_name + "," + area_name
    }

    getAreaName = (id) => {
    let area = {}
    try{
        db.collection('area').doc(id).get()
        .then((snapshot)=>{
            area = snapshot.data();
            this.setState({areaName : area.areaName})
        })
    }catch(error){
        console.log(error)
    }
    }

    getValue = (id) => {
        let value = ""
        this.props.areas.map(area => {
            if(area.id == id){
                value = area.data.name
            }
        })
        this.props.cities.map(city => {
            if(city.id == id){
                value = city.data.name
            }
        })
        return value
    }

    getDateString = (obj) => {
    var t = new Date(1970, 0, 1);
    t.setSeconds(obj.seconds);
    // console.log(t)
    // console.log(t.getDate()+1+'/'+(t.getMonth()+1)+'/'+t.getFullYear()+' '+ t.getHours()+':'+ t.getMinutes()+':'+ t.getSeconds()+'-'+t.getTimezoneOffset())
    return t.getDate()+1+'/'+(t.getMonth()+1)+'/'+t.getFullYear()
    }

    filterShow = () => {
    $("#filterModal").modal('show')
    }

    quickView = (id) => {
    let job = {}
    try{
        db.collection('job').doc(id).get()
        .then(snapshot => {
            job = snapshot.data()
            this.setState({
                view_title : job.title,
                view_min_salary : job.min_salary,
                view_max_salary : job.max_salary,
                view_employment_type : job.employment_type,
                view_vacancy : job.vacancy,
                view_min_age : job.min_age,
                view_work_day : job.work_day,
                view_work_hour : job.work_hour,
                view_min_lang_skill : job.min_lang_skill,
                view_min_exp_year : job.min_exp_year,
                view_area : job.area,
                view_city : job.city,
                view_job_address : job.job_address,
                view_company : job.company,
                view_description : job.description,
                view_requirement : job.requirement,
                view_other_qualification : job.other_qualification,
                view_other_message : job.other_message,
                view_posted_date : job.posted_date
            })
        })
        
    }catch(error){
        console.log(error)
    }

    }

    getJobCount = (id) => {
        let count = 0
        this.props.jobs.map(job=>{
            ( job.data.J_area == id || job.data.J_city == id ) && count++
        })
        return count 
    }

    getExpYear = (expID) => {
        let returnString = ""
        switch(expID){
            case 1 : returnString = "Less Than 1 Year" 
                     break
            case 2 : returnString = "1-2 Years"
                     break
            case 3 : returnString = "2-3 Years"
                     break
            case 4 : returnString = "3-6 Years"
                     break
            case 5 : returnString = "6 Years and more"
        }
        return returnString 
    }

    getPostedWithin = (dateID) => {
        let returnString = ""
        switch(dateID){
            case 1 : returnString = "Today" 
                     break
            case 2 : returnString = "Last 3 Days"
                     break
            case 3 : returnString = "Last 7 Days"
                     break
            case 4 : returnString = "This Month"
        }
        return returnString 
    }

    render (){
    const areas = this.props.areas
    const cities = this.state.cities
    const viewCities = this.props.cities

    return (
        <html>
            
            <body id="top">

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
                                        (<option value={area.id}>{area.data.areaName}-({this.getJobCount(area.id)})</option>)
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
                                                (<option value={city.id}>{city.data.cityName}-({this.getJobCount(city.id)})</option>)
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
                                <select name="J_Contract" className="form-control" value={this.state.J_Contract} onChange={this.handleChange}>
                                    <option value="" >Any</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        
                      
                        <div className="single-listing">
                            <div className="select-Categories pb-50">
                                <div className="small-section-tittle2">
                                    <h4>Maximum Japanese Skill</h4>
                                </div>
                                <select name="J_JpLevel" className="form-control" value={this.state.J_JpLevel} onChange={this.handleChange}>
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
                                                <input type="number" className="form-control" id="J_min_salary" name="J_min_salary" value={this.state.J_min_salary} onChange={this.handleChange} />
                                                
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
                <div className="row mb-5 justify-content-center" >
                    <div className="col-md-7 text-center">
                      <h2 className="section-title mb-2" style={{color:"rgba(187, 7, 106)",marginLeft:"center"}}>{`${this.state.regenerated_jobs.length}- Jobs Found`}</h2>
                    </div>
                </div>
                <div className="container">
                  <div className="row">
                  <div className="select-job-items col-11">
                          <span>Sort by</span>
                          <select name="sortby" style={{marginRight : 1+"em"}} onChange={this.reGenerateJobs}>
                              <option value="new_to_old">Newest to Oldest</option>
                              <option value="old_to_new">Oldest to Newest</option>
                          </select>
                          <span>Show </span>
                          <select name="entryPerPage" style={{marginRight : 1+"em"}} onChange={this.handleChange}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                          </select>
                          <span>Entries </span>
                      </div>
                      <div>
                        <button className="btn btn-success" data-toggle="modal" data-target="#filterModal">Filter</button>
                      </div>
                  </div>
                      
                </div> 
               
              <div className="container">
                {/* {this.state.pages && <div>{`pages is ${this.state.pages}`}</div>}
                {this.state.currentPage && <div>{`current page is ${this.state.currentPage}`}</div>}
                {this.state.firstIndex && <div>{`first index is ${this.state.firstIndex}`}</div>}
                {this.state.lastIndex && <div>{`last index is ${this.state.lastIndex}`}</div>} */}
              <ul style={{width : 100 + "%"}}>
            
            {this.state.regenerated_jobs && this.state.regenerated_jobs.slice(this.state.firstIndex,this.state.lastIndex).map((job) => (
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
              </div>
                      
        <div className="pagination-area pb-115 text-center ">
            <div className="container ">
                <div className="row ">
                    <div className="col-xl-12 ">
                        <div className="single-wrap d-flex justify-content-center ">
                            <nav aria-label="Page navigation example ">
                                <ul className="pagination justify-content-start ">
                                {this.state.backWardBtn && <li onClick={this.goPrevious} className="page-item"><a className="page-link" style={{cursor:"pointer"}}><span>Previous</span></a></li>}
                                {this.state.forWardBtn && this.state.regenerated_jobs.length > this.state.entryPerPage && <li onClick={this.goForward} className="page-item"><a className="page-link" style={{cursor:"pointer"}}><span>Next</span></a></li>}
                                    
                                </ul>
                            </nav>
                        </div>
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
