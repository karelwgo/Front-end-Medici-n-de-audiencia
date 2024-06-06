import React from 'react';

function Popup({ graficoUrl, onClose }) {
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content">
          <iframe src={graficoUrl} title="Gráfico de Grafana" className="popup-iframe" />
        </div>
      </div>
    );
  }

  export default Popup;