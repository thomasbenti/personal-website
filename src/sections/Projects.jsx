import React from "react";

const projects = [
  {
    title: "Bookstore DB System",
    description: "Built a relational database with ER design, normalization, and CLI queries for managing book inventory and orders.",
    link: "https://github.com/yourusername/bookstore-db",
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Streamlit web app for classifying sentiment using TextBlob with real-time lemmatization and regex processing.",
    link: "https://github.com/yourusername/nlp-sentiment-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;