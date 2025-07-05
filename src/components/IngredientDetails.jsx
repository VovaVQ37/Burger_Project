import React from 'react';
import PropTypes from 'prop-types';
import './IngredientDetails.css';

function IngredientDetails({ ingredient }) {
  if (!ingredient) return null;

  return (
    <div className="ingredient-details">
      <h2 className="ingredient-details__title">Детали ингредиента</h2>
      <img
        src={ingredient.image_large}
        alt={ingredient.name}
        className="ingredient-details__image"
      />
      <p className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</p>
      <ul className="ingredient-details__info">
        <li>
          <p className="text text_type_main-default text_color_inactive">Калории</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">Белки</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">Жиры</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">Углеводы</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string,
    image_large: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
  }),
};

export default IngredientDetails;
