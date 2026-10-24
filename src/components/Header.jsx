import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import data from "../data/faculty.json";
export function Brand({ footer = false }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href="#/"
      aria-label="ФІТ — головна"
    >
      <span className="brand-mark">
        ф<span>іт</span>
        <i />
      </span>
      <span className="brand-text">
        Факультет інформаційних
        <br />
        технологій<small>КНУ імені Тараса Шевченка</small>
      </span>
    </a>
  );
}
export default function Header({ page }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>{data.university}</span>
          <a href="https://knu.ua/" target="_blank" rel="noreferrer">
            Сайт університету <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      <header>
        <div className="container header-inner">
          <Brand />
          <button
            className="menu-toggle"
            aria-label={open ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? "open" : ""} aria-label="Головне меню">
            {data.navigation.map((n) => (
              <a
                key={n.id}
                className={page === n.id ? "active" : ""}
                href={n.id === "home" ? "#/" : `#/${n.id}`}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#/about#programs">
            Вступникам <ArrowUpRight size={17} />
          </a>
        </div>
      </header>
    </>
  );
}
