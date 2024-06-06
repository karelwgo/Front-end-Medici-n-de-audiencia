import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mosaico from './components/Mosaico';
import Popup from './components/Popup';
import Footer from './components/Footer';
import Login from './components/MyLogin';
import Home from './components/Home';
import { DataContext } from './DataProvider';
import './CSS/styles.css';



function App() {
  const { userData, cardsData } = useContext(DataContext);
  const [popupImagen, setPopupImagen] = useState(null);

  const handleTarjetaSelect = (index) => {
    setPopupImagen(cardsData[index].imagen);
  }

  const handleClosePopup = () => {
    setPopupImagen(null);
  }

  return (
    <Router>
      <div className="app">
        <Navbar usuario={userData.nombre} imagenUsuario={userData.imagen} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={
            <>
              <Mosaico tarjetas={cardsData} onTarjetaSelect={handleTarjetaSelect} />
              {popupImagen && <Popup graficoUrl={popupImagen} onClose={handleClosePopup} />}
              <Footer />
            </>
          } />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
