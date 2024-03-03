import React from 'react';
import { useMedicineContext } from './MedicineContext';




const Cart = () => {
    const { cart } = useMedicineContext();
  
    // Calculate total quantity
    const totalQuantity = cart.reduce((total, cartMedicine) => total + cartMedicine.quantity, 0);
  
    return (
      <div>
        <h2>Cart</h2>
        {totalQuantity > 0 && <p>{totalQuantity}</p>}
      </div>
    );
  };
  
  export default Cart;