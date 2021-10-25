import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import '../App.css';
import Hundesiden from "./sider/Hundesiden";
import Kattesiden from "./sider/Kattesiden";
import Hjemsiden from "./sider/Hjemsiden";
import SideStruktur from "./SideStruktur";

const FastApp = () => (
  <Router>
    <SideStruktur>
      <Switch>
        <Route path="/katt"><Kattesiden/></Route>
        <Route path="/hund"><Hundesiden/></Route>
        <Route path="/"><Hjemsiden/></Route>
      </Switch>
    </SideStruktur>
  </Router>
);

export default FastApp;