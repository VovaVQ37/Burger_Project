import React, { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor";
import Modal from "./components/Modal";
import OrderDetails from "./components/OrderDetails";
import { API_URL } from "./constants/api";
import "./App.css";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  useEffect(() => {
    fetch(`${API_URL}/ingredients`)
      .then((res) => (res.ok ? res.json() : Promise.reject("Ошибка API")))
      .then((data) => setIngredients(data.data))
      .catch((err) => console.error(err));
  }, []);

  
  const handleAddIngredient = (ingredient) => {
    setSelectedIngredients((prev) => [...prev, ingredient]);
  };

  
  const handleRemoveIngredient = (indexToRemove) => {
    setSelectedIngredients((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  
  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <AppHeader />
      <main className="main-content">
        <BurgerIngredients
          ingredients={ingredients}
          onAdd={handleAddIngredient}
        />

        <BurgerConstructor
          ingredients={selectedIngredients}
          onOrderClick={handleOrderClick}
          onRemove={handleRemoveIngredient}
        />
      </main>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
