import React from 'react';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import './AppHeader.css'; 
import { Link } from "react-router-dom"

function AppHeader() {
  return (
    <header className="header p-4">
      <nav className="header__nav">
        <div className="header__group">
          <a href="/" className="header__link">
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default ml-2">Конструктор</span>
          </a>
          <a href="/" className="header__link ml-5">
            <ListIcon type="secondary" />
            <span className="text text_type_main-default ml-2">Лента заказов</span>
          </a>
        </div>
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__group">
          <Link to="/login" className='header__link'>
          
            <ProfileIcon type="secondary" />
            <span className="text text_type_main-default ml-2">Личный кабинет</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
