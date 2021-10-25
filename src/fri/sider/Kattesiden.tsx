import React, {useState} from "react";
import StandardSide from "../../komponenter/StandardSide";

const Kattesiden = () => {
  const [fullskjerm, setFullskjerm] = useState(false);
  const fullskjermKnapp = <button onClick={() => setFullskjerm(!fullskjerm)}>Fyll skjermen</button>

  const kropp = <div>
    <div>{fullskjermKnapp}</div>
    <img src="katt.jpg" alt="katt" />
  </div>

  if (fullskjerm) {
    return kropp
  } else {
    return <StandardSide>{kropp}</StandardSide>
  }
};

export default Kattesiden;