import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <aside className="profile-sidebar">
        <NavLink
          to="/profile"
          end
          className={({ isActive }) =>
            isActive ? "profile-link active" : "profile-link"
          }
        >
          Профиль
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={({ isActive }) =>
            isActive ? "profile-link active" : "profile-link"
          }
        >
          История заказов
        </NavLink>
        <button className="profile-link logout-button">Выход</button>
      </aside>

      <section className="profile-content">
        <form className="profile-form">
          <input type="text" placeholder="Имя" defaultValue="Марк" />
          <input
            type="email"
            placeholder="Логин"
            defaultValue="mail@stellar.burgers"
          />
          <input type="password" placeholder="Пароль" defaultValue="******" />
        </form>
        <p className="profile-info">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </section>
    </div>
  );
};

export default ProfilePage;

    