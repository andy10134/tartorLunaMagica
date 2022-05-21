import React, {useState} from 'react'
import getSign from '../libs';

export default function TarotForm({setConsultado, setHoroscopo}) {

  const comenzarConsulta = (e) => {
    e.preventDefault();

    let aux = getSign(datos.dateOfBirth);
    setConsultado(aux.signo);
    setHoroscopo(aux.horoscopo);
  };

  const [datos, setDatos] = useState({
      fullname: '',
      dateOfBirth: '',
      gender: ''
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
  })
  }

  return (
        <form className="col-7" onSubmit={comenzarConsulta}>
          <h4 className="welcome">Bienvenido</h4>
          <div className="mb-3 mt-3">
            <input
              className="form-control tarot-form"
              id="fullname"
              name="fullname"
              placeholder="Nombre Completo"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="row mt-3">
            <div className="mb-3 col-6">
              <input
                className="form-control tarot-form"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="Fecha Nacimiento"
                type="date"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3 col-6 content-select">
              <select 
                className="form-control tarot-form"
                id="gender"
                name="gender"
                placeholder="Genero"
                onChange={handleInputChange}
                required
              >
                <option value="1">Femenino</option>
                <option value="2">Masculino</option>
              </select>
            </div>
          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-consultar col-5">
              Consultar Tarot
            </button>
          </div>
        </form>

  );
}
