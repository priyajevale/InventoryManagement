import React from 'react';
import { useMedicineContext } from './MedicineContext';






const MedicineList = () => {
  const { medicines, addToCart } = useMedicineContext();

  const handleAddToBill = (medicine) => {
    // Check if the medicine is in stock
    if (medicine.quantity > 0) {
      // Dispatch action to decrease quantity and move to cart
      addToCart(medicine);
    }
  };

  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.name}>
            {medicine.name} - {medicine.description} - Price: {medicine.price} - Quantity: {medicine.quantity}{' '}
            <button
              onClick={() => handleAddToBill(medicine)}
              disabled={medicine.quantity === 0} // Disable button when quantity is 0
              style={{ backgroundColor: medicine.quantity === 0 ? 'grey' : 'inherit' }} // Grey background for disabled button
            >
              {medicine.quantity === 0 ? 'Out of Stock' : 'Add to Bill'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;