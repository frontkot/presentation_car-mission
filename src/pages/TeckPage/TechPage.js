import React, { useState, useEffect } from 'react';
import NavBlock from '../../components/NavBlock/NavBlock';
import Technology from '../../components/Technology/Technology';
import Header from '../../components/Header/Header';
import "./TechPage.scss";

const front = [
  {name: "React.JS"},
  {name: "Redux"},
  {name: "Redux-thunk"},
  {name: "React-router"},
  {name: "React-proptypes"},
  {name: "React-slick"},
  {name: "SASS/SCSS"},
  {name: "Formik"},
  {name: "Axios"},
  {name: "Jest/Enzyme"},
  {name: "React-dropzone"},
  {name: "React-html-parser"},
  {name: "ESlint/Husky/Prettier"},

  // {name: ""},

]
const back = [
  {name: "Express"},
  {name: "MongoDB"},
  {name: "Amazon S3"},
  {name: "Nodemailer"},
  {name: "Mongoose"},
  {name: "Passport"},

]


const TechPage = () => {
  const [count, setCount] = useState(0);

  const frontArr = front.map(e => <Technology className="front-end" text={e.name} />)
  const backArr = back.map(e => <Technology className="back-end" text={e.name} />)


  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [count < 8]);



  return (
    <div className="tech__container">
      <Header text="Technology Stack" />
      <div className="underline"/>
      <div className="tech__content">
        <div className="tech__column">
          <Header text="Front" />
          <div className="tech__block">
            {frontArr.slice(0, count)}
          </div>
        </div>
        <div className="tech__column">
          <Header text="Back" />
          <div className="tech__block">
            {backArr.slice(0, count)}
          </div>
        </div>
      </div>
      {count > 13 && <NavBlock  prevPath="/team" nextPath="/project-info"/>}
    </div>
  );
};

export default TechPage;