import React from 'react'
import './description.css'

const Description = () => {
    return(
        <>  
            <div className='row welcome-section'>
                <div className="card">
                    <h1>Revolutionalize your HR processes</h1>
                    <p>Optimize your Human Capital Management through a swift and efficient platform</p>
                </div>
            </div>
            <div className="desc">
                <div className="row">
                    <div className="card-body col-md-4">
                    <h3 className='card-header'>Manage your Workforce from Hire To Retire</h3>
                        <p className='card-text'>You got all tools inclusive for all Human Resource tasks</p>
                    </div>
                    <div className="card-body col-md-4">
                        <p className='card-title'>
                            <img className='card-img-right' src={require("../assets/images/talents.webp")} alt="" />
                        </p>
                    </div>
                </div>
            </div>
            

            <div className="desc">
                <div className="row">
                    <div className="card-body col-md-4">
                        <p className='card-title'>
                            <img className='card-img-left' src={require("../assets/images/dashboard2.jpeg")} alt="" />
                        </p>
                    </div>
                    <div className="card-body col-md-4">
                        <h3 className='card-header'>Manage your Employees Payroll</h3>
                        <p className='card-text'>As a HR you can review the Payroll details, process, approve, release Salary and email payslips to employees </p>
                        <button className='btn btn-primary' to="/Features">Learn More</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Description