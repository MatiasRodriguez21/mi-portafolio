// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación

const Home = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Bienvenido a mi Portafolio</h1>

      <div className="card my-4">
        <img src="mi-foto.jpg" alt="Matías Rodríguez" className="card-img-top rounded-circle" style={{ width: '200px', height: '200px', margin: 'auto' }} />
        <div className="card-body">
          <h2 className="card-title"> Matías Rodríguez</h2>
          <p className="card-text">
            Soy un Desarrollador Web apasionado por la creación de aplicaciones modernas y funcionales. Tengo experiencia en desarrollo frontend y backend, y me encanta aprender nuevas tecnologías.
            Actualmente, estoy buscando oportunidades como Desarrollador Jr para aplicar mis habilidades en un entorno profesional.
          </p>
          <p className="card-text">
            A lo largo de mi carrera, he trabajado en varios proyectos que abarcan desde aplicaciones de una sola página hasta sistemas más complejos. Estoy siempre en busca de nuevos desafíos y oportunidades para aprender y crecer.
          </p>
          <div className="home-links">
            <Link to="/projects" className="btn btn-primary mx-2">Ver Proyectos</Link>
            <Link to="/contact" className="btn btn-primary mx-2">Contáctame</Link>
          </div>
          <a href="/Rodriguez-Matias.pdf" download className="button btn btn-primary mt-3">Descargar mi CV</a>
        </div>
      </div>
    </div>
  );
};

export default Home;