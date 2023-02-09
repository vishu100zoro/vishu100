import React, { useState } from 'react';

const Contact = () => {

  const [data,setdata]=useState({
     fullname:"",
     phone:"",
     email:"",
     password:"",
  });

  const inputevent=(event)=>{
    
    const {name, value}=event.target;

    setdata((preval)=>{
        return {
        ...preval,
          [name]: value,
        }
    })
  }  

  const formSubmit=(e)=>{
   e.preventDefault();
   alert(
   `My name is ${data.fullname}. My mobile number is ${data.phone} and email ${data.email}`
   );
  }

    return (
        <>
            <div>
                <h1 className='text-center my-4'> Contact Us</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1"     
                                name="fullname"
                                value={data.fullname} onChange={inputevent} placeholder='Enter your Name'/>
                                    
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleInputEmail1"  
                                 name="phone"
                                value={data.phone} onChange={inputevent} placeholder='Enter your phone Number'/>
                                    
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"   
                                name="email"
                                value={data.email} onChange={inputevent} aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" 
                                 name="password"
                                value={data.password} onChange={inputevent} />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div className='d-flex justify-content-center'>
                            <button type="submit" class="btn btn-outline-primary">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Contact;