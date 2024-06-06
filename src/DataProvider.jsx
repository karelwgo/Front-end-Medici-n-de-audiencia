import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';
const API_BASE_URL = 'http://localhost:3000';

// Datos por defecto
const defaultUserData = {
  nombre: 'Not user login',
  imagen: 'https://via.placeholder.com/50',
};

const Url_defect = 'http://10.144.0.1:3000/d-solo/da4fb0f6-e732-4253-bc29-af7179ca77e9/audiencia?orgId=1&from=1716966881794&to=1716988481794&panelId=12'
const defaultCardsData = [
  {
    imagen: Url_defect,
    texto: 'Default Card Text 1',
    botones: [],
  },
  {
    imagen: Url_defect,
    texto: 'Default Card Text 2',
    botones: [],
  },
  {
    imagen: Url_defect,
    texto: 'Default Card Text 3',
    botones: [],
  },
  {
    imagen: Url_defect,
    texto: 'Default Card Text 4',
    botones: [],
  },
];

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState(defaultUserData);
  const [cardsData, setCardsData] = useState(defaultCardsData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const userResponse = await axios.get(`${API_BASE_URL}/api/user`);
        const cardsResponse = await axios.get(`${API_BASE_URL}/api/cards`);

        setUserData(userResponse.data);
        setCardsData(cardsResponse.data);
      } catch (error) {
        console.error('Error al cargar datos', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const contextValue = error ? { userData: defaultUserData, cardsData: defaultCardsData } : { userData, cardsData };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};
