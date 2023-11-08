import React from 'react'
import Header from '../heading/Header'
import Footer from '../heading/Footer'

import '../features/features.css'

const ImpModel = () => {
  return (
    <>
        <Header/>
        <div className="row">
            <div className="card" id='oncloud'>
                <div className="card-body">
                    <img className="title-logo" src={require("../../../assets/images/cloud2.png")} alt="" />
                    <h4 className='card-body title'>On cloud</h4>
                    <p className="card-text">
                        Software as a Service(Saas) is a cloud implementation model that allows users to access the SwiftHr application over the internet.
                        When your comapany chooses Saas, you only pay for the resources consumed (pay-as-you go).
                        The application is available for the users on the website.
                    </p>
                </div>
            </div>
        </div>
        <div className="row" id='onpremises'>
            <div className="card">
                <div className="card-body">
                    <img className="title-logo" src={require("../../../assets/images/server.png")} alt="" />
                    <h4 className='card-body title'>On Premises</h4>
                    <p className="card-text">
                        When your company subscribes to an on-premises model, the application is available to the users over the companies network.
                        The application is implemented within the company premises and on a local server machine.
                    </p>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default ImpModel