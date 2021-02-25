import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectInfoPage from '../pages/ProjectInfoPage/ProjectInfoPage';
import StartPage from '../pages/StartPage/StartPage';
import TeamPage from '../pages/TeamPage/TeamPage';
import TechPage from '../pages/TeckPage/TechPage';
import ProjectPage from '../pages/ProjectPage/ProjectPage';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/tech-stack" component={TechPage} />
      <Route exact path="/project-info" component={ProjectInfoPage} />
      <Route exact path="/project-page" component={ProjectPage} />
      {/* <Route exact path="/project-admin" component={} /> */}
      {/* <Route exact path="/" component={} /> */}
      {/* <Route exact path="/" component={} /> */}

    </Switch>
  );
};

export default MainRoutes;