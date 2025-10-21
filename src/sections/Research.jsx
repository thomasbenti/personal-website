import React, { useState } from "react";
import "./Research.css";

const Research = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleToggle = () => setOpenDropdown(!openDropdown);

  return (
    <section id="research" className="research-section">
      <div className="research-overlay">
        <h2 className="research-heading">Research</h2>
        <div className="research-cards">
          {/* Dropdown showing robot images */}
          <div className="research-card">
            <p
              className="dropdown-title"
              onClick={handleToggle}
              style={{ cursor: "pointer" }}
            >
              Veiw physical robot ▼
            </p>
            {openDropdown && (
              <div className="dropdown-content">
                <img
                  src="/IMG_4832.jpg"
                  alt="Physical robot 1"
                  className="dropdown-image"
                />
                <img
                  src="/Screenshot 2025-10-21 at 5.00.42 PM.png"
                  alt="Physical robot 2"
                  className="dropdown-image"
                />
                <img
                  src="Screenshot 2025-10-21 at 5.02.32 PM.png"
                  alt="Physical robot 3"
                  className="dropdown-image"
                />
              </div>
            )}
          </div>

          {/* Normal GitHub link */}
          <div className="research-card">
            <p>Code for robot</p>
            <a
              href="https://github.com/CyPhiLab/spirob_ctrl/tree/KALMAN"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;