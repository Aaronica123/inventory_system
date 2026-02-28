import React, { useState } from 'react'
import './register.css'
import image1 from '../assets/image1.jpg'
function Register()
{
//receive input
    const [formData, setForm]=useState({
        staff_id:'',
        staff_name:'',
        email:'',
        password:''
    });
//handle change in input
    const change=(e)=>{
        setForm({
        ...formData,
        [e.target.name]:e.target.value
        })

    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch('http://localhost:8000/create_staff/',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    staff_id:formData.staff_id,
                    staff_name:formData.staff_name,
                    email:formData.email,
                    password:formData.password
                }),

            });
            const result = await response.json();
            if(response.ok){
                alert ("success");
                setForm({staff_id:'', staff_name:'',email:'',password:''});
            }
            else{
                alert("Failed"+(result.error));

            }

        }
        catch(error){
            alert("Couldnt connect to django");
        }

    }



return (
    <>
    <div className='general'>
    <div className='image'>
        <img src={image1}/>
    </div>
    <div className='form_design'>
        <form className='form' action={'POST'} onSubmit={handleSubmit}>
            <div className='login'><h1>REGISTER</h1></div>
            <div className='label'>
            <label>staff id</label>
            <input type='number' required name='staff_id' onChange={change} value={formData.staff_id}/>
            </div>
            <div className='label'>
            <label>staff name</label>
            <input type='text' required name='staff_name' onChange={change} value={formData.staff_name}/>
            </div>
            <div className='label'>
            <label>email</label>
            <input type='email' required name='email' onChange={change} value={formData.email}/>
            </div>
            <div className='label'>
            <label>password</label>
            <input type='password' name='password' required onChange={change} value={formData.password}/>
            </div>
            <div className='button'>
                <button type='submit' name='submit'><h4>Submit</h4></button>
            </div>
        </form>
    </div>
    </div>
    </>
);
}


export default Register;