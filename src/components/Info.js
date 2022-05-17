import React, { useEffect } from "react";

export default function Info({ open, consultado }) {
  
  let className = "container-fluid info";
  if (open) {
    className += " active";
  }

  useEffect(()=>{
  
    fetch("https://horoscopefree.herokuapp.com/daily/es/", {mode: 'no-cors'})
    .then(respone => respone.json())
    .then(response => console.log(response))
    .catch(e => console.log(e));
  });

  if(consultado){

  return (
    <div className={className}>
      <div className="row">
        <div className="col-md-7">
          <h1 className="zodiac-sign-name">Acuario ♒</h1>
          <p className="info-text">
            Los Acuario tienen una personalidad fuerte y atractiva. Hay dos
            tipos de Acuario: uno es tímido, sensible, y paciente. El otro tipo
            es exuberante, vivo y puede llegar a esconder las profundidades de
            su personalidad debajo de un aire frívolo.
          </p>
          {/* <button>Ver más <i class="fa-solid fa-angle-down"></i></button> */}
          <h1 className="zodiac-sign-name" style={{ 'fontSize': '2.5rem' }}>Horóscopo <i className="fa-solid fa-moon"></i></h1>
          <p className="info-text">
          No se te escaparán las ocasiones para concederte unas pausas y relajarte. En el ámbito laboral, tendrás la oportunidad de concluir una operación que te dará importantes ganancias. En el ámbito afectivo, no tendrás que poner vínculos a tu relación.","pisces":"Tendrás la posibilidad de aclarar un altercado con una persona de tu familia y volverás a encontrar un buen acuerdo. En el ámbito laboral, estarás ecónomo y no te cansarás de todos los cargos que durante esta fase resultan ser de difícil entidad. En el ámbito afectivo, estarás contrariado a causa de las excesivas efusiones de una persona recién conocida.
          </p>
        </div>
        <div className="col-md-5">
          <div className="container-fluid">
            <div className="zodiac-image">
              <h1 className="zodiac-icon">a</h1>
            </div>
            <div className="zodiac-icon-desc">
              <br />
              Desde el 21 de Enero al 19 de Febrero.
            </div>
            <div className="mt-2 ">
              <p className="features-zodiac">
                <span>Elemento</span> : Aire<br />
                Estación : Invierno.<br />
                Carácter : Muy sociables.<br />
                A favor : Son muy altruistas<br />
                En contra :Imprevisibles y tozudos.<br />
                Día de la semana : Sábado. <br />
                Color :Turquesa<br />
                Planeta : Urano<br />
                Perfumes : Helecho y Espliego<br />
                Piedras Preciosas : Amatista y Aguamarina<br />
                Metales: Aluminio  <br />
                Números de la suerte: 3,37,12,16,21<br />
              </p>
            </div>
            <div className="mt-2">
              <h4>Compatibilidades</h4>
              <h4 className="mt-2 compatibility-sign">Acuario</h4>
              <div className="progress mt-1">
                <div className="progress-bar" role="progressbar" style={{ "width": "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="mt-2 compatibility-sign">Tauro</h4>

              <div className="progress mt-1">
                <div className="progress-bar" role="progressbar" style={{ "width": "55%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="mt-2 compatibility-sign">Picis</h4>

              <div className="progress mt-1">
                <div className="progress-bar" role="progressbar" style={{ "width": "25%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
  }else{
    return (
    <div>
      
    </div>
    );
  }
}
