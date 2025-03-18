import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react"; // Importa Iconify

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

          {/* Enlace a GitHub alineado a la derecha */}
          <a 
            href="https://github.com/tu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link"
          >
            <Icon icon="skill-icons:github-dark" className="github-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
