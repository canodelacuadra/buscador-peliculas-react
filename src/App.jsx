import { useState, useEffect } from 'react';
import pkg from '../package.json';
import claqueta from "./assets/claqueta.png"
import Footer from './Footer';
import './App.css';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(pkg.config.urlPeliculas)
      .then(response => response.json())
      .then(data => {
        setPeliculas(data);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error al cargar las películas:', error);
        setCargando(false);
      });
  }, []);

  const resultados = busqueda.trim()
    ? peliculas.filter(pelicula =>
      pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
    )
    : [];

  return (
    <>
      <div className="contenedor">
        <img style={{
          textAlign: "center",
          width: 200,
          height: "auto"

        }} src={claqueta} />
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
          <h1>Buscador de Películas</h1>

          <input
            type="text"
            placeholder="Buscar por título..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
            disabled={cargando}
          />

          {cargando && <p>Cargando películas...</p>}

          {!cargando && busqueda && resultados.length === 0 && (
            <p>No se encontraron resultados.</p>
          )}

          {!cargando && resultados.length > 0 && (
            <ul>
              {resultados.map(pelicula => (
                <li key={pelicula._id.$oid} style={{ marginBottom: '1rem' }}>
                  <strong>{pelicula.titulo}</strong> ({pelicula.año})<br />
                  <em>Director:</em> {pelicula.director}<br />
                  <em>Género:</em> {pelicula.genero.join(', ')}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
