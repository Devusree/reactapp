import React from 'react'
import Navbar from './Navbar'

const Register = () => {
  return (
    <div>
        <Navbar/>
         <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 "><table className="table table-borderless">
                <tr>
                    <td>USERNAME</td>
                    <td><input type="text" className="form-control"/></td>
                </tr>
                <tr>
                    <td>PASSWORD</td>
                    <td><input type="text" className="form-control"/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button className="btn btn-success">LOGIN</button></td>
                </tr>
            </table></div>
        </div>
    </div>

    </div>
  )
}

export default Register