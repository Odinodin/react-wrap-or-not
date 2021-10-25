import Hode from "./Hode";
import Fot from "./Fot";
import React from "react";

const StandardSide = (props: { children: React.ReactNode, bakgrunn?: string }) => {
  const {bakgrunn = "lightgreen", children} = props;

  return (
    <div className="app">
      <div className="struktur">
        <Hode/>
        <div className="innhold">
          {children}
        </div>
        <Fot bakgrunn={bakgrunn}/>
      </div>
    </div>
  )
};

export default StandardSide;