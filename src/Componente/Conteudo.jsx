<<<<<<< HEAD
import estilos from './Conteudo.module.css';
import { Lista } from './Lista';

//estrutura para fazer o componentes
export function Conteudo(){
    return(
        <main className={estilos.conteiner}>
            <Lista/>
        </main>

=======
import estilo from './Conteudo.module.css';
import { Lista } from './Lista';

export function Conteudo(){
    return(
        <main className= {estilo.conteiner}> 
           <Lista/>
        </main>
>>>>>>> 1fc66cb31bf69e7804e5e2d3f438977f279caebb
    )
}