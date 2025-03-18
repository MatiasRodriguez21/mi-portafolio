// src/pages/ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams(); // Captura el ID del proyecto desde la URL
  
  // Definición de los detalles de los proyectos
  const projectDetails = {
    "lista-de-tareas": {
      description: "Este es un proyecto de lista de tareas donde puedes agregar, eliminar y marcar tareas como completadas.",
      images: ["/images/lista-de-tareas-1.jpg", "/images/lista-de-tareas-2.jpg"], // Asegúrate de que estas imágenes existan
      purpose: "Este proyecto sirve para gestionar tareas de manera eficiente.",
    },
    // Puedes agregar más proyectos aquí
    "otro-proyecto": {
      description: "Descripción de otro proyecto.",
      images: ["/images/otro-proyecto-1.jpg"],
      purpose: "Propósito de otro proyecto.",
    },
  };

  // Obtiene los detalles del proyecto basado en el ID
  const project = projectDetails[id] || {};

  return (
    <div className="project-detail">
      <h2>{id}</h2>
      <p>{project.description}</p>
      <h3>Propósito</h3>
      <p>{project.purpose}</p>
      <h3>Imágenes</h3>
      <div className="image-gallery">
        {project.images && project.images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen del proyecto ${id}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;