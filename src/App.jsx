import { Barranavegacao } from "./Componente/Barranavegacao";
import { Cabecalho } from "./Componente/cabecalho";
import { Conteudo } from "./Componente/Conteudo";
//Todo elemento deve estar dentro de function
function App(){
//// tags fantasmas: são as tags vazias a ponto de permitir a renderização de 2 ou mais elementos HTML no mesmo componente
  return(
    <>
    <Barranavegacao/>
    <Cabecalho/>
    <Conteudo/>
    </>

  )
}
//Para que a função seja chamada em outros elementos nós devemos "exporta-la
export default App