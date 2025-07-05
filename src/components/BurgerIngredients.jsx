import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerIngredients.css';
import IngredientCard from './IngredientCard';


function BurgerIngredients({ ingredients, onAdd }) {
  const buns = ingredients.filter((item) => item.type === 'bun');
  const sauces = ingredients.filter((item) => item.type === 'sauce');
  const mains = ingredients.filter((item) => item.type === 'main');

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
              <span className="text text_type_digits-default mr-1">{item.price}</span>
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
      <div className="ingredients__scroll">
  <h2 className="constructor__heading">Булки</h2>
  <div className="constructor__list">
    {buns.map(item => (
      <IngredientCard key={item._id} item={item} onClick={() =>handleClick(item)} />
    ))}
  </div>

  <h2 className="constructor__heading">Соусы</h2>
  <div className="constructor__list">
    {sauces.map(item => (
      <IngredientCard key={item._id} item={item} onClick={() =>handleClick(item)}/>
    ))}
  </div>

  <h2 className="constructor__heading">Начинки</h2>
  <div className="constructor__list">
    {mains.map(item => (
      <IngredientCard key={item._id} item={item} onClick={() =>handleClick(item)}/>
    ))}
  </div>
</div>

    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default BurgerIngredients;
