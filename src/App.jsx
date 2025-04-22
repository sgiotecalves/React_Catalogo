<<<<<<< HEAD
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from './Rotas/Rotas';

function App(){
  return(
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
  );
}

export default App
=======
import React from 'react';
import Index from './paginas/index';  // Importando o componente Index

function App() {
  return <Index />;  // Utilizando o componente Index
}

export default App;  // Exportando o componente App
>>>>>>> 1fc66cb31bf69e7804e5e2d3f438977f279caebb
