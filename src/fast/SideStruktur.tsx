import React, {useState} from "react";
import Hode from "../komponenter/Hode";
import Fot from "../komponenter/Fot";
import {useLocation} from "react-router-dom";

const SideStruktur = (props: { children: React.ReactNode }) => {
  const location = useLocation();
  const fotFarge = location.pathname === "/hund" ? "pink" : "lightgreen";

  const [fullskjerm, setFullskjerm] = useState(false);
  const visFullskjermKnapp = location.pathname === "/katt";
  const fullskjermKnapp = <button onClick={() => setFullskjerm(!fullskjerm)}>Endre Fullskjerm</button>;

  if (fullskjerm && visFullskjermKnapp) {
    return (
      <div>
        {fullskjermKnapp}
        {props.children}
      </div>
    );
  }

  return (
    <div className="app">
      <div className="struktur">
        <Hode/>
        <div className="innhold">
          {visFullskjermKnapp && fullskjermKnapp}
          {props.children}
        </div>
        <Fot bakgrunn={fotFarge}/>
      </div>
    </div>
  )
};

export default SideStruktur;