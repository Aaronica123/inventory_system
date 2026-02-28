import React, {useState} from 'react'
import profile from '../assets/profile.jpg'
// import pr from '../assets/portrait.svg'
import logo_1 from '../assets/logo_1.png'
import bars from '../assets/bars.svg'
import './profile.css'
import Sidebar from '../recycle/sidebar'
function Profile(){
const [getpr, setpr]=useState(false);
const side=async()=>{
    setpr(!getpr)
}
const[ld, setLd]=useState([])
const pr=async(e)=>{
    e.preventDefault()
    const ft=await fetch('http://localhost:8000/profile/',{
        method:'POST',
        headers:{
            'Content-type':'application/type'
        },
    body:JSON.stringify(
        {
            staff_id:localStorage.getItem('staff_id')
        }
        )

            
        
    });
    if (ft.ok){
        const tk=await ft.json()
        setLd(tk)
        alert('profile fetched')
    }
    else{
        alert('invalid profile')
    }
    
    
}
    return(
        <>
        <div className='profile_main_layout'>
        <div className={`pr_sidebar ${getpr? 'active':''}`}>
            {getpr&&(
                <Sidebar/>
            )}
        </div>

        <div className='profile_design'>
            <div className='profile_header'>
                <div className='profile_sd_img'>
                    
                    <img onClick={side} src={bars}/>
                    <h2>Side Bar</h2>
                </div>
                <div className='profile_title'>
                    <h1>VENEVA SUPERMARKET</h1>
                <div className='profile_img'>
                <h3>Staff Profile</h3>
                {/* <img src={pr}/> */}
                </div>
                </div>

                
                
            </div>
            <div className='profile_body'>
                <div className='profile_1'>
                    <img src={profile}/>
                </div>
                <div className='profile_2'>
                    <div className='profile_2_img'>
                        <img src={logo_1}/>
                    </div>
                    
                    
                    {ld.map((th)=>(

                    
                    <div className='profile_data'>
                        <div className='profile_data_1'>
                            <h2>Staff ID:</h2>
                            <h2 className='pd'>{th.staff_id}</h2>
                        </div>
                        <div className='profile_data_1'>
                            <h2>Staff Name:</h2>
                            <h2 className='pd'>{th.staff_name}</h2>
                        </div>
                        <div className='profile_data_1'>
                            <h2>Email:</h2>
                            <h2 className='pd1'>{th.email}</h2>
                        </div>

                    </div>
                    ))}
                    <div className='profile_btn'>
                        <button onClick={pr}> Load Profile</button>
                    </div>
                </div>
            </div>

        </div>
        </div>
        
        </>
    )
}
export default Profile;