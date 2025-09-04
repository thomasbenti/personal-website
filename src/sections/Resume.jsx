import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Resume
        </h2>

        {/* Download Resume Button */}
        <div className="text-center mb-6">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
          >
            📄 Download Resume (PDF)
          </a>
        </div>

        {/* Embedded Resume Viewer */}
        <div className="w-full overflow-hidden px-4">
          <embed
            src="Resume.pdf"
            type="application/pdf"
            className="w-full max-w-5xl mx-auto"
            style={{ height: "85vh" }}
          />
        </div>

        {/* ✅ Mobile Fallback (fix link filename) */}
        <div className="sm:hidden p-4 text-center text-gray-600 text-sm italic">
          PDF preview not available on small screens. Please{" "}
          <a
            href="/Thomas_Bentivoglio_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            tap here to open the resume
          </a>
          .
        </div>
      </div>
    </section>
  );
};

export default Resume;