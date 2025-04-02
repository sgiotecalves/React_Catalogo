import estilo from './Barranavegacao.module.css';
import { FaSearch } from 'react-icons/fa'; // Importando o ícone de pesquisa

export function Barranavegacao() {
    return (
        <nav className={estilo.conteiner}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Perfil</li>
            </ul>
            <div className={estilo.pesquisa}>
                <input
                    type="text"
                    className={estilo.pesquisaInput}
                    placeholder="Buscar..."
                />
                <FaSearch className={estilo.iconePesquisa} /> {/* Colocando o ícone de pesquisa */}
            </div>
        </nav>
    );
}
