import React from 'react';
import Tarjeta from './Tarjeta';
import PropTypes from 'prop-types';

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

Mosaico.propTypes = {
  tarjetas: PropTypes.arrayOf(
    PropTypes.shape({
      imagen: PropTypes.string.isRequired,
      texto: PropTypes.string,
      botones: PropTypes.array,
    })
  ).isRequired,
  onTarjetaSelect: PropTypes.func.isRequired,
};

Mosaico.defaultProps = {
  tarjetas: [
    {
      imagen: 'https://via.placeholder.com/300x200',
      texto: 'Default Card Text 1',
      botones: [],
    },
    {
      imagen: 'https://via.placeholder.com/300x200',
      texto: 'Default Card Text 2',
      botones: [],
    },
    {
      imagen: 'https://via.placeholder.com/300x200',
      texto: 'Default Card Text 3',
      botones: [],
    },
    {
      imagen: 'https://via.placeholder.com/300x200',
      texto: 'Default Card Text 4',
      botones: [],
    },
  ],
};

export default Mosaico;
