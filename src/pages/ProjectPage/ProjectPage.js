import React from 'react';
import NavBlock from '../../components/NavBlock/NavBlock';
import { Link } from 'react-router-dom';
import './ProjectPage.scss';
import Header from '../../components/Header/Header';

const ProjectPage = () => {


  return (
    <div className="page__container">
      <Header text="Презентация сайта" />
      <div className="underline" />
      <div className="page__content">
        <div className="page__logo">
          <img className="page__logo-static" src="/img/loader-static.png" alt="logo-static"/>
          <img className="page__logo-motion" src="/img/loader-motion.png" alt="logo-motion"/>
        </div>
        <div className="page__link">
          <img className="page__link-img" src="img/qrcode_cars-mission.png" alt="qr-code"/>
        <Link className="page__link-button" to="https://cars-mission.herokuapp.com/" target="_blank">Перейти на сайт</Link>
        </div>
      </div>

      <NavBlock prevPath="/project-info" nextPath="/project-admin" />
    </div>
  );
};

export default ProjectPage;