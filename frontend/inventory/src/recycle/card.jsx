import React, { Component, useState } from 'react';
import './card.css'
function Card_1_(request){
    
    
    const [getForm,setForm]=useState({
        amount:'',
        staff_id:localStorage.getItem('staff_id'),
        product_name:request.product_name
        
    })
    const handle_f=(e)=>{
        
        setForm({
            ...getForm,
            [e.target.name]:e.target.value
        });
    }
    const form_submit = async (e) => {
        e.preventDefault();
        try{
            const report=await fetch('http://localhost:8000/staff_log/',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    amount:getForm.amount,
                    
                    staff_id:localStorage.getItem('staff_id'),
                    product_name:request.product_name

                }),
            })
             const respond=await report.json();
             if(report.ok){
                alert('successfully placed')
             }
             else{
                alert('not ordered failure')
             }

        }
        catch(error){
            alert('the fetch failed',error)
        }
        
    }
    return(
        <>
        <div className='card_design'>
        <div className='image'>
            <img src={request.image} className='image_design'/>
        </div>
        <div className='form_design_'>
            <form action='POST' onSubmit={form_submit}>
                <div className='h3_'>
                    <h3>Product : {request.product_name}</h3>
                </div>
            <div className='label_'>
            <h3>
                Amount
            </h3>
            <input type='number' required name='amount' value={getForm.amount} onChange={handle_f}/>
            </div>
            <div className='bt_1_'>
                <button typ='submit' name='submit'>Order</button>
            </div>
            </form>
        </div>
        </div>
        </>
    )
};
export default Card_1_;