import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact</h2>
        <p className="text-gray-700 mb-6">
          Whether you’re a recruiter, collaborator, or just curious about my work — feel free to reach out!
        </p>
        <div className="space-y-2 text-gray-800 text-lg">
          <p>📧 <a href="mailto:thomas.bentivoglio@case.edu" className="hover:underline text-blue-600">thomas.bentivoglio@case.edu</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/thomas-bentivoglio" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">LinkedIn</a></p>
          <p>💻 <a href="https://github.com/thomasbenti" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">GitHub</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;