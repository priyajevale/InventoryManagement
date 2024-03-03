import React from 'react';
import { MedicineProvider } from './components/MedicineContext';
import AddMedicine from './components/AddMedicine';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart';
import './App.css'; 

function App() {
  return (
    <MedicineProvider>
      <div className="App">
        <h1>Medical Shop Inventory Management</h1>
        <AddMedicine />
        <div className="flex-container">
          <div className="column">
            <MedicineList />
          </div>
          <div className="column">
            <Cart />
          </div>
        </div>
      </div>
    </MedicineProvider>
  );
}

export default App;