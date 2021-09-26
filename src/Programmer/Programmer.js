import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Programmer.css'

const Programmer = () => {
   const[developers,setdeveloper]=useState([]);
   const[cart,setcart]=useState([]);

   useEffect(()=>{
       fetch('./person.json')
       .then(res=>res.json())
       .then(data=>setdeveloper(data))
   },[])
   const handleClick=developer=>{
       const newcart=[...cart,developer]
       setcart(newcart)
   }
    return (
        <div className="developers-container">
            
        
            <div className="developer-grid">
            {
                developers.map(developer=><Developer
                    key={developer.id}
                    developer={developer}
                    handleClick={()=>handleClick(developer)}
                    ></Developer>)
            }
           </div>
         <div className="cart">
            <Cart cart={cart}></Cart>
         </div>
        </div>
    );
};

export default Programmer;