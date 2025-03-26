import estilo from './Barranavegacao.module.css';
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
            </div>
        </nav>
    )
}