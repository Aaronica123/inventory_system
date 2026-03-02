import React from 'react'
import logo_1 from '../assets/logo_1.png'

import './sidebar.css'
import { useNavigate} from 'react-router-dom'
function Sidebar(){
    const use_1=useNavigate()
    const lg=useNavigate()
    const od=useNavigate()
    const td=useNavigate()
    const cl=async()=>{
        use_1('/dashboard',{replace:true})
    }
    const ord=async () => {
        od('/order_details',{replace:true})
    }
    const t=async()=>{
        td('/profile',{replace:true})
    }


    const logout=async()=>{
        const t=await fetch('http://localhost:8000/logout')
        if(t.ok){
            localStorage.removeItem('staff_id')
            localStorage.removeItem('staff_name')
            lg('/',{replace:true})
            
        }
    }
    

    return(
        <>
        <div className='side_body'>
            <div className='side_image'>
                <img src={logo_1} className='side_pic'/>
            </div>
            {/* <div className='side_logo'>
                <img src={bars}/>
                <h2>Side Bar</h2>
            </div> */}
            <div className='side_items'>
                <h2 onClick={cl}>Dashboard</h2>
                <h2 onClick={t}>Profile</h2>
                <h2 onClick={ord}>Order Details</h2>
                <h2 onClick={logout}>Logout</h2>

            </div>
        </div>
        </>
    )
}

export default Sidebar