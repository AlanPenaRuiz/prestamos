import React, { Fragment, useState } from "react";
import { calcularTotal } from "../helpers";

const Formulario = (props) => {
  //State
  const [error, setError] = useState(false);
  const {
    cantidad,
    setcantidad,
    plazo,
    setPlazo,
    setTotal,
    setCargando,
  } = props;
  //Submit
  const calcularPrestamo = (e) => {
    e.preventDefault();

    //Validacion
    if (cantidad === 0 || plazo === "") {
      setError(true);
      return;
    }
    //Eliminar error
    setError(false);

    //Habilitar spinner
    setCargando(true);

    setTimeout(() => {
      //Cotizacion
      const total = calcularTotal(cantidad, plazo);

      //Total
      setTotal(total);

      //Deshabilitar spinner
      setCargando(false);
    }, 2000);
  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ej: 3000"
              onChange={(e) => setcantidad(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={(e) => setPlazo(parseInt(e.target.value))}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {error ? (
        <p className="error">Todos los campos son obligatorios</p>
      ) : null}
    </Fragment>
  );
};

export default Formulario;
