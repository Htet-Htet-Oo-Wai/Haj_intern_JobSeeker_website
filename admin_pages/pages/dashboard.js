import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {loadFirebase} from '../lib/db.js';

export default class jobList extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.datatableRef = React.createRef();
        this.$datatable = null
        this.state = {
            edit_id : '',
            delete_id : '',
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
            areaName : '',
            jobs : props.job || [],
            cities : props.city,
            employers : props.employer || [],
            areas : props.area || [],
        };
    }
    componentDidMount() {
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
      jobList
        .getInitialProps()
        .then((response) => {
          self.setState({
            jobs: response.job,
          });
        })
        .bind(this);
    }
  
    static async getInitialProps() {
        const firebase = await loadFirebase() 
        const jobQuerySnapshot = await firebase
            .firestore()
            .collection("job")
            .get();
        const jobs = jobQuerySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        const areaQuerySnapshot = await firebase
            .firestore()
            .collection("area")
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

        const employerQuerySnapshot = await firebase
            .firestore()
            .collection("employer")
            .limit(10)
            .get();
        const employers = employerQuerySnapshot.docs.map((doc) => ({
            data : doc.data(),
            id: doc.id,
        }));
        return {job : jobs, area : areas, city : cities, employer: employers};
    }

    deletePassId = (id)=>{
        this.setState({delete_id : id})
        $("#deleteConfirmModal").modal('show');
        console.log(this.state.delete_id)
    };      
        viewPassId = (id) => {
            this.setState({edit_id : id})
            let firebase = loadFirebase()
            let data = {}
            try{
                firebase.firestore().collection('job').doc(id).get().
                then((snapshot)=>{
                    data = snapshot.data()
                    console.log(data)
                    this.setState ({
                        EMPLOYERID : data.EMPLOYERID,       
                Jname:data.Jname,
                J_Contract:data.J_Contract,
                J_min_salary:data.J_min_salary,
                J_max_salary:data.J_max_salary,
                J_hours:data.J_hours,
                J_Working_Day:data.J_Working_Day,
                J_JpLevel:data.J_JpLevel,
                J_area : data.J_area,
                J_city: data.J_city,
                 J_tel:data.J_tel,
                PostedDate:data.PostedDate,
                J_email:data.J_email,
                J_area:data.J_area,
                J_city:data.J_city,
                J_Address:data.J_Address,
                J_Description:data.J_Description,
                J_Qualification:data.J_Qualification,
                     
                    })
                })
                console.log("getting data")
            }catch(error){
                console.log(error)
            }
            console.log(this.state.jobName)
            $("#viewModal").modal('show')
        };
        editPassId = (id) => {
            this.setState({edit_id : id})
            let firebase = loadFirebase()
            let data = {}
            try{
                firebase.firestore().collection('job').doc(id).get()
                .then((snapshot)=>{
                    data = snapshot.data()
                    console.log()
                    console.log(data)
                    this.setState ({
                        Jname:data.Jname,
                        J_Contract:data.J_Contract,
                        J_min_salary:data.J_min_salary,
                        J_max_salary:data.J_max_salary,
                        J_hours:data.J_hours,
                        J_Working_Day:data.J_Working_Day,
                        J_JpLevel:data.J_JpLevel,
                        J_area : data.J_area,
                        J_city : data.J_city,
                         J_tel:data.J_tel,
                        PostedDate:data.PostedDate,
                        J_email:data.J_email,
                        J_area:data.J_area,
                        J_city:data.J_city,
                        J_Address:data.J_Address,
                        J_Description:data.J_Description,
                        J_Qualification:data.J_Qualification,
                    })
                    this.getArea(data.J_area)
                })                
            }catch(error){
                console.log(error)
            }
            $("#editModal").modal('show')
        };
        updateJob = () => {
            let firebase = loadFirebase()
            try{
                firebase.firestore().collection('job').doc(this.state.edit_id).update({
                    Jname:this.state.Jname,
                    J_Contract:this.state.J_Contract,
                    J_min_salary:this.state.J_min_salary,
                    J_max_salary:this.state.J_max_salary,
                    J_hours:this.state.J_hours,
                    J_Working_Day:this.state.J_Working_Day,
                    J_JpLevel:this.state.J_JpLevel,
                    J_area : this.state.J_area,
                    J_city : this.state.J_city,
                    J_tel:this.state.J_tel,
                    PostedDate:this.state.PostedDate,
                    J_email:this.state.J_email,
                    J_area:this.state.J_area,
                    J_city:this.state.J_city,
                    J_Address:this.state.J_Address,
                    J_Description:this.state.J_Description,
                    J_Qualification:this.state.J_Qualification
                });
                this.refreshTable();
            }catch(error){
                console.log(error)
            }
        };
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
        if(event.target.name == "AREAID"){
        }
    };
    deleteJob = () => {
        let firebase = loadFirebase()
        try{
            firebase.firestore().collection('job')
            .doc(this.state.delete_id)
            .delete();
            console.log("Delete successful");
            this.refreshTable();
        }catch(error){
            console.log(error)
        }
       
    };

    getEmployer = (EMPLOYERID) => {
        const employers = this.props.employer
        let employerName = ''
        console.log(EMPLOYERID)
        employers && employers.map(Employers => {
            if(Employers.id == EMPLOYERID){
                employerName = Employers.data.C_Name
                
            }
        })
        console.log(employerName)
        return employerName
     }

     getLocation = (CITYID, AREAID) => {
        const city = this.props.city
        const area = this.props.area
        let cityName = ''
        let areaName = ''

        city && city.map(City=>{
            if(City.id == CITYID){
                cityName = City.cityName
            }
        })
        area && area.map(Area=>{
            if(Area.id == AREAID){
                areaName = Area.areaName
            }
        })
       return cityName + "," + areaName
     }
     getAreaOfJob = (AREAID) => {
       const area = this.props.area
    let areaName = ''
    area && area.map(Area=>{
            if(Area.id == AREAID){
                areaName = Area.areaName
            }
        })
       return areaName
     }
     
     
     getcity = (CITYID) => {
        const city = this.props.city
     
        let cityName = ''
      

        city && city.map(City=>{
            if(City.id == CITYID){
                cityName = City.cityName
            }
        })
       
       return cityName 
     }

    getArea = (id) => {
        let area = {}
        try{
            let firebase = loadFirebase()
            firebase.firestore().collection('area')
            .doc(id)
            .get()
            .then((areaQuerySnapshot)=>{
                area = areaQuerySnapshot.data();
                this.setState({areaName : area.areaName})
          })
        }catch(error){
            console.log(error)
        }
    }
    form_clear = (event) => {
        this.setState(this.initial_state);
        let inputs, index;
        inputs = document.getElementsByTagName('input');
        for (index = 0; index < inputs.length; ++index) {
            inputs[index].value = ''
        }
        document.getElementById('J_Address').value = '';
        document.getElementById('J_Description').value = '';
        document.getElementById('J_Qualification').value = '';
       
  
        $("#J_Contract option[selected]").removeAttr("selected");    
        $("#J_Contract option:first").attr("selected","selected");
        $("#J_JpLevel option[selected]").removeAttr("selected");    
        $("#J_JpLevel option:first").attr("selected","selected");
        $("#city option[selected]").removeAttr("selected");    
        $("#city option:first").attr("selected","selected"); 
        $("#area option[selected]").removeAttr("selected");    
        $("#area option:first").attr("selected","selected");   
    };

    disable = (event) => {   
        $("#J_Contract option:first").attr("disabled","disabled"); 
        $("#J_JpLevel option:first").attr("disabled","disabled"); 
        $("#city option:first").attr("disabled","disabled");
        $("#area option:first").attr("disabled","disabled"); 
    }
    getDateString = (obj) => {
        console.log(obj)
        var t = new Date(1970, 0, 1);
        t.setSeconds(obj.seconds);
        console.log(`date string is ${t}`)
        return t.getDate()+'/'+(t.getMonth()+1)+'/'+t.getFullYear()
    }

  render() {
    const cities = this.state.cities
    const areas = this.state.areas
    return (
        <>

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
                        <h1 className="mt-4">List of Jobs</h1>
                        <div className="row">
                        
                          
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-success text-white mb-4">
                                    <div className="card-body">Employers Table</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="emplyoer">View Details</a>
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
                            <th>Job Name</th>
                            <th>Employment Status</th>
                            <th>City</th>
                            <th>Area</th>
                            <th>Salary</th>
                            <th>Posted Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.jobs.map(Job=> (
                        <tr key={Job.id}>
                            <td>{Job.Jname}</td>
                            <td>{Job.J_Contract}</td>
                            <td>{this.getcity(Job.J_city)}</td>
                            <td>{this.getAreaOfJob(Job.J_area)}</td>
                            <td>{Job.J_min_salary}~{Job.J_max_salary}</td>
                            <td>{this.getDateString(Job.PostedDate)}</td>
                            <td>
                                <a><i onClick={()=>this.viewPassId(Job.id)} className="view material-icons icon-padding" title="View" style={{color: "rgb(0, 110, 255)", cursor:"pointer"}} data-dismiss="modal" data-toggle="tooltip">&#xE417;</i></a> &nbsp;
                                <a><i onClick={()=>this.editPassId(Job.id)} className="edit material-icons icon-padding" title="Edit" style={{color: "yellow", cursor:"pointer"}} data-dismiss="modal" data-toggle="tooltip">&#xE254;</i></a> &nbsp;
								<a onClick={()=>this.deletePassId(Job.id)} className="delete material-icons icon-padding" title="Delete"  style={{color: "red", cursor:"pointer"}} data-dismiss="modal">&#xE872;</a> &nbsp;
							</td>
                        </tr>
                    ))}
                    </tbody>
                   
                </table>
        </div>
    </div>
	
	<div id="viewModal" className="modal fade">
		<div className="modal-dialog info-dialog">
			<div className="modal-content">
					<div className="modal-header">						
						<h4 className="modal-title">Detail Information</h4>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">
                    <table className="table table-bordered">
                         <tr> <td>Job Name:</td><td>{this.state.Jname}</td></tr>
                         <tr><td> Employer Name:</td><td> {this.getEmployer(this.state.EMPLOYERID)}</td></tr>
                       
                         <tr> <td>Phone Number:</td><td> {this.state.J_tel}</td></tr>
                         <tr> <td>Email:</td><td> {this.state.J_email}</td></tr>
                         <tr> <td>Address:</td> <td> {this.state.J_Address}, {this.getLocation(this.state.J_city,this.state.J_area)} </td></tr>
                         <tr><td>Employment Status:</td> <td>{this.state.J_Contract}</td></tr>
                         <tr> <td>Salary:</td><td> {this.state.J_min_salary}~{this.state.J_max_salary} Yen</td></tr>
                         <tr><td>Working Days:</td><td> {this.state.J_Working_Day} Days per Week</td></tr>
                         <tr><td>Working Hours:</td><td>{this.state.J_hours}</td></tr>
                         <tr> <td>Minimum Japanese Skill:</td><td> {this.state.J_JpLevel}</td></tr>
                         <tr><td>Job Description:</td><td> {this.state.J_Description}</td></tr>
                         <tr> <td>Job Qualification:</td><td> {this.state.J_Qualification}</td></tr>

                     </table>
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-secondary" data-dismiss="modal" value="Cancel" />
                        <a onClick={()=>this.deletePassId(this.state.id)} data-dismiss="modal"><button className="btn btn-danger">Delete</button></a> 
					</div>
			</div>
		</div>
	</div>

        <div id="editModal" className="modal fade">
            <div className="modal-dialog info-dialog">
                <div className="modal-content">
                        <div className="modal-header">						
                            <h4 className="modal-title">Application Requirement</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={this.form_clear} aria-hidden="true">&times;</button>
                        </div>
                        <form action="#" method="post" style={{width: 100+"%"}}>
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
                                                            <select name="J_Contract" id="J_Contract" onClick={this.disable} className="form-control" onChange={this.handleChange} value={this.state.selectedValue} required>
                                                    <option value="">Choose Employment Status</option>
                                                    <option value="Full-Time" selected={this.state.employmentStatus == "Full-Time"   ? ("selected") : ("false")}>Full Time</option>
                                                    <option value="Part-Time" selected={this.state.employmentStatus == "Part-Time" ? ("selected") : ("false")}>Part Time</option>
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
                                                            <label for="J_JpLevel">Select Japanese Skill</label>
                                                            <select name="J_JpLevel" id="J_JpLevel" onClick={this.disable} onChange={this.handleChange} value={this.state.selectedValue} className="form-control" required>
                                                        <option value="">Japanese Languae Skill</option>
                                                        <option value="3" selected={this.state.japaneseSkill == "3" ? ("selected") : ("false")}>N3</option>
                                                        <option value="2" selected={this.state.japaneseSkill == "2" ? ("selected") : ("false")}>N2</option>
                                                        <option value="1" selected={this.state.japaneseSkill == "1" ? ("selected") : ("false")}>N1</option> 
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
                                                            <label for="J_email">Email Address</label>
                                                            <input type="text" id="J_email" class="form-control" name="J_email" placeholder="abc@gmail.com" onChange={this.handleChange} value={this.state.J_email} required/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="J-area">Select Area</label>
                                                            <select name="J_area" id="area" className="form-control" onClick={this.disable} onChange={this.handleChange} required>
                                                    <option disabled>Select Area in Japan</option>
                                                    {this.state.areas.map(Area => (this.state.J_area == Area.id ? 
                                                        <option value={Area.id} selected>{Area.areaName}</option> : 
                                                        <option value={Area.id}>{Area.areaName}</option>
                                                    ))}
                                                </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="J_city">Select your City</label>
                                                            <select name="J_city" id="city" className="form-control" onClick={this.disable} onChange={this.handleChange} required>
                                                    <option disabled>Select Area in Japan</option>
                                                   { cities &&  cities.map(City => (this.state.J_city == City.id ? 
                                                        <option value={City.id} selected>{City.cityName}</option> : 
                                                        <option value={City.id}>{City.cityName}</option>
                                                    ))}
                                                </select>
                                                        </div>
                                                    
                                                        
                                                        <div class="form-group">
                                                            <label for="detailAddr">Detail Address</label>
                                                            <textarea class="form-control" id="J_Address" name="J_Address" onChange={this.handleChange} value={this.state.J_Address} required>
                                                                
                                                            </textarea>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="JobDes">Job Description</label>
                                                            <textarea class="form-control" id="J_Description" name="J_Description" onChange={this.handleChange} value={this.state.J_Description} required>
                                                                
                                                            </textarea>
                                                        </div>
                                                    
                                                        <div class="form-group">
                                                            <label for="Qual">Other Qualification</label>
                                                            <textarea class="form-control"  id="J_Qualification" name="J_Qualification" onChange={this.handleChange} value={this.state.J_Qualification} >
                                                                
                                                            </textarea>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                    <div className="modal-footer">
                        <input type="button" onClick={this.updateJob} value="Update" className="btn btn-info btn-width rounded-4 py-2" data-dismiss="modal" style={{marginRight:10}} />
                        <input type="button" className="btn btn-secondary" onClick={this.form_clear} data-dismiss="modal" value="Cancel" />
					</div>
                                    </form>
                </div>
            </div>
        </div>
	
        <div id="deleteConfirmModal" className="modal fade">
		<div className="modal-dialog del-dialog">
			<div className="modal-content">
                <div className="modal-header">						
					<h4 className="modal-title">Delete Job</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div> 
				<form>
					<div className="modal-body">					
                        <p>Are you sure you want to delete this job?</p>
						<p className="text-warning"><small>This action cannot be undone.</small></p>
					</div>
				</form>
                <div className="modal-footer">
					<input type="button" className="btn btn-secondary" data-dismiss="modal" value="Cancel" />
					<input type="button" className="btn btn-danger" value="Delete" data-dismiss="modal" onClick={this.deleteJob} />
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
</>
)}}
