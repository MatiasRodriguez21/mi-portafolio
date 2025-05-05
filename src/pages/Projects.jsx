import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

const Projects = () => {
  const [repos, setRepos] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const projectDescriptions = {
    "lista-tareas": {
      description: "Aplicación para gestión eficiente de tareas con persistencia de datos.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
    },
    "inmobiliaria-app": {
      description: "Aplicación inmobiliaria para gestión de propiedades.",
      technologies: ["React","javascript", "Node.js", "Talwind CSS"],
    },
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.github.com/users/MatiasRodriguez21/repos");
        if (!response.ok) throw new Error("Error al obtener los repositorios");
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <main className="project-detail-container">
      <section className="project-header">
        <h1 className="project-title">Mis Proyectos</h1>
      </section>

      {loading ? (
        <div className="loading-spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="projects-grid">
          {repos.map((repo) => (
            <div key={repo.id} className="project-card">
              <div className="project-card-content">
                <h3 className="project-card-title">{repo.name}</h3>
                <p className="project-card-description">
                  {projectDescriptions[repo.name]?.description || ""}
                </p>
                <div className="tech-list">
                  {projectDescriptions[repo.name]?.technologies?.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                  ))}
                </div>
                <Link 
                  to={`/project/${repo.name}`} 
                  className="project-link"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Projects;
