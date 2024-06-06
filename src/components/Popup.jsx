import React from 'react';
import PropTypes from 'prop-types';

function Popup({ graficoUrl, onClose }) {
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content">
          <iframe src={graficoUrl} title="Gráfico de Grafana" className="popup-iframe" />
        </div>
      </div>
    );
  }

  Popup.propTypes = {
    graficoUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  export default Popup;