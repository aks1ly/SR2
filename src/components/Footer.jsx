import { ArrowUpRight } from "lucide-react";
import { Brand } from "./Header";
import data from "../data/faculty.json";
export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Brand footer />
          <p>
            Знання, що відкривають можливості.
            <br />
            Спільнота, що створює майбутнє.
          </p>
        </div>
        <div>
          <h3>Досліджуй факультет</h3>
          {data.navigation.map((n) => (
            <a key={n.id} href={n.id === "home" ? "#/" : `#/${n.id}`}>
              {n.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Будь на зв’язку</h3>
          <a href={data.official} target="_blank" rel="noreferrer">
            Офіційний сайт ФІТ <ArrowUpRight size={15} />
          </a>
          {data.socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
              {s.name} <ArrowUpRight size={15} />
            </a>
          ))}
          <small>Посилання ведуть на платформи соціальних мереж.</small>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} ФІТ · КНУ імені Тараса Шевченка
        </span>
        <span>Навчальний проєкт · Самостійна робота № 2</span>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Нагору ↑
        </a>
      </div>
    </footer>
  );
}
