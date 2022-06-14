import React from 'react';
import StarWarsData from './components/StarWarsData';
import './App.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <StarWarsData />
    </Provider>
  );
}

export default App;
