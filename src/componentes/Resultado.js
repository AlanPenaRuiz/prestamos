import React from "react";

const Resultado = ({ total, plazo, cantidad }) => (
  <div className="u-full-width resultado">
    <h2> Resumen </h2> <p> Cantidad solicitada: {cantidad}€ </p>
    <p>Pagar: {plazo} meses</p>
    <p> Pago mensual: {total / plazo}€ </p> <p> Total: {total}€ </p>
  </div>
);

export default Resultado;
