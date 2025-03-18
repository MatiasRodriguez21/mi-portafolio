// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  // Descripciones personalizadas
  const projectDescriptions = {
    "nombre-del-repo-1": {
      description: "Descripción personalizada para el proyecto 1.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    "nombre-del-repo-2": {
      description: "Descripción personalizada para el proyecto 2.",
      technologies: ["React", "Node.js"],
    },
    // Agrega más proyectos según sea necesario
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/MatiasRodriguez21/repos");
        if (!response.ok) {
          throw new Error("Error al obtener los repositorios");
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRepos();
  }, []);

  if (error) {
    return <div className="alert alert-danger" role="alert">{error}</div>;
  }

  return (
    <section id="projects" className="container my-5">
      <h2 className="text-center">Proyectos</h2>
      <div className=" row">
        {repos.map((repo) => (
          <div key={repo.id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text">
                  {projectDescriptions[repo.name]?.description || ""}
                </p>
                <Link to={`/project/${repo.name}`} className="btn btn-primary">Ver Detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;