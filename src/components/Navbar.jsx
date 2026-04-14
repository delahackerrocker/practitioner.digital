import { useEffect, useState } from "react";
import { navigationItems, siteMeta } from "../data/siteContent";

export default function Navbar({ isProjectView, location, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.hash, location.pathname]);

  return (
    <header className="site-nav">
      <div className="shell site-nav__inner">
        <button className="site-brand" onClick={() => navigate("/")}>
          <span className="site-brand__title">{siteMeta.brand}</span>
          <span className="site-brand__meta">{siteMeta.owner} portfolio</span>
        </button>

        <button
          aria-expanded={menuOpen}
          className="nav-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className={`site-nav__links ${menuOpen ? "is-open" : ""}`}>
          {navigationItems.map((item) => (
            <button
              className="site-nav__link"
              key={item.label}
              onClick={() => navigate(item.target)}
              type="button"
            >
              {item.label}
            </button>
          ))}

          {isProjectView ? (
            <button
              className="site-nav__link site-nav__link--accent"
              onClick={() => navigate("/#work")}
              type="button"
            >
              Back to Work
            </button>
          ) : null}
        </nav>
      </div>
    </header>
  );
}

