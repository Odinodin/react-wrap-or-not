import React from "react";
import {Link} from "react-router-dom";

const Hode = () => (
  <div className="hode">
    <h1>Hode</h1>
    <Link to="/">Hjem</Link>
    <br/>
    <Link to="/hund">Hund</Link>
    <br/>
    <Link to="/katt">Katt</Link>
  </div>
);

export default Hode;