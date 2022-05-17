import React from 'react'

export default function TarotForm() {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <img
          className="col-5"
          src="../luna-magica-logo.png"
          style={{ marginTop: "-70px" }}
          alt="logo"
          height="509px"
        />
        <h1 className="col-12 logo">Luna Magica</h1>
      </div>
      <div className="row d-flex justify-content-center">
        <form className="col-7">
          <h4 className="welcome">Bienvenido</h4>
          <div className="mb-3 mt-3">
            <input
              className="form-control tarot-form"
              id="exampleFormControlInput1"
              placeholder="Nombre Completo"
            />
          </div>
          <div className="row mt-3">
            <div className="mb-3 col-6">
              <input
                className="form-control tarot-form"
                id="exampleFormControlInput1"
                placeholder="Fecha Nacimiento"
              />
            </div>
            <div className="mb-3 col-6">
              <input
                className="form-control tarot-form"
                id="exampleFormControlInput1"
                placeholder="Genero"
              />
            </div>
          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-consultar col-5">
              Consultar Tarot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
