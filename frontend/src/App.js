import React, { useState } from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);


  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnCLogo"/>

      <div className="content">
        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input 
            id="email" 
            type="email" 
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}>
          </input>
          <button 
            type="submit"
            className="btn">Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;