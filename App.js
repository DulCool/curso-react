import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {PrimerComponente}  from './PrimerComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

class App extends Component {
  render(){

    /**Declaracion de objeto */
    const ficha_medica = {
      altura: "187cm",
      grupoSangre: "B+",
      estadoSalud: "Bueno",
      alergias: "Ninguno"
    };

    return (
      <div className="App">
        <header className="App-header">
        <PrimerComponente />
        <SegundoComponente />
        <TercerComponente
        nombre="Juanita"
        apellido="Juarez"
        ficha= {ficha_medica}
        />
        </header>
        
        </div>
        
    );
  }
}

export default App;
