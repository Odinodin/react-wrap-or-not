import React, {useState} from "react";
import StandardSide from "../../komponenter/StandardSide";

const Kattesiden = () => {
  const [fullskjerm, setFullskjerm] = useState(false);
  const fullskjermKnapp = <button onClick={() => setFullskjerm(!fullskjerm)}>Endre Fullskjerm</button>

  const kropp = <div>
    {fullskjermKnapp}
    <h1>KATTESIDEN</h1>
  </div>

  if (fullskjerm) {
    return kropp
  } else {
    return <StandardSide>{kropp}</StandardSide>
  }
};

export default Kattesiden;