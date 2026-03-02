import React ,{useState}from 'react';

import card_1 from '../assets/card_1.jpg'
import Card_1_ from '../recycle/card';
import logo_1 from '../assets/logo_1.png'
import bars from'../assets/bars.svg'
import Sidebar from '../recycle/sidebar';
import './dashboard.css'
import baking_powder from '../assets/grocery/baking_powder.jpg' 
import cooking_oil from '../assets/grocery/cooking_oil.jpg' 
import lemons from '../assets/grocery/lemons.jpg' 
import oranges from '../assets/grocery//oranges.jpg' 
import phones from '../assets/electronics/phones.jpg'
import head_phones from '../assets/electronics/head_phones.jpg'
import speakers from '../assets/electronics/speakers.jpg'
import tv from '../assets/electronics/tv.jpg'
import dish_washer from '../assets/electronics/dishwasher.jpg'
import washing_machine from '../assets/electronics/washing_machine.jpg'
import donuts from '../assets/bakery/donuts.jpg'
import bread from '../assets/bakery/bread.jpg'
import cake from '../assets/bakery/cake.jpg'
import cupcake from '../assets/bakery/cupcake.jpg'
import shirt from '../assets/clothes/shirt.jpg'
import trousers from '../assets/clothes/trousers.jpg'
import jacket from '../assets/clothes/jacket.jpg'
import sweater from '../assets/clothes/sweater.jpg'
import boots from '../assets/clothes/boots.jpg'
import sneakers from '../assets/clothes/sneakers.jpg'
import watches from '../assets/clothes/watches.jpg'
import neck_lace from '../assets/jewelry/necklace.jpg'
import ring from '../assets/jewelry/ring.jpg'
import earing from '../assets/jewelry/earing.jpg'




function Dash(){
    const [im1,setim]=useState(false)
    const st=async()=>{
        setim(!im1);
    }
    return(
        <>
        
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
                 
                </div>

                
                <div className='header_title'>
                    <h2>VENEVA SUPERMARKET</h2>
                    <h4>DASHBOARD</h4>

                </div>
                <div className='header_image'>
                    <img src={logo_1} className='image_lay'/>

                    
                </div>
                
            </div>
            <div className='card_layout'>
                <h2 className='card_h2_design'>Grocery</h2>
                <div className='layout_1'>
                    <Card_1_
                    image={card_1}
                    product_name='Juice'
                    />
                    <Card_1_
                    image={cooking_oil}
                    product_name='Cooking Oil'
                    />
                    <Card_1_
                    image={baking_powder}
                    product_name='Baking Powder'
                    />
                    <Card_1_
                    image={oranges}
                    product_name='Oranges'
                    />
                    <Card_1_
                    image={lemons}
                    product_name='Lemons'
                    />
                </div>

                <h2 className='card_h2_design'>Electronics</h2>
                <div className='layout_1'>
                    <Card_1_
                    image={phones}
                    product_name='Phones'
                    />
                    <Card_1_
                    image={head_phones}
                    product_name='Head Phones'
                    />
                    <Card_1_
                    image={speakers}
                    product_name='Speakers'
                    />
                    <Card_1_
                    image={tv}
                    product_name='Television'
                    />
                    <Card_1_
                    image={washing_machine}
                    product_name='Washing Machine'
                    />
                    <Card_1_
                    image={dish_washer}
                    product_name='Dish Washer'
                    />
                </div>
                <h2 className='card_h2_design'>Bakery</h2>
                <div className='layout_1'>
                    
                    <Card_1_
                    image={cupcake}
                    product_name='Cupcake'
                    />
                    <Card_1_
                    image={cake}
                    product_name='Cake'
                    />
                    <Card_1_
                    image={donuts}
                    product_name='Donuts'
                    />
                    <Card_1_
                    image={bread}
                    product_name='Bread'
                    />

                </div>
                <h2 className='card_h2_design'>Clothes</h2>
                <div className='layout_1'>
                    <Card_1_
                    image={shirt}
                    product_name='Shirt'
                    />
                    <Card_1_
                    image={jacket}
                    product_name='Jacket'
                    /><Card_1_
                    image={sweater}
                    product_name='Sweater'
                    /><Card_1_
                    image={trousers}
                    product_name='Trousers'
                    /><Card_1_
                    image={boots}
                    product_name='Boots'
                    />
                    <Card_1_
                    image={sneakers}
                    product_name='Sneakers'
                    />
                </div>
                <h2 className='card_h2_design'>
                    Accessories
                </h2>
                <div className='layout_1'>
                    <Card_1_
                    image={watches}
                    product_name='Watches'
                    />
                    <Card_1_
                    image={neck_lace}
                    product_name='Necklace'
                    />
                    <Card_1_
                    image={earing}
                    product_name='Earings'
                    />
                    <Card_1_
                    image={ring}
                    product_name='Wedding Ring'
                    />
                </div>

            </div>
        </div>
        </div>
        
        </>
    )
}

export default Dash;