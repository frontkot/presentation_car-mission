import React from 'react';
import './StartPage.scss';
import NavBlock from '../../components/NavBlock/NavBlock';
import Header from '../../components/Header/Header';

const StartPage = () => (
  <>
    <div className="start-page__container">
      <div>
      <Header className="start-page__title" text="Презентация обычного человека" />
      <div className="start-page__human">
        <img src="/img/start-page/power-point.png" className="img-static" alt="power-point" />
        <img src="/img/start-page/google-slides.png" className="img-static" alt="google-slider" />
        <img src="/img/start-page/tilda.png" className="img-static" alt="tilda" />
        <img src="/img/start-page/canva.png" className="img-static" alt="canva" />
      </div>
      </div>
      <div className="start-page__developer">
        <Header className="start-page__title" text="Презентация Front-End Developer" />
        <div className="motion">
        <img src="/img/start-page/react.png" className="img-motion" alt="react" />
        </div>
      </div>

    </div>
    <NavBlock  className="start-page__link-block" startPage nextPath="/team" text="Поехали"/>
  </>
);

export default StartPage;