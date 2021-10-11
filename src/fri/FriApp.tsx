import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import '../App.css';
import Hundesiden from "./sider/Hundesiden";
import Kattesiden from "./sider/Kattesiden";
import Hjemsiden from "./sider/Hjemsiden";

function FriApp() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/katt">
              <Kattesiden/>
            </Route>
            <Route path="/hund">
              <Hundesiden/>
            </Route>
            <Route path="/">
              <Hjemsiden/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default FriApp;