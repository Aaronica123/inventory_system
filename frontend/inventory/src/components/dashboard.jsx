import React ,{useState}from 'react';

import card_1 from '../assets/card_1.jpg'
import Card_1_ from '../recycle/card';
import dash_logo from '../assets/dash_logo.png'
import head_logo from '../assets/head_logo.png'
import logo_1 from '../assets/logo_1.png'
import { useNavigate } from 'react-router-dom';
import bars from'../assets/bars.svg'
import Sidebar from '../recycle/sidebar';
import './dashboard.css'

function Dash(){
    const begin=useNavigate()
    const lg=async()=>{
        const f=await fetch('http://localhost:8000/logout/');
        if(f.ok){
            localStorage.removeItem('staff_name');
            localStorage.removeItem('staff_id');
            begin('/', {replace: true});
        }

    }
    const [im1,setim]=useState(false)
    const st=async()=>{
        setim(!im1);
    }
    return(
        <>
        {/* <Card_1_
        image={card_1}
        product_name='Juice'
        /> */}
        <div className={`dashboard-wrapper ${im1 ? 'sidebar-open' : ''}`}>
            {im1 &&(
                        <Sidebar/>
                    )}
        
        
        <div className='body_design'>
            <div className='header_design'>
                <div className='header_hold'>

               
               
                <div className='header_sidebar'>
                    
                    <img src={bars} onClick={st}/>
                    
                    <h2>Side Bar</h2>
                </div>
                 <div className='header_image'>
                    <img src={logo_1} className='image_lay'/>

                    
                </div>
                </div>

                
                <div className='header_title'>
                    <h2>VENEVA SUPERMARKET</h2>
                    <h4>DASHBOARD</h4>

                </div>
                {/* <div className='header_image'>
                    <img src={head_logo} className='image_lay' onClick={lg}/>
                </div> */}
            </div>
            <div className='card_layout'>
                <h2>Product 1</h2>
                <div className='layout_1'>
                    <Card_1_
                    image={card_1}
                    product_name='Juice'
                    />
                </div>
                <h2>Product 2</h2>
                <div className='layout_1'>
                    <Card_1_
                    image={card_1}
                    product_name='Banana'
                    />
                    <Card_1_
                    image={card_1}
                    product_name='Juice'
                    /><Card_1_
                    image={card_1}
                    product_name='Juice'
                    /><Card_1_
                    image={card_1}
                    product_name='Juice'
                    /><Card_1_
                    image={card_1}
                    product_name='Juice'
                    /><Card_1_
                    image={card_1}
                    product_name='Juice'
                    /><Card_1_
                    image={card_1}
                    product_name='Juice'
                    /><Card_1_
                    image={card_1}
                    product_name='Juice'
                    />
                </div>
                <div className='layout_1'>
                    
                </div>

            </div>
        </div>
        </div>
        
        </>
    )
}

export default Dash;