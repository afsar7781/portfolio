import React from 'react'
import "./contact.scss" 
import { useState } from 'react';

const Class  = () => {

  const [message, setMessage] = useState(false);

  const [userData,setUserData]=useState({
    email:"",
    message:""
      });

      let name,value;
    const postUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;
    setUserData({...userData,[name]:value})
    }

    //connect to firease
    const submitData=async(event)=>{
event.preventDefault();
const{email,message}=userData;
if(email && message){



const res =fetch('https://reactfirebase-95648-default-rtdb.firebaseio.com/userDataRecords.json',
{method:'POST',
headers:{
  "Content-Type":"application/json"
},
body:JSON.stringify({
  email,message
})   
})
if (res){
  setUserData({
    email:'',message:''
  })
  alert('data stored')
} else{
  alert('plzz fill  the data')
}
    }else{
      alert('plzz fill  the data')
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form method='POST' onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" value={userData.email} onChange={postUserData} name='email'/>
          <textarea placeholder="Message" value={userData.message} onChange={postUserData} name='message'></textarea>
          <button type="submit" onClick={submitData}>Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

export default Class;    