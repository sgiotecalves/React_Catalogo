import React, { useState, useEffect } from "react";
import axios from "axios";
import estilos from './Perfil.module.css';

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Perfil() {
  const [series, setSeries] = useState([]);
  const [selectedSerie, setSelectedSerie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fazendo a requisição para a API
    axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)
      .then(response => {
        console.log("Dados recebidos da API:", response.data.results); // Verifique se os dados são recebidos
        setSeries(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar as séries:", error);
        setError('Erro ao carregar as séries. Tente novamente mais tarde.');
        setLoading(false);
      });
  }, []);

  console.log("Séries no estado:", series); // Verifique o estado das séries

  return (
    <div className={estilos.container}>
      <h1>Séries Populares</h1>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      <div className={estilos.seriesList}>
        {series.length === 0 && !loading && !error && (
          <p>Nenhuma série disponível.</p>
        )}
        {series.map((serie) => (
          <div 
            key={serie.id} 
            className={estilos.serieCard} 
            onClick={() => setSelectedSerie(serie)}
          >
            <img 
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path || '/default-image.jpg'}`} 
              alt={`Poster da série ${serie.name}`} 
            />
            <h2>{serie.name}</h2>
          </div>
        ))}
      </div>

      {selectedSerie && (
        <div className={estilos.serieDetails}>
          <h2>{selectedSerie.name}</h2>
          <p>{selectedSerie.overview}</p>
          <p><strong>Avaliação:</strong> {selectedSerie.vote_average}</p>
        </div>
      )}
    </div>
  );
}
