import React from "react";
import done from '../images/done.png';
import './OrderDetails.css';
import './Modal.css';

function OrderDetails() {
  const [orderNumber] = React.useState(() =>
    Math.floor(345 + Math.random() * 1000) // например, 345–1345
  );

  return (
    <section className="order-details">
      <h2 className="order-number">{orderNumber.toString().padStart(4, '0')}</h2>
      <p className="order-details__text">идентификатор заказа</p>
      <div className="order-details__icon">
        <img src={done} alt="Готово" />
      </div>
      <p className="order-details__status">Ваш заказ начали готовить</p>
      <p className="order-details__subtext">
        Дождитесь готовности на орбитальной станции
      </p>
    </section>
  );
}

export default OrderDetails;
