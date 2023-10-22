import React, { useReducer } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {loadFirebase} from '../lib/db.js';

export default class employerList extends React.Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = "/js/scripts.js";
        script.async = true;

        document.body.appendChild(script);

        const script1 = document.createElement("script");
        script1.src = "/assets/demo/datatables-demo.js";
        script1.async = true;

        document.body.appendChild(script1);
        
    }
    constructor (props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.datatableRef = React.createRef();
        // this.employers = props.employer || []
        this.$datatable = null
        this.initial_state = {
            EMPLOYERID : '',
            C_Name : '',
            C_noEmp: '',
            C_published_date:'',
            C_tel:'',
            C_emailaddr:'',
            C_city:'',
            C_area:'',
            C_Address:'',
            C_Description:'',
            employers: props.employer || [],
            jobs : props.jobs || [],
            areas: props.area || [],
        };
        this.state = this.initial_state;
    }

    componentDidMount () {
        this.initializeDatatable()
    }
    initializeDatatable() {
        this.$datatable = $(this.datatableRef.current).DataTable({
            order: [[3, "desc"]],
        });
    }
    refreshTable() {
        this.$datatable.clear()
        const self = this;
        employerList
            .getInitialProps()
            .then((response) => {
            self.setState({
                employers : response.employer,
            });
            // self.initializeDatatable()
        })
        .bind(this);
    }
    refreshAfterAddTable() {
        const self = this;
        employerList
            .getInitialProps()
            .then((response) => {
            self.setState({
                jobs: response.jobs,
                employers : response.employer,
            });
            // self.initializeDatatable()
        })
    }
   

    static async getInitialProps() {
        const firebase = await loadFirebase() 
        const employerQuerySnapshot = await firebase
            .firestore()
            .collection("employer")
            .limit(10)
            .get();
        const employers = employerQuerySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        const areaQuerySnapshot = await firebase
            .firestore()
            .collection("area")
            .limit(10)
            .get();
        const areas = areaQuerySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        
        const cityQuerySnapshot = await firebase
        .firestore()
        .collection("city")
        .get();
        const cities = cityQuerySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        const jobQuerySnapshot = await firebase
        .firestore()
        .collection("job")
        .get();
        const jobs = jobQuerySnapshot.docs.map((doc) => ({
            data : doc.data(),
            id: doc.id,
        }));
        return { employer: employers, area: areas, city : cities , jobs : jobs };
    }

    deletePassId = (id)=>{
        $("#deleteConfirmModal").modal('show');
        this.setState({delete_id : id})
    }

    addPassId = (id) => {
        this.setState({edit_id : id})
        let firebase = loadFirebase()
        let data = {}
        try{
            firebase.firestore().collection('employer').doc(id).get().
            then((snapshot)=>{
                data = snapshot.data()
                console.log(data)
                this.setState ({
                    EMPLOYERID: data.edit_id,
                    C_Name :data.C_Name,
                    C_noEmp:data.C_noEmp,
                    C_published_date:data.C_published_date,
                    C_tel:data.C_tel,
                    C_emailaddr:data.C_emailaddr,
                    C_city:data.C_city,
                    C_area:data.C_area,
                    C_Address:data.C_Address,
                    C_Description:data.C_Description,
                })
            })
            console.log("getting data")
            console.log(this.state.employerName)
        }catch(error){
            console.log(error)
        }
        console.log(this.state.employerName)
        $("#addJobModal").modal('show')
    }

    editPassId = (id) => {
        this.setState({edit_id : id})
        let firebase = loadFirebase()
        let data = {}
        try{
            firebase.firestore().collection('employer').doc(id).get()
            .then((snapshot)=>{
                data = snapshot.data()
                console.log(data)
                this.setState ({
                    C_Name :data.C_Name,
                    C_noEmp:data.C_noEmp,
                    C_published_date:data.C_published_date,
                    C_tel:data.C_tel,
                    C_emailaddr:data.C_emailaddr,
                    C_city:data.C_city,
                    C_area:data.C_area,
                    C_Address:data.C_Address,
                    C_Description:data.C_Description,
                })
            })
            console.log("getting data")
            console.log(this.state.employerName)
            
        }catch(error){
            console.log(error)
        }
        console.log(this.state.employerName)
        $("#editEmployerModal").modal('show')
    }

    updateEmployer = () =>{
        let firebase = loadFirebase()
        try{
            firebase.firestore().collection('employer').doc(this.state.edit_id).update({
                C_Name:this.state.C_Name,
                C_noEmp:this.state.C_noEmp,
                C_published_date:this.state.C_published_date,
                C_tel:this.state.C_tel,
                C_emailaddr:this.state.C_emailaddr,
                C_city:data.C_city,
                C_area:data.C_area,
                C_Address:this.state.C_Address,
                C_Description:this.state.C_Description,
            });
            this.refreshTable();
        }catch(error){
            console.log(error)
        }
        $("#editEmployerModal").modal('hide')
    }

    getJobCount = (id) => {
        let jobs = this.state.jobs
        let count = 0
        
             jobs.map(job => {
                 if(job.data.EMPLOYERID == id){
                     console.log("same value found")
                     count ++
                 }
             })
             return count;     
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
        if(event.target.name == "J_area" || event.target.name == "C_area" ){
            this.getCities(event.target.value)
        }
        this.setState({showCities : true})
    }
  
    addJob = event => {
        event.preventDefault();
     
        let firebase = loadFirebase() 
        const userRef = firebase.firestore().collection('job')
                .add({
                        EMPLOYERID : this.state.edit_id,
                        Jname:this.state.Jname,
                        J_Contract:this.state.J_Contract,
                        J_min_salary:this.state.J_min_salary,
                        J_max_salary:this.state.J_max_salary,
                        J_hours:this.state.J_hours,
                        J_Working_Day:this.state.J_Working_Day,
                        J_JpLevel:this.state.J_JpLevel,
                        J_tel:this.state.J_tel,
                        PostedDate:this.state.PostedDate,
                        J_email:this.state.J_email,
                        J_area:this.state.J_area,
                        J_city:this.state.J_city,
                        J_Address:this.state.J_Address,
                        J_Description:this.state.J_Description,
                        J_Qualification:this.state.J_Qualification });
                this.setState({
                    EMPLOYERID : '',
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
                    J_Address:''                });
                    this.refreshAfterAddTable();
                console.log(userRef);
    }

    addJobCount = (id) => {
        console.log("Job count adding")
        let data = {}
        try{
            let firebase = loadFirebase()
            firebase.firestore().collection('employer').doc(id).get()
              .then((snapshot)=>{
                  data = snapshot.data();
                  firebase.firestore().collection('employer').doc(id).update({jobCount : data.jobCount+1})  
              })
        }catch(error){
            console.log(error)
        }
      }

    getCities = (id) => {
        let cities = []
        try{
            let firebase = loadFirebase()
            firebase.firestore().collection('city').where('AREAID',"==",id)
            .get()
            .then((snapshot)=> {
                snapshot.forEach(doc => {
                    cities.push(Object.assign(
                        {id : doc.id},
                        doc.data()
                    ))
                })
                console.log({cities})
                this.setState({cities})
            })
        }catch(error){
            console.log(error)
        }
    }

    selectDisable = (event) => {   
        $("#city option:first").attr("disabled","disabled");
   
        $("#area option:first").attr("disabled","disabled"); 
    }

    addEmployer = event => {
        event.preventDefault();
        let firebase = loadFirebase() 
        const userRef = firebase.firestore().collection('employer')
                .add({
                    C_Name:this.state.C_Name,
                    C_noEmp:this.state.C_noEmp,
                    C_published_date:this.state.C_published_date,
                    C_tel:this.state.C_tel,
                    C_emailaddr:this.state.C_emailaddr,
                    C_city:this.state.C_city,
                    C_area:this.state.C_area,
                    C_Address:this.state.C_Address,
                    C_Description:this.state.C_Description,
                    });
                this.setState({
                    C_Name:this.state.C_Name,
                    C_noEmp:this.state.C_noEmp,
                    C_published_date:this.state.C_published_date,
                    C_tel:this.state.C_tel,
                    C_emailaddr:this.state.C_emailaddr,
                    C_city:this.state.C_city,
                    C_area:this.state.C_area,
                    C_Address:this.state.C_Address,
                    C_Description:this.state.C_Description,
                });
                  
        this.refreshAfterAddTable();  
    }

    deleteEmployer = () => {
        let firebase = loadFirebase()
        try{
            firebase.firestore().collection('employer')
            .doc(this.state.delete_id)
            .delete()
            console.log("Delete successful");
            
        }catch(error){
            console.log(error)
        }
        this.refreshAfterAddTable();
    }

    clearInput = (event) => {
        this.setState(this.initial_state);
        let inputs, index;

        inputs = document.getElementsByTagName('input');
        for (index = 0; index < inputs.length; ++index) {
            inputs[index].value = ''
        }
 
        document.getElementById('J_Address').value = '';
        document.getElementById('J_Description').value = '';
        document.getElementById('J_Qualification').value = '';
        document.getElementById('C_Address').value = '';
        document.getElementById('C_Description').value = '';
  
  
        $("#J_Contract option[selected]").removeAttr("selected");    
        $("#J_Contract option:first").attr("selected","selected");
  
        $("#J_JpLevel option[selected]").removeAttr("selected");    
        $("#J_JpLevel option:first").attr("selected","selected");
  
        $("#min_exp_year option[selected]").removeAttr("selected");    
        $("#min_exp_year option:first").attr("selected","selected");
  
        $("#J_city option[selected]").removeAttr("selected");    
        $("#J_city option:first").attr("selected","selected"); 
        
        $("#J_area option[selected]").removeAttr("selected");    
        $("#J_area option:first").attr("selected","selected"); 

        $("#city option[selected]").removeAttr("selected");    
        $("#city option:first").attr("selected","selected"); 
        
        $("#area option[selected]").removeAttr("selected");    
        $("#area option:first").attr("selected","selected"); 
        
        
    }

  render() {
    // const area = this.props.area
    const cities = this.props.city
    const jobCount = this.state.job
    return (
<html>

<body className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="dashboard">Admin</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
        
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <ul className="navbar-nav ml-auto ml-md-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">Profile</a>
                                <a className="dropdown-item" href="#">Activity Log</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="login">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
           
           
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                           
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="login">Login</a>
                                            <a className="nav-link" href="register">Register</a>
                                            <a className="nav-link" href="password">Forgot Password</a>
                                        </nav>
                                    </div>
                                   
                                </nav>
                            </div>
                        </div>    
                    </div>
                    
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">Employer Tables</h1>
                        <div className="row">
                        <div className="col-xl-3 col-md-6">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">Jobs table</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="dashboard">View mores</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                        </div>
                           
                           
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-danger text-white mb-4">
                                    <div className="card-body">New Employer</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#addEmployerModal" data-toggle="modal">+Add New</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                           
                            
                        </div>
                       
                        <div className="card-body">
                        <div className="container admin-container">
        <div className="table-wrapper">
           
                <table ref={this.datatableRef} className="display table table-bordered" style={{width:100+"%"}}>
                    <thead className="thread-color">
                        <tr>
                            <th>Employer Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Number of Jobs</th>
                            <th>Address</th>
                            <th>Add Job</th>
                          <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.employers.map((Employer) => (
                        <tr key={Employer.id}>
                            <td>{Employer.C_Name}</td>
                            <td>{Employer.C_emailaddr}</td>
                            <td>{Employer.C_tel}</td>
                            <td>{this.getJobCount(Employer.id)}</td>
                            <td>{Employer.C_Address}</td>
                          
                            <td>
                                <a onClick={()=>this.addPassId(Employer.id)}> <button className="view btn btn-success" title="add" style={{cursor:"pointer", margin:"auto"}} data-dismiss="modal" data-toggle="tooltip"><i className="fa fa-plus-circle"></i> Job </button></a> &nbsp; <br/>
                            </td>
                            <td>   
                            <a><i onClick={()=>this.editPassId(Employer.id)} className="edit material-icons icon-padding" title="Edit" style={{color: "yellow", cursor:"pointer"}} data-dismiss="modal" data-toggle="tooltip">&#xE254;</i></a> &nbsp;
								<a onClick={()=>this.deletePassId(Employer.id)} className="delete material-icons icon-padding" title="Delete"  style={{color: "red", cursor:"pointer"}} data-dismiss="modal">&#xE872;</a> &nbsp;
							</td>
                        </tr>
                    ))}
                    </tbody>
                   
                </table>
        </div>
    </div>
	
	<div id="editEmployerModal" className="modal fade">
		<div className="modal-dialog info-dialog">
			<div className="modal-content">
					<div className="modal-header">						
                    <h3><i className="fa fa-file-alt"></i> Employer Information Edition</h3>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.clearInput}>&times;</button>
					</div>
					<form action="#" method="post" style={{width: 100+"%", margin: "auto", marginTop: 20}}>
                    <div className="container">
                               
                                            <div className="panel-body">
                                               
                                                    <div className="form-group">
                                                        <label for="C_Name">Company name</label>
                                                        <input type="text" id="C_Name" className="form-control" name="C_Name" placeholder="Enter your Company Name" onChange={this.handleChange} value={this.state.C_Name} required/>
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <label for="C_noEmp">No Of Emplyoee</label>
                                                        <input type="number" id="C_noEmp" className="form-control" name="C_noEmp" placeholder=""  onChange={this.handleChange} value={this.state.C_noEmp} required/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="C_published_date">Published Date</label>
                                                        <input type="date" class="form-control" id="C_published_date" value="date" name="C_published_date" onChange={this.handleChange} value={this.state.C_published_date} required/>
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <label for="C_tel">Tel:</label>
                                                        <input type="text" id="C_tel" className="form-control" name="C_tel" placeholder=""  onChange={this.handleChange} value={this.state.C_tel} required/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="C_Cemailaddr">Email Address</label>
                                                        <input type="text" id="C_emailaddr" className="form-control" name="C_emailaddr" placeholder="abc@gmail.com" onChange={this.handleChange} value={this.state.C_emailaddr} required/>
                                                    </div>
                                                   
                                              
                                            
                                  
                                                    <div class="form-group">
                                                            <label for="J-area">Select Area</label>
                                                            <select name="C_area" id="area" className="form-control" onClick={this.disable} onChange={this.handleChange} required>
                                                    <option disabled>Select Area in Japan</option>
                                                    {this.state.areas.map(Area => (this.state.C_area == Area.id ? 
                                                        <option value={Area.id} selected>{Area.areaName}</option> : 
                                                        <option value={Area.id}>{Area.areaName}</option>
                                                    ))}
                                                </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="J_city">Select your City</label>
                                                            <select name="C_city" id="city" className="form-control" onClick={this.disable} onChange={this.handleChange} required>
                                                    <option disabled>Select Area in Japan</option>
                                                   { cities &&  cities.map(City => (this.state.C_city == City.id ? 
                                                        <option value={City.id} selected>{City.cityName}</option> : 
                                                        <option value={City.id}>{City.cityName}</option>
                                                    ))}
                                                </select>
                                                        </div>
                                                    <div className="form-group">
                                                        <label for="detailAddr">Detail Address</label>
                                                        <textarea className="form-control" id="C_Address"name="C_Address" onChange={this.handleChange} value={this.state.C_Address} required>
                                                            
                                                        </textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="cDes">Company Description</label>
                                                        <textarea className="form-control" id="C_Description" name="C_Description"  onChange={this.handleChange} value={this.state.C_Description} required>
                                                            
                                                        </textarea>
                                                    </div>
                                         
                                            </div>
                                        </div>
                            
                                    
                        <div className="modal-footer">
                            <input type="button" onClick={this.updateEmployer} value="Update" className="btn btn-info btn-width rounded-4 py-2" style={{marginRight:10}} />
                            <input type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.clearInput} value="Cancel" />
                        </div>
                    </form>
			</div>
		</div>
	</div>

    <div id="addEmployerModal" className="modal fade">
		<div className="modal-dialog info-dialog">
			<div className="modal-content">
            <div className="modal-header">						
                    <h3><i className="fa fa-file-alt"></i> Add New Employer</h3>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.clearInput}>&times;</button>
					</div>
					<form action="#" method="post" style={{width: 100+"%", margin: "auto", marginTop: 20}} >
                    <div className="container">
                                
                                     
                                               
                                                    <div className="form-group">
                                                        <label for="C_Name">Company name</label>
                                                        <input type="text" id="C_Name" className="form-control" name="C_Name" placeholder="Enter your Company Name" onChange={this.handleChange} value={this.state.C_Name} required/>
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <label for="C_noEmp">No Of Emplyoee</label>
                                                        <input type="number" id="C_noEmp" className="form-control" name="C_noEmp" placeholder=""  onChange={this.handleChange} value={this.state.C_noEmp} required/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="C_published_date">Published Date</label>
                                                        <input type="date" class="form-control" id="C_published_date" value="date" name="C_published_date" onChange={this.handleChange} value={this.state.C_published_date} required/>
                                                    </div>
                                                    
                                                    <div className="form-group">
                                                        <label for="C_tel">Tel:</label>
                                                        <input type="text" id="C_tel" className="form-control" name="C_tel" placeholder=""  onChange={this.handleChange} value={this.state.C_tel} required/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="C_Cemailaddr">Email Address</label>
                                                        <input type="text" id="C_emailaddr" className="form-control" name="C_emailaddr" placeholder="abc@gmail.com" onChange={this.handleChange} value={this.state.C_emailaddr} required/>
                                                    </div>
                                                   
                                              
                                 
                                                    <div class="form-group">
                                                        <label for="J-area">Select Area</label>
                                                          <select name="C_area" id="area" className="form-control" onClick={this.selectDisable} onChange={this.handleChange} value={this.state.selectedValue} required>
                                                            <option selected disabled>Select Area</option>
                                                            {this.state.areas.map(jobArea => (
                                                                <option value={jobArea.id}>{jobArea.areaName}</option>
                                                            ))}
                                                         </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="J-area">Select City</label>
                                                        {this.state.showCities && (
                                                        <select name="C_city" id="city" className="form-control" onClick={this.selectDisable} onChange={this.handleChange} value={this.state.selectedValue} required>
                                                            <option selected disabled>Select City</option>
                                                            {cities &&  cities.map(city => (
                                                                <option value={city.id}>{city.cityName}</option>
                                                            ))}
                                                        
                                                        </select>
                                                    )}
                                                    </div>
                                                  
                                                    <div className="form-group">
                                                        <label for="detailAddr">Detail Address</label>
                                                        <textarea className="form-control" id="C_Address"name="C_Address" onChange={this.handleChange} value={this.state.C_Address} required>
                                                            
                                                        </textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="cDes">Company Description</label>
                                                        <textarea className="form-control" id="C_Description" name="C_Description"  onChange={this.handleChange} value={this.state.C_Description} required>
                                                            
                                                        </textarea>
                                                    </div>
                                         
                                                   
                                                   
                                                    
                                                  
                                                
                                            
                                           
                                        </div>
                            
                               
                                
                        
                    
                        <div className="modal-footer">
                            <input onClick={this.addEmployer} value="Add Employer" data-dismiss="modal" className="btn btn-info btn-width rounded-4 py-2" style={{marginRight:10}} />
                            <input type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.clearInput} value="Cancel" />
                        </div>
                    </form>
			</div>
		</div>
	</div>

    <div id="addJobModal" className="modal fade">
		<div className="modal-dialog info-dialog">
			<div className="modal-content">
            <div className="modal-header">						
                    <h3><i className="fa fa-file-alt"></i> Add New Job</h3>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.clearInput}>&times;</button>
					</div>
					<form action="#" method="post" style={{width: 100+"%"}} >
                        <form role="Form" method="post" action="" accept-charset="UTF-8">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-6 col-md-8 border">
                                        
                                            
                                            <div class="panel-body">
                                             
                                                    <div class="form-group">
                                                        <label for="Jname">Job Name</label>
                                                        <input type="text" id="Jname" class="form-control" name="Jname" placeholder="Enter your Job Name" onChange={this.handleChange} value={this.state.Jname} required/>
                                                    </div>
                                                    
                                                    <div class="form-group">
                                                        <label for="J_Contract">Employment Status</label>
                                                        <select id="J_Contract" class="form-control" name="J_Contract"  onChange={this.handleChange} value={this.state.selectedValue} required>
                                                        <option selected disabled>Select Job Contract</option>
                                                            <option value="Part Time">Part Time</option>
                                                            <option value="Full Time">Full Time</option>
                                                            
                                                        </select>
                                                    </div>
                                                    <label for="salary">Salary(¥)</label>
                                                    <div class="row">
                                                   <div class="col-xl-6 col-md-8 ">
                                                    <div class="form-group">
                                                       <input type="text" id="min_salary" class="form-control" name="J_min_salary" placeholder="Enter Minimun Salary" onChange={this.handleChange} value={this.state.J_min_salary} required/>
                                                    </div>
                                                    </div>  
                                                   
                                                   <div class="col-xl-6 col-md-8 ">
                                                    <div class="form-group">
                                                      <input type="text" id="max_salary" class="form-control" name="J_max_salary" placeholder="Enter Maximun Salary"  onChange={this.handleChange} value={this.state.J_max_salary} required/>
                                                    </div>
                                                    </div></div>
                                                    <div class="form-group">
                                                        <label for="J_hours">Working Hours</label>
                                                        <input type="text" id="J_hours" class="form-control" name="J_hours" placeholder="Enter Working Hours" onChange={this.handleChange} value={this.state.J_hours} required/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="J_Working_Day">Working Days</label>
                                                        <input type="text" id="J_Working_Day" class="form-control" name="J_Working_Day" placeholder="Enter Working Days" onChange={this.handleChange} value={this.state.J_Working_Day} required/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="Age_range">Age Range</label>
                                                        <input type="number" id="Age_range" class="form-control" name="Age_range" placeholder="Enter Age Range" onChange={this.handleChange} value={this.state.Age_range} required/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="J_JpLevel">Select Japanese Skill</label>
                                                        <select id="J_JpLevel" class="form-control" name="J_JpLevel"  onChange={this.handleChange} value={this.state.selectedValue} required>
                                                        <option selected disabled>Select Japanese level</option>
                                                            <option value="3">N3</option>
                                                            <option value="2">N2</option>
                                                            <option value="1">N1</option>
                                                            
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="J_tel">Tel:</label>
                                                        <input type="text" id="J_tel" class="form-control" name="J_tel" placeholder="Enter phone:" onChange={this.handleChange} value={this.state.J_tel} required/>
                                                    </div>
                                                      
                                                    
                                            
                                             
                                            </div>
                                        </div>
                                   <div class="col-xl-6 col-md-8 border">
                                         <div class="panel-body">
                                         <div class="form-group">
                                                                <label>Posted Date</label>
                                                                <input type="date" class="form-control" id="PostedDate" value="datetime" name="PostedDate" onChange={this.handleChange} value={this.state.PostedDate} required/>
                                                      </div>
                                             <div class="form-group">
                                                        <label for="J_email">Email Address</label>
                                                        <input type="text" id="J_email" class="form-control" name="J_email" placeholder="abc@gmail.com" onChange={this.handleChange} value={this.state.J_email} required/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="J-area">Select Area</label>
                                                          <select name="J_area" id="area" className="form-control" onClick={this.selectDisable} onChange={this.handleChange} value={this.state.selectedValue} required>
                                                            <option selected disabled>Select Area</option>
                                                            {this.state.areas.map(jobArea => (
                                                                <option value={jobArea.id}>{jobArea.areaName}</option>
                                                            ))}
                                                         </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="J-area">Select City</label>
                                                        {this.state.showCities && (
                                                        <select name="J_city" id="city" className="form-control" onClick={this.selectDisable} onChange={this.handleChange} value={this.state.selectedValue} required>
                                                            <option selected disabled>Select City</option>
                                                            {cities &&  cities.map(city => (
                                                                <option value={city.id}>{city.cityName}</option>
                                                            ))}
                                                        
                                                        </select>
                                                    )}
                                                    </div>
                                                  
                                                   
                                                    
                                                    <div class="form-group">
                                                        <label for="detailAddr">Detail Address</label>
                                                        <textarea class="form-control"  id="J_Address" name="J_Address" onChange={this.handleChange} value={this.state.J_Address} required>
                                                            
                                                        </textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="JobDes">Job Description</label>
                                                        <textarea class="form-control"  id="J_Description" name="J_Description" onChange={this.handleChange} value={this.state.J_Description} required>
                                                            
                                                        </textarea>
                                                    </div>
                                                   
                                                    <div class="form-group">
                                                        <label for="Qual">Other Qualification</label>
                                                        <textarea class="form-control" id="J_Qualification" name="J_Qualification" onChange={this.handleChange} value={this.state.J_Qualification} >
                                                            
                                                        </textarea>
                                                    </div>
                                                    
                                               
                                                 
                                                  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </form>
                                </form>
					<div className="modal-footer">
                        <input type="button" onClick={this.addJob} value="Add" className="btn btn-info btn-width rounded-4 py-2" data-dismiss="modal" style={{marginRight:10}} />
                        <input type="button" className="btn btn-secondary" data-dismiss="modal" value="Cancel" />
					</div>
			</div>
		</div>
	</div>
	
	<div id="deleteConfirmModal" className="modal fade">
		<div className="modal-dialog del-dialog">
			<div className="modal-content"> 
            <div className="modal-header">						
                    <h3><i className="fa fa-file-alt"></i> Delete Information</h3>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.clearInput}>&times;</button>
					</div>                                                   
				<form>
					<div className="modal-body" style={{fontFamily: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif"}}>					
						<p>Are you sure you want to delete this company?</p>
						<p className="text-warning"><small>This action cannot be undone.</small></p>
					</div>
				</form>
                <div className="modal-footer">
					<input type="button" className="btn btn-secondary" data-dismiss="modal" value="Cancel" />
					<input type="button" className="btn btn-danger" value="Delete" data-dismiss="modal" onClick={this.deleteEmployer} />
				</div>
			</div>
		</div>
	</div>
  
                        </div>    
                        </div>
            </main>
        
          </div>

       </div>
    </body>
</html>
)}}