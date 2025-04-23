import { BarraNavegacao } from '../Componente/Barranavegacao';
import { Cabecalho } from '../Componente/Cabecalho';
import { Outlet } from 'react-router-dom';

export function Inicial() {
  return (
    <>
      <BarraNavegacao />
      <Cabecalho />
      <Outlet />
    </>
  );
}
