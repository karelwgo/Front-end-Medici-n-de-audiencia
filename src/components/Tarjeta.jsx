import React from 'react';
import PropTypes from 'prop-types';

function Tarjeta({ graficoUrl, texto, botones, onSelect }) {
  return (
    <div className="tarjeta card" onClick={onSelect}>
      <iframe src={graficoUrl} className="grafico-iframe" title="Gráfico de Grafana"></iframe>
      <div className="card-body">
        <p className="card-text">{texto}</p>
        <div className="botones">
          {botones.map((boton, index) => (
            <button
              key={index}
              className="btn btn-primary me-2"
              onClick={(e) => {
                e.stopPropagation();
                boton.onClick();
              }}
            >
              {boton.texto}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

Tarjeta.propTypes = {
  graficoUrl: PropTypes.string.isRequired,
  texto: PropTypes.string,
  botones: PropTypes.arrayOf(
    PropTypes.shape({
      texto: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
  onSelect: PropTypes.func.isRequired,
};

Tarjeta.defaultProps = {
  texto: 'Default Card Text',
  botones: [],
};

export default Tarjeta;
