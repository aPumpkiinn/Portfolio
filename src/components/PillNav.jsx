import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './PillNav.css';

const PillNav = ({ logo, logoAlt, items = [], activeHref }) => {
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      items.forEach((_, i) => {
        const pill = circleRefs.current[i]?.parentElement;
        if (!pill) return;

        const { width } = pill.getBoundingClientRect();
        const tl = gsap.timeline({ paused: true });

        tl.to(circleRefs.current[i], {
          width: width * 1.8,
          height: width * 1.8,
          duration: 0.4,
          ease: "power2.out"
        });

        tlRefs.current[i] = tl;
      });
    });
    return () => ctx.revert();
  }, [items]);

  return (
    <div className="pill-nav-container">
      <nav className="pill-nav">
        
        {/* Le logo est le premier élément du flex, il se cale à gauche */}
        <Link to="/" className="pill-logo">
          <img src={logo} alt={logoAlt} />
        </Link>

        {/* Le menu est détaché du flux et se centre par rapport au container */}
        <div className="pill-nav-items desktop-only">
          <ul className="pill-list">
            {items.map((item, i) => (
              <li key={i} style={{ height: '100%' }}>
                <Link
                  to={item.href}
                  className={`pill ${activeHref === item.href ? 'is-active' : ''}`}
                  onMouseEnter={() => tlRefs.current[i]?.play()}
                  onMouseLeave={() => tlRefs.current[i]?.reverse()}
                >
                  <span className="hover-circle" ref={el => circleRefs.current[i] = el} />
                  <span className="pill-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default PillNav;