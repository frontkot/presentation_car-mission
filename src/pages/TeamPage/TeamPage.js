import React, { useState, useEffect } from 'react';
import User from '../../components/User/User';
import Header from '../../components/Header/Header';
import NavBlock from '../../components/NavBlock/NavBlock';
import './TeamPage.scss';

const guys = [
  {
    name: "Александр Литовченко",
    src: "/img/team/alexander.jpeg"
  },
  {
    name: "Константин Борзенко",
    src: "/img/team/konst.png"
  },
  {
    name: "Артем Копинец",
    src: "/img/team/artem.jpeg"
  },
  {
    name: "Ольга Силевич",
    src: "/img/team/olga.jpeg"
  },
  {
    name: "Александр Заяц",
    src: "/img/team/a_zayats.jpeg"
  },
  {
    name: "Роман Заяц",
    src: "/img/team/r_zayats.jpeg"
  },
]

const TeamPage = () => {
  const [count, setCount] = useState(0);
  const team = guys.map((e, index) => <User name={e.name} photo={e.src} key={index}/>)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [count < 8]);

  return (
    <div className="team__container">
      <Header text="Состав команды" />
      <div className="underline" />
      <div className="team__block">
        <div className="team__junior">
          <div className="team__collection">
            {team.slice(0, count)}
          </div>
        </div>
        <div className="team__senior">
          {count >= 7 ?
          <>
            <Header text="Ментор" />
            <User name="Сарибег Караханян" photo="/img/team/saribeg.jpeg" />
          </>
          : null
          }
        </div>
      </div>
      {count >= 8 ? <NavBlock  prevPath="/" nextPath="/tech-stack"/> : null}
    </div>
  );
};

export default TeamPage;