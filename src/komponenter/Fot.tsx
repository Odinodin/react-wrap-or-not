import React from "react";

const Fot = ({bakgrunn}: {bakgrunn: string}) => {

  return (
    <div className="fot" style={{background: bakgrunn}}>
      <h1>FOTEN</h1>
    </div>
  )
};

export default Fot;