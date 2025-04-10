import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container fade-in">
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src="mi-foto.jpg" 
            alt="Matías Rodríguez" 
            className="profile-image"
          />
        </div>
        <div className="profile-content">
          <h2 className="profile-title">Matías Rodríguez</h2>
          <p className="profile-text">
            Desarrollador Full Stack Junior especializado en JavaScript, React y Node.js. 
            Apasionado por crear soluciones web innovadoras y en constante aprendizaje.
          </p>
          <p className="profile-text">
            Busco oportunidades para aplicar mis conocimientos y crecer profesionalmente 
            en un entorno colaborativo.
          </p>
          <div className="home-links">
            <Link to="/projects" className="project-link">Ver Proyectos</Link>
            <Link to="/contact" className="project-link">Contáctame</Link>
            <a href="/Rodriguez-Matias.pdf" download className="project-link">Descargar CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
