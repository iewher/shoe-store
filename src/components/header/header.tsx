import React from "react";
import "../../scss/header/header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <div className="header-title__city">
          <p>Пермь</p>
        </div>
        <div className="header-title__links">
          <p>Магазины</p>
          <p>Доставка и оплата</p>
          <p>Где мой заказ?</p>
          <p>Обмен и возврат</p>
          <p>Подарочный сертификат</p>
        </div>
        <div className="header-title__number">
          <p>8 (909) 116-31-29</p>
        </div>
      </div>
      <div className="header-body">
        <div className="header-body__sex">
          <p>Мужчинам</p>
          <p>Женщинам</p>
          <p>Детям</p>
        </div>
        <div className="header-body__logo">
          <h1>SHOE STORE</h1>
        </div>
        <div className="header-body__bonus">
          <p>Сникер-блог</p>
          <p>Новости</p>
          <p>Бонуская карта</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
