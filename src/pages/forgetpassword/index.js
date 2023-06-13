import React, { useState } from 'react'
import "./style.css"
import Button from '@mui/material/Button';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
    const [email,setEmail]=useState('')
    const auth = getAuth();
    const handleForgetpass=()=>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  return (
    <div className="forgetpass_body">
        <div className="forgetpass_box">
            <h5>Reset Your Email</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eum quae natus nostrum dolorum iure magnam adipisci unde eos dolorem.</p>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email' />
            <div className="mail_box_btn">
            <Button onClick={handleForgetpass} variant="contained">Send</Button>
            </div>
        </div>
    </div>
  )
}

export default ForgetPassword