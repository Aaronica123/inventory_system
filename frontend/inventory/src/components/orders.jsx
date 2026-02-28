import React, { useState } from 'react';
import logo_1 from '../assets/logo_1.png'
import shopping_cart from '../assets/shopping-cart.svg'
import potrait from '../assets/portrait.svg'
import './orders.css'
import Sidebar from '../recycle/sidebar';
import bars from '../assets/bars.svg'
function Orders(){

    const [getstate,getbt]=useState(false)
    const switch_b=async()=>{
        getbt(!getstate)
    }
    const [getstate_1,getbt_1]=useState(false)
    const switch_b_1=async(e)=>{
        if (e) e.preventDefault(); // Prevent form submission
    const next_state = !getstate_1;
    getbt_1(next_state);
    
    // Fetch only when opening and if list is empty
    if (next_state && drop.length === 0) {
        fetch_drop();
    }
    }
    const [getstate_2,getbt_2]=useState(false)
    const switch_b_2=async()=>{
        getbt_2(!getstate_2)
    }
    const [trans,setT]=useState(false)
    const im =async()=>{
        setT(!trans)
    }
    const [hold_list, setHoldList] = useState([]);

    const send=async(e)=>{
            e.preventDefault();
            const t=await fetch('http://localhost:8000/order_details/',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                
                body:JSON.stringify({
                    staff_id:localStorage.getItem('staff_id'),
                    // start_date:getdate.start_date,
                    // finish_date:getdate.finish_date,
                    amount:getdate.amount,
                    default_amount:getdate.default_
                })
                    
                
            })
            
            if(t.ok){
                const dt= await t.json()
                setHoldList(dt)
                alert('fetched')
            }
            else{
                alert('failed')
            }
            
        }
    const [getdate,setdate]=useState({
        start_date:'',
        finish_date:'',
        amount:'',
        default_:0
    })
    const st_date=async(e)=>{
        setdate({
            ...getdate,
            [e.target.name]:e.target.value
        }
        )
    }
    const [drop,setdrop]=useState([])

    const fetch_drop=async(e)=>{
        e.preventDefault();
        const res=await fetch('http://localhost:8000/product_name/',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({})
        })
        if(res.ok){
            const take=await res.json()
            setdrop(take)
            alert('items fetched')

        }
        else{
            alert('could not fetch')
        }
            
            

         }
        
    
    
    return(
        <>
        <div className={`sidebar_order ${trans ? 'on':''}`}>
            {trans&&(
                <Sidebar/>
            )}

        
        <div className='bd_order'>
        <div className='order_header'>
            <div className='order_side'>
                
                <div className='order_side_design'>
                    <img src={bars} onClick={im}/>
                    <h2>Side Bar</h2>

                </div>
                <div className='order_image'>
                <img src={logo_1} className='design_im'/>
                </div>
            </div>
            
            <div className='order_label'> 
                <h1>VENEVA SUPERMARKET</h1>
                <div className='order_h3'>
                    <h3>Order Details</h3>
                    <img src={shopping_cart} className='shopping_cart'/>
                </div>

            </div>
            {/* <div className='order_image'>
                <img src={potrait} className='design_im1'/>
            </div> */}

        </div>
        <div className='order_body'>
            <div className='order_button_load'>
                <button className='order_load' onClick={send}>Load Order Details</button>
            </div>
            <div className='order_table'>
                <table className='order_tb'>
                    <thead>
                    <tr className='order_row_header'>
                        <th>Count</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {hold_list.map((th, index) => (
                    <tr key={index} className='order_data'>
                        {/* 'index + 1' gives you the row count starting from 1 */}
                        <td>{index + 1}</td>
                        <td>{th.product_id}</td>
                        <td>{th.product_name}</td>
                        <td>{th.amount}</td>
                        <td>{th.payment_date}</td>
                        <td>{th.payment_time}</td>
                    </tr>
                    ))}
                </tbody>
                </table>

            </div>
            <div className='order_buttons'>
                <form>
                <div className='order_button_date'>
                    <button onClick={switch_b} >Date Filter</button>
                    
                {getstate &&(
                <div className='order_filter_input'>
                <div className='order_gp'>
                <label>Start</label>
                <input className='date' required type='date' name='start_date' value={getdate.start_date} />
                </div>
                <div className='order_gp'>
                <label>Last</label>
                <input className='date' required type='date' name='finish_date' value={getdate.finish_date} />
                </div>
                {/* <button>Submit</button> */}
                </div>)}
                
                
                </div>
                </form>
                <form>
                    <div className='order_button_product'>
                <button onClick={switch_b_1} >Product Filter</button>
                {getstate_1 &&(
                    
                    <select required onChange={st_date}>
                        <option>Select a product</option>
                         {drop.map((dr)=>(
                            <option>{dr.product_name}</option>
                        ))} 
                    </select>
                )}
                
                </div>
                </form>
               
                <form>
                <div className='order_button_amount'>
                    <button onClick={switch_b_2}>Amount Filter</button>
                    {getstate_2 &&(
                        <input required type='number' name='amount' className='t1' value={getdate.amount} onChange={st_date} />
                    )}
                    
                </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Orders;
