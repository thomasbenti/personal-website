import React from "react";

const researchItems = [
  {
    title: "About physical robot",
    url: "https://github.com/yourusername/about-robot",
  },
  {
    title: "Code for robot",
    url: "https://github.com/yourusername/robot-code",
  },
];

const Research = () => {
  return (
    <section id="research" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Research</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {researchItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <p className="text-lg font-medium text-gray-700 mb-2">
                {item.title}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
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

export default Research;