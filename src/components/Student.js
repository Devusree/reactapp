import React, { useState } from 'react';


const Student = () => {
    var[name,setName]=useState("Rahul")
    var[age,setAge]=useState("32")
    var[college,setCollege]=useState("Mount Zion College of Engineering")
    const changeData=()=>
    {
        setName(name="devika")
        setAge(age="23")
        setCollege("Mount Zion college")
    }
    
  return (
     
    <div>
        <div className="container">
          <div className="row g-2">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">NAME</label><br></br>
                    <label for="" className="form-label">{name}</label>
                    
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">AGE</label><br></br>
                    <label for="" className="form-label">{age}</label>
                    
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">COLLEGE</label><br></br>
                    <label for="" className="form-label">{college}</label>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <buttton onClick= {changeData} className="btn btn-success">CHANGE</buttton>
                 </div>
          </div>
    

        </div>
    </div>
    

    
  )
}

export default Student