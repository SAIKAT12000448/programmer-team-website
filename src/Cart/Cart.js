import React from 'react';

import './Cart.css'
const Cart = (props) => {
    const{cart}=props
    // console.log(props.cart)
    let total = 0;
  

    for(const budget of cart){
       
             total= total+ budget.stipend;

            
    }
   

    return (
        <div className="cart-container">
            <h2>developer:{props.cart.length}</h2>
            <h3>Total:{total}</h3><br />
            <div className="name">
                <h2>Team Member:</h2>
            {
                props.cart.map(name=><p className="name-title">
                <img style={{marginRight:'5px'}} width="50px" src={name.img} alt="" />{name.name}
                </p>)
            }
            </div>
  

        </div>
    );
};

export default Cart;