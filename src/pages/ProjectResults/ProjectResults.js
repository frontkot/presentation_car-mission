import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './ProjectResults.scss';

const results = [
  {text: 'Полноценно функционирующий и адаптивный сайт, для привлечения клиентов'},
  {text: 'Полноценная алдмин часть сайта, для изменения и добавления нового контента'},
  {text: 'Гибкость сайта к изменениях тенденций и трендов, путем изменения контента'},
  {text: 'Масштабируемость сайта и увеличение количества страниц при минимальных затратах времени'},
  {text: 'Готовая SEO оптимизация для продвижения сайта'},
  {text: 'Бесплатное облачное хранилище для медиа файлов на  Гб'},
  // {text: ''},
  // {text: ''},
  // {text: ''},
]

const ProjectResults = () => {
  const [count, setCount] = useState(0);
  const render = results.map((e, index) => <p className='results__par' key={index}>{e.text}</p>)


  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [count < 8]);

  return (
    <div className='results__container'>
      <Header text='Итоги проекта' />
      <div className="underline" />
      <div className='results__content'>
        {render.slice(0, count)}
      </div>
    </div>
  );
};

export default ProjectResults;