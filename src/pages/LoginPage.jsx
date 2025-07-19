import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <h2 className="login-title">Вход</h2>
        <input type="email" placeholder="E-mail" className="login-input" />
        <input type="password" placeholder="Пароль" className="login-input" />
        <button type="submit" className="login-button">Войти</button>
        <div className="login-links">
          <p>
            Вы — новый пользователь?{" "}
            <Link to="/register" className="link">Зарегистрироваться</Link>
          </p>
          <p>
            Забыли пароль?{" "}
            <Link to="/forgot-password" className="link">Восстановить пароль</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
