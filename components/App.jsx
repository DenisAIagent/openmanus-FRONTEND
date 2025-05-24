import React, { useState } from 'react';
import LoginPage from './LoginPage';
import Layout from './Layout';
import '../styles/globals.css';
import '../styles/responsive.css';
import '../styles/login.css';

const App = () => {
  // État pour gérer si l'utilisateur est connecté
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Fonction pour gérer la connexion
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  // Afficher la page de connexion ou le dashboard en fonction de l'état de connexion
  return isLoggedIn ? (
    <Layout onLogout={handleLogout} />
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
};

export default App;
