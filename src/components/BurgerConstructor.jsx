import React from 'react';
import PropTypes from 'prop-types';
import { Button, CurrencyIcon, DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerConstructor.css';

function BurgerConstructor({ ingredients, onOrderClick, onRemove }) {
  const totalPrice = ingredients.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="constructor">
      <h2 className="text text_type_main-large mb-5">Ваш бургер</h2>
      <div className="ingredients__scroll">
      <ul className="constructor__list">
        {ingredients.map((item, index) => (
          <li key={`${item._id}-${index}`} className="constructor__item">
            <img src={item.image} alt={item.name} className="constructor__img" />
            <span className="text text_type_main-default ml-2">{item.name}</span>
            <span className="constructor__price ml-auto">
              {item.price} <CurrencyIcon type="primary" />
            </span>
            <button
              className="constructor__remove"
              onClick={() => onRemove(index)}
              >
                <DeleteIcon type="primary" />
              </button>
          </li>
        ))}
      </ul>

      <div className="constructor__footer mt-5">
        <span className="constructor__total text text_type_digits-medium">
          {totalPrice} <CurrencyIcon type="primary" />
        </span>
        <Button htmlType="button" type="primary" size="medium" onClick={onOrderClick}>
          Оформить заказ
        </Button>
      </div>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onOrderClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default BurgerConstructor;
