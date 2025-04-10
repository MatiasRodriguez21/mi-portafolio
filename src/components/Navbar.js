import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Enlace a la página principal */}
        <Link className="navbar-brand custom-title nav-link" to="/">
          Mi Portafolio
        </Link>

        {/* Botón para el menú en móviles */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={() => setIsOpen(false)}>Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={() => setIsOpen(false)}>Habilidades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>Contacto</Link>
            </li>
          </ul>
          
          {/* Iconos de redes sociales */}
          <div className="social-links ms-auto d-flex align-items-center">
            <a href="https://www.linkedin.com/in/matirodriguez23/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/MatiasRodriguez21" target="_blank" rel="noopener noreferrer" className="social-icon github">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
