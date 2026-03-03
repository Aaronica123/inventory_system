import React, { useState } from 'react';
import './login.css'
import image2 from '../assets/image2.jpg'
import Dash from './dashboard';
import { useNavigate } from 'react-router-dom';

function Login(){
const [formHold,setForm]=useState({
staff_id:'',
pass_word:''
});

const nav=useNavigate()

const handle=(e)=>{
    setForm({
        ...formHold,
    [e.target.name]:e.target.value
    })
   
};
 const handle_submit=async(e)=>{
    const API_BASE = import.meta.env.REACT_APP_API_URL;
    e.preventDefault();
    try{
        const response=await fetch(`${API_BASE}/login/`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                staff_id:formHold.staff_id,
                pass_word:formHold.pass_word
            }),
        });
        const res=await response.json();

        if(response.ok){
            // URL(Dash)
            alert('success');
            setForm({staff_id:'',pass_word:''})
            localStorage.setItem('staff_id',res.staff_id)
            localStorage.setItem('staff_name',res.staff_name)

            nav('/dashboard',{replace:true});
           
            
            
            
        }
        else{
            alert('failed'+(res.error))
        }
    }
    catch(error){
        alert('failed to laod',error)
    }

};

    return(
        <>
        <div className='design'>
        <div className='image'>
            <img src={image2}/>
        </div>
        <div className='form_l'>
            <form className='form_design_1' action={"POST"} onSubmit={handle_submit}>
                <div className='label_login'>
                    <h1>LOGIN</h1>
                </div>
                
                <div className='label'>
                    <label>staff id</label>
                    <input type='number' name='staff_id' required value={formHold.staff_id} onChange={handle}/>
                </div>
                <div className='label'>
                    <label>password</label>
                    <input type='password' name='pass_word' required value={formHold.pass_word} onChange={handle}/>
                </div>
                <div className='bt'>
                    <button type='submit' name='submit'>Submit</button>
                </div>
            </form>
        </div>
        </div>

        </>
    );
};

export default Login;