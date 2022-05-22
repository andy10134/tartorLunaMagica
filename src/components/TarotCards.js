import React from "react";
import Export from "./Export";

export default function TarotCards({cartas}) {
  return (
    <div className="row">
      <h1 className="welcome">Tus cartas son:</h1>
      <div className="row">
      <div className="col-4">
      <h2 className="welcome">Pasado</h2>
      </div>
      <div className="col-4">
      <h2 className="welcome">Presente</h2>
      </div>
      <div className="col-4">
      <h2 className="welcome">Futuro</h2>
      </div>
        {
          cartas.map((e) =>{
            let aux;
            if(e.type === 'major'){
              aux = 'M'+e.value_int + ".png"
            }else{
              aux = e.suit.charAt(0).toUpperCase()+e.value_int + ".png"
            }
            return(
              <div className="col-4">
              <img src={"../pix/" + aux} className="tarot-card" alt="lol" />
              <p className="tarot-card-desc">
                {e.meaning_up}
                </p>
            </div>
            );
          })
        }
      </div>
      <div className="text-center mt-3">
            <Export></Export>
      </div>
    </div>
  );
}
