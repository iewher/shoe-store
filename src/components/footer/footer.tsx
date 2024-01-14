import React from "react";
import "../../scss/footer/footer.scss";
import re from '../../svg/footer/re-store.svg';
import samsung from '../../svg/footer/samsung.svg';
import mk from '../../svg/footer/mk.svg';
import xiaomi from '../../svg/footer/xiaomi.svg';
import akit from '../../svg/footer/akit.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-table">
        <div className="footer-table__about">
          <h3>О компании</h3>
          <p>Вакансии</p>
          <p>Контакты</p>
          <p>Магазины</p>
          <p>Новости</p>
          <p>О нас</p>
          <p>Обратная связь</p>
          <p>Политика конфиденциальности</p>
          <p>Дзен</p>
        </div>
        <div className="footer-table__help">
          <h3>Помощь</h3>
          <p>Бонусная программа</p>
          <p>Где мой заказ?</p>
          <p>Доставка и оплата</p>
          <p>Обмен и возврат</p>
        </div>
        <div className="footer-table__brand">
          <h3>Бренды</h3>
          <p>Vans</p>
          <p>Converse</p>
          <p>Adidas</p>
          <p>PUMA</p>
        </div>
        <div className="footer-table__shop">
          <h3>Магазин</h3>
          <p>Наша коллекция</p>
          <p>Кроссовки</p>
          <p>Ботинки</p>
          <p>Куртки и жилетки</p>
          <p>Толстовки</p>
          <p>Брюки</p>
          <p>Рюкзаки и сумки</p>
          <p>Футболки</p>
          <p>Для спорта</p>
        </div>
      </div>
      <div className="footer-info">
        <div className="footer-info__title">
          <p>© Inventive Retail Group, 2024</p>
        </div>
        <div className="footer-info__partners">
            <img src={re} alt="restore" />
            <img src={samsung} alt="restore" />
            <img src={mk} alt="restore" />
            <img src={xiaomi} alt="restore" />
            <img src={akit} alt="restore" />
        </div>
        <div className="footer-info__soc"></div>
      </div>
    </div>
  );
};

export default Footer;
