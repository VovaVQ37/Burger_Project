
import React from "react";
import { Link } from "react-router-dom";
import "./ResetPasswordPage.css";

const ResetPasswordPage = () => {
  return (
    <div className="reset-password-page">
      <h2 className="reset-title">Сброс пароля</h2>
      <form className="reset-form">
        <input
          type="password"
          placeholder="Введите новый пароль"
          className="reset-input"
        />
        <input
          type="text"
          placeholder="Введите код из письма"
          className="reset-input"
        />
        <button type="submit" className="reset-button">Сохранить</button>
      </form>
      <p className="reset-link">
        Вспомнили пароль? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default ResetPasswordPage;
