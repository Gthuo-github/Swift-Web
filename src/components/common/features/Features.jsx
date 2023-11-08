import React from 'react'
import Header from '../heading/Header'
import Footer from '../heading/Footer'
import './features.css'

const Features = () => {
  return (
    <>
        <Header/>
        <div className="card">
            <h2 className="card-header">
                Main Features
            </h2>
            <div className="card-body">
                <p className="text-title"></p>
                <ul className="card-content">
                    <li><p>Manage Employee Records in a Central Repository</p></li>
                    <li><p>Manage Employee Documents. Get expiry alerts</p></li>
                    <li><p>Leave management</p></li>
                    <li><p>Advance/loan management</p></li>
                    <li><p>Expense reinbursements</p></li>
                    <li><p>Payroll processing: By employee and Bulk wise</p></li>
                </ul>
            </div>
        </div>
        <div className="card">
            <h2 className="card-header">
                Mobile Application
            </h2>
            <div className="card-body">
                <p className="text-title"> SwiftHR also comes with a Mobile App (iOS and Android) which includes the below features.</p>
                <ul className="card-content">
                    <li><p>Access Notice board and Holiday/Leave Calendar</p></li>
                    <li><p>Request for Leaves, Loans and Expense Claims and check status</p></li>
                    <li><p>Approve Leaves, Loans and Expense Claims (for Managers and HR)</p></li>
                    <li><p>Check Documents expiry status</p></li>
                    <li><p>View and download personal Pay slips</p></li>
                    <li><p>Messaging option for easy communication</p></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <h2 className="card-header">User Profile</h2>
            <div className="card col-md-2">
                <div className="card-body ">
                    <p>Users get to have a view on their profile, edit and request for ammendments</p>
                </div>
            </div>
            <div className="col-md-1">
                <img className="card-img" src={require("../../../assets/images/arrow.png")} alt="" />   
            </div>
            <div className="col-md-2">
                <img className='card-img' src={require("../../../assets/images/onphone.jpeg")} alt="" />
                <p>User login page</p>  
            </div>
            <div className=" card-img col-md-1 ">
                <img className="card-img" src={require("../../../assets/images/arrow.png")} alt="" />   
            </div>
            <div className=" card-img col-md-2 ">
                <img className="card-img" src={require("../../../assets/images/profsetting.jpeg")} alt="" />
                <p>Profile settings on Employee dashboard</p>   
            </div>
        </div>
        <div className="row" id='profile'>
            <h2 className='card-header'>An employee profile View</h2>
            <div className=" card-img col-md-2 ">
                <img className="card-img" src={require("../../../assets/images/profile.jpeg")} alt="" />   
            </div>
        </div>
        <div className="row" id='leaveRequest'>
            <h2 className='card-header'>Add new leave request</h2>
            <div className=" card-img col-md-2 ">
                <img className="card-img " src={require("../../../assets/images/requestleave.jpeg")} alt="" />  
                <p>Add new leave request, view entitled leave days and publish for HR approval</p> 
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default Features