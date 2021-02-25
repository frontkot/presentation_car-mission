import React, { useState, useEffect } from 'react';
import './ProjectInfoPage.scss';
import NavBlock from '../../components/NavBlock/NavBlock';
import StatisticsLine from '../../components/StatisticsLine/StatisticsLine';
import Header from '../../components/Header/Header';


const content = [
  {text: 'pull request - 159', count: '259'},
  {text: 'pull request done - 142', count: '230'},
  {text: 'обсуждений - 31', count: '80'},
  {text: 'commits - 581', count: '600'},
  {text: 'для подтверждения реквеста нужны было 2 апрува'},
  {text: 'Cоздано более 110 карточек в трелло, 103 из нх закрыты успешно', count: '200'},
  {text: 'потрачено 450 часов', count: '500'},
  {text: 'more than  32074 code strings', count: '900'},
  {text: 'create files - 496', count: '550'},
  {text: 'delete mode - 91', count: '90'},
  {text: '9.5 requests per week, 8 commits per day, 71 string per hour'},
]

const ProjectInfoPage = () => {
  const [count, setCount] = useState(0);
  const render = content.map((e, index) => <StatisticsLine text={e.text} count={count ? e.count : false} key={index}/>)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [count < 8]);

  return (
    <div className="page-info__container">
      <Header text="Статистика проекта" />
      <div className="underline" />
      <div className="page-info__content">
        {render.slice(0, count)}
      </div>

      {count > 11 ? <NavBlock prevPath="/tech-stack" nextPath="/project-page" /> : null}
    </div>
  );
};

export default ProjectInfoPage;