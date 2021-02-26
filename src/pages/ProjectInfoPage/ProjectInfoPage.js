import React, { useState, useEffect } from 'react';
import './ProjectInfoPage.scss';
import NavBlock from '../../components/NavBlock/NavBlock';
import StatisticsLine from '../../components/StatisticsLine/StatisticsLine';
import Header from '../../components/Header/Header';


const content = [
  {text: 'pull request - 159', count: '259'},
  {text: 'pull request done - 142', count: '230'},
  {text: 'discussions - 31', count: '80'},
  {text: 'commits - 582', count: '600'},
  {text: '2 approvals were needed to confirm the request'},
  {text: 'More than 110 cards created in trello, 103 of them were closed successfully', count: '200'},
  {text: 'spent 450 hours', count: '500'},
  {text: 'more than 33174 lines of code', count: '900'},
  {text: 'create files - 496', count: '550'},
  {text: 'delete mode - 91', count: '90'},
  {text: '9.5 requests per week, 8 commits per day, 74 lines per hour'},
]

const ProjectInfoPage = () => {
  const [count, setCount] = useState(0);
  const render = content.map((e, index) => <StatisticsLine text={e.text} count={count ? e.count : false} key={index}/>)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 3000);
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