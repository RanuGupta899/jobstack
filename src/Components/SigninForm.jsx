

// export default SigninForm;
import { useState } from "react";
// import Header from "./Header";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
function SigninForm(){
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
    });
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value,
        });
    };
   const handlesubmit=(e)=>{
    e.preventDefault();
    console.log("FormData", formData);

    Swal.fire({
        title: "Save Successfully!",
        text: "You clicked the button!",
        icon: "success"
      });
      navigate(`/LoginForm`);
      localStorage.setItem("formData",JSON.stringify(formData));
     
    };
    return(
<div>
   
   <div className="signup-container">
    <form className="signup-form" onSubmit={handlesubmit}>
        <h2>Signup Form</h2>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text " 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name" required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text " 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email" required />
        </div>
        <div className="form-group">
            <label htmlFor="name">Password</label>
            <input type="text" 
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password" required />
        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
    </form>
   </div>
</div>
    )
}
export default SigninForm;