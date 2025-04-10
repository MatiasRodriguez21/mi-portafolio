// src/pages/ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projectDetails = {
    "lista-tareas": {
      title: "Lista de Tareas",
      description: "Aplicación para gestión eficiente de tareas con persistencia de datos.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      images: [
        "/images/lista-tareas.png",
        "/images/lista-tareas-oscuro.png"
      ],
      purpose: "Aplicación de lista de tareas que permite a los usuarios agregar, eliminar y gestionar sus tareas diarias de manera eficiente.",
      features: [
        "**Agregar Tareas**: Permite a los usuarios agregar nuevas tareas a la lista.",
        "**Eliminar Tareas**: Los usuarios pueden eliminar tareas completadas o no deseadas.",
        "**Modo Nocturno**: Cambia la apariencia de la aplicación para facilitar su uso en entornos oscuros.",
        "**Interfaz Intuitiva**: Diseño simple y fácil de usar para una mejor experiencia del usuario."
      ]
    },
    "otro-proyecto": {
      title: "Otro Proyecto",
      description: "Descripción detallada del proyecto y sus funcionalidades.",
      technologies: ["React", "Node.js", "MongoDB"],
      images: ["/images/otro-proyecto-1.jpg"],
      purpose: "Mostrar capacidades full-stack con tecnologías modernas.",
    },
    "otro-proyecto": {
      title: "Otro Proyecto",
      description: "Descripción detallada del proyecto y sus funcionalidades.",
      technologies: ["React", "Node.js", "MongoDB"],
      images: ["/images/otro-proyecto-1.jpg"],
      purpose: "Mostrar capacidades full-stack con tecnologías modernas.",
    },
    "otro-proyecto": {
      title: "Otro Proyecto",
      description: "Descripción detallada del proyecto y sus funcionalidades.",
      technologies: ["React", "Node.js", "MongoDB"],
      images: ["/images/otro-proyecto-1.jpg"],
      purpose: "Mostrar capacidades full-stack con tecnologías modernas.",
    },
  };

  const project = projectDetails[id] || {};

  return (
    <main className="project-detail-container">
      <section className="project-header">
        <h1 className="project-title">{project.title || id}</h1>
        <p className="project-description">{project.description}</p>
      </section>

      <section className="project-content">
        <div className="project-info">
          <h2 className="section-title">Tecnologías utilizadas</h2>
          <ul className="tech-list">
            {project.technologies && project.technologies.map((tech, index) => (
              <li key={index} className="tech-item">{tech}</li>
            ))}
          </ul>
          
          <h2 className="section-title">Propósito y Características</h2>
          <p className="project-purpose">{project.purpose}</p>
          
          {project.features && (
            <div className="features-list">
              <h3 className="features-title">Características principales:</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index} className="feature-item" dangerouslySetInnerHTML={{__html: feature}} />
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="project-gallery">
          <h2 className="section-title">Galería</h2>
          <div className="image-grid">
            {project.images && project.images.map((image, index) => (
              <div key={index} className="image-container">
                <img 
                  src={image} 
                  alt={`Imagen del proyecto ${id}`} 
                  className="project-image"
                  loading="lazy"
                  onClick={() => window.open(image, '_blank')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;