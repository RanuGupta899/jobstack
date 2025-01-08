import { useState } from "react";
 import Swal from "sweetalert2";
function LoginForm(){
    const [formData,setFormData]=useState({       
        email:'',
        password:'',
    });
    const handleChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value,
        });
    };
   const handlesubmit=(e)=>{
    e.preventDefault();
    console.log("Form Data", formData);

    //get data from local storage
    const data=localStorage.getItem("formData")
    ?JSON.parse(localStorage.getItem("formData")):
    null;
    
        if(formData.email===data.email && formData.password===data.password)
        {
            Swal.fire({
                title: "Login Successfully!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    };
    
    return(
<div>
<div className="login-container">
    <form className="login-form" onSubmit={handlesubmit}>
        <h2>Login Form</h2>
       
        <div className="form-group">
            <label htmlFor="name">Email</label>
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
        <button type="submit" className="submit-btn">Login</button>
    </form>
   </div>
</div>
    )
}
export default LoginForm;