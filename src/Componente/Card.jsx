<<<<<<< HEAD
import estilos from './Card.module.css';
 
 
export function Card({ movie, onOpenModal }){
    return(
        <div className={estilos.conteiner}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={() => onOpenModal(movie)}/>
            <p/>
            <p>{movie.overview}</p>
        </div>  
    );
 
=======
import estilo from './Card.module.css';

export function Card({ movie }){
    return(
        <div className={estilo.conteiner}>
            <h3>{movie.title}</h3>
            <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}  />
            <p/>
            <p>{movie.overview}</p>
        </div>
    )
>>>>>>> 1fc66cb31bf69e7804e5e2d3f438977f279caebb
}