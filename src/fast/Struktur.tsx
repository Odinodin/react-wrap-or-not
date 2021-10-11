import React from "react";
import Header from "../komponenter/Hode";
import Footer from "../komponenter/Fot";

const Struktur = (props: { children: React.ReactNode }) => {
  return (
    <div className="App">
      <div className="struktur">
        <Header/>
        <div className="innhold">
          {props.children}
        </div>
        <Footer/>
      </div>
    </div>
  )
};

export default Struktur;