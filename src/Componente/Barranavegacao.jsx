import estilo from './Barranavegacao.module.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function BarraNavegacao() {
    return (
        <nav className={estilo.conteiner}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/serie">Filmes</Link></li>
                <li><Link to="/perfil">Perfil</Link></li>
            </ul>
            <div className={estilo.pesquisa}>
                <input
                    type="text"
                    className={estilo.pesquisaInput}
                    placeholder="Buscar..."
                />
                <FaSearch className={estilo.iconePesquisa} />
            </div>
        </nav>
    );
}
