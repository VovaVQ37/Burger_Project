import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  Button,
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import "./BurgerConstructor.css";

const ItemTypes = {
  INGREDIENT: "ingredient",
};

function DraggableItem({ item, index, moveItem, onRemove }) {
  const ref = useRef(null);
  const dragRef = useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.INGREDIENT,
    hover(draggedItem) {
      if (draggedItem.index === index) return;
      moveItem(draggedItem.index, index);
      draggedItem.index = index;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.INGREDIENT,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(dragRef);
  drop(ref);

  return (
    <li
      ref={ref}
      className="constructor__item"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div ref={dragRef} className="burger__description">
        <DragIcon type="primary" />
      </div>
      <img src={item.image} alt={item.name} className="constructor__img" />
      <span className="text text_type_main-default ml-2">{item.name}</span>
      <span className="constructor__price ml-auto">
        {item.price} <CurrencyIcon type="primary" />
      </span>
      <button className="constructor__remove" onClick={() => onRemove(index)}>
        <DeleteIcon type="primary" />
      </button>
    </li>
  );
}

DraggableItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  moveItem: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

function BurgerConstructor({
  ingredients,
  onOrderClick,
  onRemove,

  setSelectedIngredients,
}) {
  const totalPrice = ingredients.reduce((acc, item) => acc + item.price, 0);

  const moveItem = (fromIndex, toIndex) => {
    const updated = [...ingredients];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setSelectedIngredients(updated);
  };

  return (
    <section className="constructor">
      <h2 className="text text_type_main-large mb-5">Ваш бургер</h2>
      <div className="ingredients__scroll">
        <ul className="constructor__list">
          {ingredients.map((item, index) => (
            <DraggableItem
              key={`${item._id}-${index}`}
              item={item}
              index={index}
              moveItem={moveItem}
              onRemove={onRemove}
            />
          ))}
        </ul>

        <div className="constructor__footer mt-5">
          <span className="constructor__total text text_type_digits-medium">
            {totalPrice} <CurrencyIcon type="primary" />
          </span>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={onOrderClick}
          >
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
  onShowDescription: PropTypes.func.isRequired,
  setSelectedIngredients: PropTypes.func.isRequired,
};

export default BurgerConstructor;
