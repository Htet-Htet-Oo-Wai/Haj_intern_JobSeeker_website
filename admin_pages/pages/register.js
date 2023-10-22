import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {loadFirebase} from '../lib/db.js'
export default class Index extends React.Component{

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "/js/scripts.js";
        script.async = true;

        document.body.appendChild(script);
        
    }
    constructor(){
        super();
        this.initial_state = {
         Admin_Fname:'',
         Admin_Lname:'',
         Admin_email:'',
         Admin_Pass:'',
         
        };
        this.state = this.initial_state;
    }
    handleChange = (event) =>{
        this.setState({[event.target.name] : event.target.value});
    }
    addJob= event => {
        event.preventDefault();
        let firebase = loadFirebase() 
        const userRef = firebase.firestore().collection('job').add({
            Jname:this.state.Jname,
            J_Contract:this.state.J_Contract,
            J_hours:this.state.J_hours,
            J_Working_Day:this.state.J_Working_Day,
            J_JpLevel:this.state.J_JpLevel,
            J_min_salary:this.state.J_min_salary,
            J_max_salary:this.state.J_max_salary,
            J_tel:this.state.J_tel,
            PostedDate:this.state.PostedDate,
            J_email:this.state.J_email,
            J_area:this.state.J_area,
            J_city:this.state.J_city,
            J_Address:this.state.J_Address,
            J_Description:this.state.J_Description,
            J_Qualification:this.state.J_Qualification
        });        
        this.setState({
            Jname:'',
            J_Contract:'',
            J_hours:'',
            J_Working_Day:'',
            J_JpLevel:'',
            J_min_salary:'',
            J_max_salary:'',
            J_tel:'',
            PostedDate:'',
            J_email:'',
            J_area:'',
            J_city:'',
            J_Address:'',
            J_Description:'',
            J_Qualification:''
        });
    };  render(){
        return(
            <html lang="en">
   
    <body className="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1" for="inputFirstName">First Name</label>
                                                        <input className="form-control py-4" id="inputFirstName" type="text" placeholder="Enter first name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1" for="inputLastName">Last Name</label>
                                                        <input className="form-control py-4" id="inputLastName" type="text" placeholder="Enter last name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="small mb-1" for="inputEmailAddress">Email</label>
                                                <input className="form-control py-4" id="inputEmailAddress" type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1" for="inputPassword">Password</label>
                                                        <input className="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="small mb-1" for="inputConfirmPassword">Confirm Password</label>
                                                        <input className="form-control py-4" id="inputConfirmPassword" type="password" placeholder="Confirm password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mt-4 mb-0"><a className="btn btn-primary btn-block" href="login">Create Account</a></div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="small"><a href="login">Have an account? Go to login</a></div>
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


        )
    }
} 