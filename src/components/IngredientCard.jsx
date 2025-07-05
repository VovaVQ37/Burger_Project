
import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './IngredientCard.css';

function IngredientCard({ item, onClick }) {
  return (
    <div className="ingredient-card" onClick={onClick}>
      <img className="ingredient-card__image" src={item.image} alt={item.name} />
      <div className="ingredient-card__price">
        <span className="text text_type_digits-default mr-1">{item.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default mt-2">{item.name}</p>
    </div>
  );
}

IngredientCard.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default IngredientCard;
