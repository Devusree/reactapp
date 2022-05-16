import React, { useState } from 'react'

const Profile = () => {
    var [name,setname]=useState("")
    
    
    const changeName=()=>
    {setname(
        name="Tom"
    )}
  return (
    <div>Logged in as {name}
    <button onClick={changeName}  className='btn btn-success'> login</button>
    </div>
  )
}

export default Profile