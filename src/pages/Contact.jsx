import React, { useState } from "react";
import "../index.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null); // Estado para manejar errores

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Restablecer el error antes de enviar

    const response = await fetch("https://formspree.io/f/xzzdydld", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Restablecer el formulario
    } else {
      setError("Hubo un problema al enviar el formulario. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <section id="contact" className="container my-5 fade-in">
      <h2 className="text-center">Contacto</h2>
      <div className="contenedor-contact">
        {submitted ? (
          <div className="alert alert-success" role="alert">
            ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>} {/* Mostrar error si existe */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" name="name" id="name" className="form-control scale-on-hover" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input type="email" name="email" id="email" className="form-control scale-on-hover" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea name="message" id="message" className="form-control scale-on-hover" rows="4" required onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="project-link">Enviar</button>
          </form>
        )}
        <p className="text-center mt-3">
          Para enviarme un correo presiona 
          <a href="mailto:mati.rodriguez1201@gmail.com" className="link-primary"> aquí</a>
        </p>
      </div>
    </section>
  );
};


export default Contact;
