import React from 'react'

import { Link } from 'react-router-dom';

import "../../css/app.css";

 const Error404 = () => {
//  window.alert("Page not Found")
  return (
    <div>

        <div className='body'>
        <div className="error-page">
            <div className="content">
                <h2 className="header" data-text="404">
                    404
                </h2>
                <h4 data-text="Opps! Page not found">
                    Opps! Page not found
                </h4>
                <p>
                    Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
                </p>
                <div className="btns">
                    <Link to={'/'}>return home</Link>
                    {/* <Link to="https://www.codingnepalweb.com/">report problem</Link> */}
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Error404;

