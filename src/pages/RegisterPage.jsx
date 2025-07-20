import React from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="register-page">
      <form className="register-form">
        <h2 className="register-title">Регистрация</h2>
        <input type="text" placeholder="Имя" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Пароль" />
        <button type="submit" className="register-button">Зарегистрироваться</button>
        <p className="register-login">
          Уже зарегистрированы? <Link to="/login">Войти</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
