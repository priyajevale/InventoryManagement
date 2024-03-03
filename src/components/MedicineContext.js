
import React, { createContext, useContext, useState } from 'react';

const MedicineContext = createContext();

const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addToCart = (medicine) => {
    const updatedMedicines = medicines.map((m) =>
      m.name === medicine.name ? { ...m, quantity: m.quantity - 1 } : m
    );

    setMedicines(updatedMedicines);

   
    const existingCartItem = cart.find((item) => item.name === medicine.name);

    if (existingCartItem) {
    
      const updatedCart = cart.map((item) =>
        item.name === medicine.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
     
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
  };

  return (
    <MedicineContext.Provider value={{ medicines, cart, addMedicine, addToCart }}>
      {children}
    </MedicineContext.Provider>
  );
};

const useMedicineContext = () => {
  const context = useContext(MedicineContext);
  if (!context) {
    throw new Error('useMedicineContext must be used within a MedicineProvider');
  }
  return context;
};

export { MedicineProvider, useMedicineContext };