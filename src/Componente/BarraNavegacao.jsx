import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

export function BarraNavegacao() {
    return (
        <nav className={estilos.conteiner}>
            <ul>
                <li>
                    <Link to='/' className={estilos.link}>
                        <span className="material-symbols-outlined">home</span>
                        <span className={estilos.label}>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to='/serie' className={estilos.link}>
                        <span className="material-symbols-outlined">live_tv</span>
                        <span className={estilos.label}>Séries</span>
                    </Link>
                </li>
                <li>
                    <Link to='/perfil' className={estilos.link}>
                        <span className="material-symbols-outlined">account_circle</span>
                        <span className={estilos.label}>Perfil</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
