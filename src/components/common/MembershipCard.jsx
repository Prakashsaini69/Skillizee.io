import React from 'react';

const MembershipCard = () => {
  return (
    <>
      <style>{`
        .membership-card {
          --primary: #4d61ff;
          --primary-hover: #ff6d43;
          --secondary: #4d61ff;
          --secondary-hover: #5e70ff;
          --accent: #00e0b0;
          --text: #050505;
          --bg: #ffffff;
          --shadow-color: #000000;
          --pattern-color: #cfcfcf;

          position: relative;
          width: 100%;
          max-width: 22em;
          background: var(--bg);
          border: 0.35em solid var(--text);
          border-radius: 0.6em;
          box-shadow:
            0.7em 0.7em 0 var(--shadow-color),
            inset 0 0 0 0.15em rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
          font-family: ui-sans-serif, system-ui, sans-serif;
          transform-origin: center;
        }

        .membership-card:hover {
          transform: translate(-0.4em, -0.4em) scale(1.02);
          box-shadow: 1em 1em 0 var(--shadow-color);
        }

        .membership-card:hover .card-pattern-grid,
        .membership-card:hover .card-overlay-dots {
          opacity: 1;
        }

        .membership-card:active {
          transform: translate(0.1em, 0.1em) scale(0.98);
          box-shadow: 0.5em 0.5em 0 var(--shadow-color);
        }

        .membership-card::before {
          content: "";
          position: absolute;
          top: -1em;
          right: -1em;
          width: 4em;
          height: 4em;
          background: var(--accent);
          transform: rotate(45deg);
          z-index: 1;
        }

        .membership-card::after {
          content: "★";
          position: absolute;
          top: 0.4em;
          right: 0.4em;
          color: var(--text);
          font-size: 1.2em;
          font-weight: bold;
          z-index: 2;
        }

        .card-pattern-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 0.5em 0.5em;
          pointer-events: none;
          opacity: 0.5;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .card-overlay-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(var(--pattern-color) 1px, transparent 1px);
          background-size: 1em 1em;
          background-position: -0.5em -0.5em;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .bold-pattern {
          position: absolute;
          top: 0;
          right: 0;
          width: 6em;
          height: 6em;
          opacity: 0.15;
          pointer-events: none;
          z-index: 1;
        }

        .card-title-area {
          position: relative;
          padding: 1.4em;
          background: var(--primary);
          color: var(--bg);
          font-weight: 800;
          font-size: 1.2em;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 0.35em solid var(--text);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 2;
          overflow: hidden;
        }

        .card-title-area::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1) 0.5em,
            transparent 0.5em,
            transparent 1em
          );
          pointer-events: none;
          opacity: 0.3;
        }

        .card-tag {
          background: var(--bg);
          color: var(--text);
          font-size: 0.6em;
          font-weight: 800;
          padding: 0.4em 0.8em;
          border: 0.15em solid var(--text);
          border-radius: 0.3em;
          box-shadow: 0.2em 0.2em 0 var(--shadow-color);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transform: rotate(3deg);
          transition: all 0.3s ease;
        }

        .membership-card:hover .card-tag {
          transform: rotate(-2deg) scale(1.1);
          box-shadow: 0.25em 0.25em 0 var(--shadow-color);
        }

        .card-body {
          position: relative;
          padding: 1.5em;
          z-index: 2;
        }

        .card-description {
          margin-bottom: 1.5em;
          color: var(--text);
          font-size: 0.95em;
          line-height: 1.4;
          font-weight: 500;
        }

        .Competition-description{
          text-align: center;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.8em;
          margin-bottom: 1.5em;
        }

        @media (min-width: 640px) {
          .feature-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1em;
          }
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.6em;
          transition: transform 0.2s ease;
        }

        .feature-item:hover {
          transform: translateX(0.3em);
        }

        .feature-icon {
          width: 1.4em;
          height: 1.4em;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--secondary);
          border: 0.12em solid var(--text);
          border-radius: 0.3em;
          box-shadow: 0.2em 0.2em 0 rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }

        .feature-item:hover .feature-icon {
          background: var(--secondary-hover);
          transform: rotate(-5deg);
        }

        .feature-icon svg {
          width: 0.9em;
          height: 0.9em;
          fill: var(--bg);
        }

        .feature-text {
          font-size: 0.85em;
          font-weight: 600;
          color: var(--text);
        }

        .card-actions {
          display: flex;
          flex-direction: column;
          gap: 1em;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5em;
          padding-top: 1.2em;
          border-top: 0.15em dashed rgba(0, 0, 0, 0.15);
          position: relative;
        }

        @media (min-width: 640px) {
          .card-actions {
            flex-direction: row;
            gap: 0;
          }
        }

        .card-actions::before {
          content: "✂";
          position: absolute;
          top: -0.8em;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
          background: var(--bg);
          padding: 0 0.5em;
          font-size: 1em;
          color: rgba(0, 0, 0, 0.4);
        }

        .price {
          position: relative;
          font-size: 1.8em;
          font-weight: 800;
          color: var(--text);
          background: var(--bg);
        }

        .price::before {
          content: "";
          position: absolute;
          bottom: 0.15em;
          left: 0;
          width: 100%;
          height: 0.2em;
          background: var(--accent);
          z-index: -1;
          opacity: 0.5;
        }

        .price-currency {
          font-size: 0.6em;
          font-weight: 700;
          vertical-align: top;
          margin-right: 0.1em;
        }

        .price-period {
          display: block;
          font-size: 0.4em;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.6);
          margin-top: 0.2em;
        }

        .card-button {
          position: relative;
          background: var(--secondary);
          color: var(--bg);
          font-size: 0.9em;
          font-weight: 700;
          padding: 0.7em 1.2em;
          border: 0.2em solid var(--text);
          border-radius: 0.4em;
          box-shadow: 0.3em 0.3em 0 var(--shadow-color);
          cursor: pointer;
          transition: all 0.2s ease;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 100%
          );
          transition: left 0.6s ease;
        }

        .card-button:hover {
          background: var(--secondary-hover);
          transform: translate(-0.1em, -0.1em);
          box-shadow: 0.4em 0.4em 0 var(--shadow-color);
        }

        .card-button:hover::before {
          left: 100%;
        }

        .card-button:active {
          transform: translate(0.1em, 0.1em);
          box-shadow: 0.15em 0.15em 0 var(--shadow-color);
        }

        .dots-pattern {
          position: absolute;
          bottom: 2em;
          left: -2em;
          width: 8em;
          height: 4em;
          opacity: 0.3;
          transform: rotate(-10deg);
          pointer-events: none;
          z-index: 1;
        }

        .accent-shape {
          position: absolute;
          width: 2.5em;
          height: 2.5em;
          background: var(--secondary);
          border: 0.15em solid var(--text);
          border-radius: 0.3em;
          transform: rotate(45deg);
          bottom: -1.2em;
          right: 2em;
          z-index: 0;
          transition: transform 0.3s ease;
        }

        .membership-card:hover .accent-shape {
          transform: rotate(55deg) scale(1.1);
        }

        .stamp {
          position: absolute;
          bottom: 1.5em;
          left: 1.5em;
          width: 4em;
          height: 4em;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0.15em solid rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          transform: rotate(-15deg);
          opacity: 0.2;
          z-index: 1;
        }

        .stamp-text {
          font-size: 0.6em;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .corner-slice {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 1.5em;
          height: 1.5em;
          background: var(--bg);
          border-right: 0.25em solid var(--text);
          border-top: 0.25em solid var(--text);
          border-radius: 0 0.5em 0 0;
          z-index: 1;
        }
      `}</style>

      <div className="membership-card">
        <div className="card-pattern-grid"></div>
        <div className="card-overlay-dots"></div>

        <div className="bold-pattern">
          <svg viewBox="0 0 100 100">
            <path
              strokeDasharray="15 10"
              strokeWidth="10"
              stroke="#000"
              fill="none"
              d="M0,0 L100,0 L100,100 L0,100 Z"
            ></path>
          </svg>
        </div>

        <div className="card-title-area">
          <span>Skillizee Membership</span>
          <span className="card-tag">Premium</span>
        </div>

        <div className="card-body">
          <div className="card-description">
            Skillizee Membership unlocks full access to all courses, live sessions, and exclusive content — plus members-only exclusives.
          </div>

          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V4H18V20ZM8 6H10V18H8V6ZM14 6H16V18H14V6Z"
                  ></path>
                </svg>
              </div>
              <span className="feature-text">2 Short Courses</span>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM14 9H19.5L14 3.5V9ZM6 20V4H13V10H19V20H6ZM8 12H16V14H8V12ZM8 16H14V18H8V16Z"
                  ></path>
                </svg>
              </div>
              <span className="feature-text">3 Case Studies</span>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4ZM20 20H4V10H20V20Z"
                  ></path>
                </svg>
              </div>
              <span className="feature-text">2 Internships</span>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M9 21H15V19H9V21ZM12 2C8.1 2 5 5.1 5 9C5 11.4 6.3 13.5 8.3 14.6C8.6 15 9 15.6 9 16V17C9 17.6 9.4 18 10 18H14C14.6 18 15 17.6 15 17V16C15 15.6 15.4 15 15.7 14.6C17.7 13.5 19 11.4 19 9C19 5.1 15.9 2 12 2ZM12 4C14.8 4 17 6.2 17 9C17 10.7 16 12.3 14.4 13.1L13.6 13.5L13.3 14.3C13.1 14.7 13 15 13 15.4V16H11V15.4C11 15 10.9 14.7 10.7 14.3L10.4 13.5L9.6 13.1C8 12.3 7 10.7 7 9C7 6.2 9.2 4 12 4Z"
                  ></path>
                </svg>
              </div>
              <span className="feature-text">4 SBPLs</span>
            </div>
          </div>

          <div className="card-description Competition-description">
          National and International level Competition notifications.

          </div>


          <div className="card-actions">
            <div className="price">
              <span className="price-currency">₹</span>9,999
              <span className="price-period">per year</span>
            </div>

            <a
              className="card-button"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9OaT8wsxhBrjqzYwnc3dk3VmyBoiATh6uKl_17iHZLHUeaA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Now
            </a>
          </div>
        </div>

        <div className="dots-pattern">
          <svg viewBox="0 0 80 40">
            <circle fill="#000" r="3" cy="10" cx="10"></circle>
            <circle fill="#000" r="3" cy="10" cx="30"></circle>
            <circle fill="#000" r="3" cy="10" cx="50"></circle>
            <circle fill="#000" r="3" cy="10" cx="70"></circle>
            <circle fill="#000" r="3" cy="20" cx="20"></circle>
            <circle fill="#000" r="3" cy="20" cx="40"></circle>
            <circle fill="#000" r="3" cy="20" cx="60"></circle>
            <circle fill="#000" r="3" cy="30" cx="10"></circle>
            <circle fill="#000" r="3" cy="30" cx="30"></circle>
            <circle fill="#000" r="3" cy="30" cx="50"></circle>
            <circle fill="#000" r="3" cy="30" cx="70"></circle>
          </svg>
        </div>

        <div className="accent-shape"></div>
        <div className="corner-slice"></div>

        <div className="stamp">
          <span className="stamp-text">Approved</span>
        </div>
      </div>
    </>
  );
};

export default MembershipCard; 