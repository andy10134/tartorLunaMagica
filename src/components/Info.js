import React, { useEffect, useState } from "react";
import SignFeatures from "./SignFeatures";
export default function Info({ open, consultado, horoscopo, datos }) {
  let className = "container-fluid info";
  const [aux, setAux] = useState(false);

  useEffect(() => {
    if(consultado !== ""){
      setTimeout(() => {
        setAux(true)
      }, 2000)
    }
  }, [consultado]);

  if (open) {
    className += " active";
  }

  if (consultado !== "") {
    return (
      <div className={className}>
        {aux ? (
          <SignFeatures
            horoscopo={horoscopo}
            datos={datos}
            consultado={consultado}
          ></SignFeatures>
        ) : (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
}
