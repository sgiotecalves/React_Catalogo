import { Barranavegacao } from "../Componente/Barranavegacao";
import { Cabecalho } from "../Componente/Cabecalho";
import { Conteudo } from "../Componente/Conteudo";

function App() {
  // Tags fantasmas: são as tags vazias a ponto de permitir a renderização de 2 ou mais elementos HTML no mesmo componente
  return (
    <>
      <Barranavegacao />
      <Cabecalho />
      <Conteudo />
    </>
  );
}

// Para que a função seja chamada em outros elementos, nós devemos exportá-la
export default App; // Adicione o ponto e vírgula após a exportação
