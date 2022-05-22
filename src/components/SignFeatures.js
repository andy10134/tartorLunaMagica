import React from 'react';
import signFeatures from '../signs-features.json';
import CompatibilityBar from "./CompatibilityBar";
import Feature from "./Feature";

export default function SignFeatures({datos, consultado, horoscopo}) {
    let sign = signFeatures[consultado];

  return (        <div className="row">
  <div className="col-md-7">
    <h3 className="features-zodiac">{datos.fullname}</h3>
    <h3 className="features-zodiac">Fecha de nacimiento: {datos.dateOfBirth}</h3>
    <h3 className="features-zodiac">Genero: {datos.gender}</h3>
    <h1 className="zodiac-sign-name">{sign.nombre}</h1>
    <p className="info-text">
      {sign.descripcion}
    </p>
    <h1 className="zodiac-sign-name" style={{ fontSize: "2.5rem" }}>
      Horóscopo <i className="fa-solid fa-moon"></i>
    </h1>
    <p className="info-text">
      {horoscopo}
    </p>
  </div>
  <div className="col-md-5">
    <div className="container-fluid">
      <div className="zodiac-image">
        <h1 className="zodiac-icon">{sign.icon}</h1>
      </div>
      <div className="zodiac-icon-desc">
        <br />
        {sign.periodo}
      </div>
      <div className="mt-2 ">
        <p className="features-zodiac">
          {
            sign.caracteristicas.map((e) => {
              return(<Feature name={e[0]} value={e[1]}></Feature>);
            })
          }
        </p>
      </div>
      <div className="mt-2">
        {
          sign.compatibilidades.map((e) => {
            console.log(e);
            return(
              <CompatibilityBar name={e.nombre} value={e.value}></CompatibilityBar>
            )
          })
        }
      </div>
    </div>
  </div>
</div>
  )
}