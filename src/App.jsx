
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Rotas } from './Rotas/Rotas';
import { Perfil } from './Paginas/Perfil';

function App(){
  return(
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
  );
}

export default App;  // Exportando o componente App

