import React from 'react';
import Tarjeta from './Tarjeta';


function Mosaico({ tarjetas, onTarjetaSelect }) {
  return (
    <div className="mosaico container mt-4">
      <div className="row">
        {tarjetas.map((tarjeta, index) => (
          <div key={index} className="col-12 col-md-6 mb-4">
            <Tarjeta
              graficoUrl={tarjeta.imagen}
              texto={tarjeta.texto}
              botones={tarjeta.botones}
              onSelect={() => onTarjetaSelect(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mosaico;