import React, { useState } from 'react';

import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import "./BurgerIngredients.css";
import IngredientCard from "./IngredientCard";


function BurgerIngredients({ ingredients, onAdd }) {
  const [activeTab, setActiveTab] = useState("bun");

  const buns = ingredients.filter((item) => item.type === "bun");
  const sauces = ingredients.filter((item) => item.type === "sauce");
  const mains = ingredients.filter((item) => item.type === "main");

  const handleClick = (item) => {
    onAdd(item);
  };

  const renderCategory = (title, items) => (
    <div className="ingredients__category">
      <h3 className="text text_type_main-medium mb-4">{title}</h3>
      <div className="ingredients__grid">
        {items.map((item) => (
          <div
            className="ingredient-card"
            key={item._id}
            onClick={() => handleClick(item)}
          >
            <img
              className="ingredient-card__image"
              src={item.image}
              alt={item.name}
            />
            <div className="ingredient-card__price">
              <span className="text text_type_digits-default mr-1">
                {item.price}
              </span>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="ingredients">
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "bun" ? "tab_active" : ""}`}
          onClick={() => setActiveTab("bun")}
        >
          Булки
        </button>
        <button
          className={`tab ${activeTab === "sauce" ? "tab_active" : ""}`}
          onClick={() => setActiveTab("sauce")}
        >
          Соусы
        </button>
        <button
          className={`tab ${activeTab === "main" ? "tab_active" : ""}`}
          onClick={() => setActiveTab("main")}
        >
          Начинки
        </button>
      </div>
      <div>
        {activeTab === "bun" && renderCategory("Булки", buns)}
        {activeTab === "sauce" && renderCategory("Соусы", sauces)}
        {activeTab === "main" && renderCategory("Начинки", mains)}
      </div>

      

        <h2 className="constructor__heading">Соусы</h2>
        <div className="constructor__list">
          {sauces.map((item) => (
            <IngredientCard
              key={item._id}
              item={item}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>

        <h2 className="constructor__heading">Начинки</h2>
        <div className="constructor__list">
          {mains.map((item) => (
            <IngredientCard
              key={item._id}
              item={item}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default BurgerIngredients;
