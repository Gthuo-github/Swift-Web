import React from 'react'
import './header.css'

const Head = () => {
  return (
    <>
        <nav class="navbar sticky-top navbar-expand-sm navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-haspopup="true" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/" ><img className='' src={require("../../../assets/images/Swifthr.png")} alt="" /></a>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Features" >Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Implementation</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown03">
                                <li><a class="dropdown-item" href="/Services"><img className='linklogo' src={require("../../../assets/images/oncloud.png")} alt="" />On-cloud</a></li>
                                <li><a class="dropdown-item" href="/Services"><img className='linklogo' src={require("../../../assets/images/onpremises.png")} alt="" />On-Premises</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Resources</a>
                        </li>
                    </ul>
                    <a href="/Features" className="btn btn-primary">Book a Demo</a>
                </div>
            </div>
        </nav>
        

    </>
  )
}

export default Head