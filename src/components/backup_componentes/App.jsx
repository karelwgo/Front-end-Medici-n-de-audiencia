import React from 'react';
import Navbar from './components/Navbar';
import Mosaico from './components/Mosaico';
import Popup from './components/Popup';
import Footer from './components/Footer';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: { nombre: "Usuario", imagen: "ruta/a/la/imagen-del-usuario.jpg" },
      tarjetas: [
        {
          imagen: "https://karelgomez124.grafana.net/public-dashboards/a5614f05bfa04d428dbf69b86e646552",
          texto: "Texto de la Tarjeta 1",
          botones: [
            { texto: "Botón 1", onClick: () => alert("Botón 1 de la tarjeta 1") },
            { texto: "Botón 2", onClick: () => alert("Botón 2 de la tarjeta 1") }
          ]
        },
        {
          imagen: "https://karelgomez124.grafana.net/d-solo/fdmacvcwgeebke/test-dashboard?orgId=1&from=1716199963081&to=1716221563081&panelId=1",
          texto: "Texto de la Tarjeta 2",
          botones: [
            { texto: "Botón 1", onClick: () => alert("Botón 1 de la tarjeta 2") },
            { texto: "Botón 2", onClick: () => alert("Botón 2 de la tarjeta 2") }
          ]
        },
        {
          imagen: "https://karelgomez124.grafana.net/d-solo/fdmacvcwgeebke/test-dashboard?orgId=1&from=1716199963081&to=1716221563081&panelId=1",
          texto: "Texto de la Tarjeta 3",
          botones: [
            { texto: "Botón 1", onClick: () => alert("Botón 1 de la tarjeta 3") },
            { texto: "Botón 2", onClick: () => alert("Botón 2 de la tarjeta 3") }
          ]
        },
        {
          imagen: "https://karelgomez124.grafana.net/d-solo/fdmacvcwgeebke/test-dashboard?orgId=1&from=1716199963081&to=1716221563081&panelId=1",
          texto: "Texto de la Tarjeta 4",
          botones: [
            { texto: "Botón 1", onClick: () => alert("Botón 1 de la tarjeta 4") },
            { texto: "Botón 2", onClick: () => alert("Botón 2 de la tarjeta 4") }
          ]
        }
      ],
      popupImagen: null
    };
  }
  

  handleTarjetaSelect = (index) => {
    const { tarjetas } = this.state;
    this.setState({ popupImagen: tarjetas[index].imagen }); 
  }
  

  handleClosePopup = () => {
    this.setState({ popupImagen: null });
  }

  render() {
    const { usuario, tarjetas, popupImagen } = this.state;
    return (
      <div className="app">
        <Navbar usuario={usuario} />
        <Mosaico tarjetas={tarjetas} onTarjetaSelect={this.handleTarjetaSelect} />
        {popupImagen && <Popup graficoUrl={popupImagen} onClose={this.handleClosePopup} />}
        <Footer />
      </div>
    );
  }
}

export default App;