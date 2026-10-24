import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  ShieldCheck,
  Network,
  Radio,
  Search,
  ChevronRight,
  BookOpen,
  GraduationCap,
  FlaskConical,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsCard, { dateLabel } from "./components/NewsCard";
import data from "./data/faculty.json";
import news from "./data/news.json";
const icons = {
  code: Code2,
  cpu: Cpu,
  shield: ShieldCheck,
  network: Network,
  radio: Radio,
};
function SectionTitle({ eyebrow, title, description, children }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  );
}
function Programs() {
  return (
    <section className="section programs" id="programs">
      <div className="container">
        <SectionTitle
          eyebrow="ЗНАЙДИ СВІЙ НАПРЯМ"
          title="Твоя освіта. Твій вибір."
          description="П’ять спеціальностей — безліч можливостей змінювати майбутнє."
        />
        <div className="program-grid">
          {data.programs.map((p) => {
            const Icon = icons[p.icon];
            return (
              <article className="program-card" key={p.code}>
                <div className="program-top">
                  <Icon size={26} strokeWidth={1.5} />
                  <span>{p.code}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <span className="program-level">Бакалаврат · Магістратура</span>
              </article>
            );
          })}
        </div>
        <p className="program-note">
          Продовжуй науковий шлях в аспірантурі.{" "}
          <a href={data.official} target="_blank" rel="noreferrer">
            Умови вступу на офіційному сайті ↗
          </a>
        </p>
      </div>
    </section>
  );
}
function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <i /> {data.hero.eyebrow}
            </span>
            <h1>
              {data.hero.title}
              <br />
              <em>{data.hero.accent}</em>
            </h1>
            <p>{data.hero.description}</p>
            <div className="hero-buttons">
              <a className="button" href="#/about#programs">
                Обери свою спеціальність <ArrowUpRight size={19} />
              </a>
              <a className="button button-light" href="#/about">
                Про факультет <ArrowRight size={18} />
              </a>
            </div>
            <div className="hero-stats">
              {data.stats.map((s) => (
                <div key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="/images/hero.svg"
              alt="Авторська ілюстрація університетської архітектури"
            />
            <span className="image-label">
              КИЇВ · УКРАЇНА <span>50°26′ N 30°30′ E</span>
            </span>
            <div className="hero-caption">
              <span className="caption-icon">
                <GraduationCap size={26} />
              </span>
              <div>
                <strong>
                  Сильні традиції.
                  <br />
                  Нові можливості.
                </strong>
                <span>Частина великої університетської родини</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ticker">
        <div className="container">
          <span>ОСВІТА ДЛЯ МАЙБУТНЬОГО</span>
          <b>✳</b>
          <span>ІННОВАЦІЇ ЧЕРЕЗ ЗНАННЯ</span>
          <b>✳</b>
          <span>СПІЛЬНОТА ОДНОДУМЦІВ</span>
          <b>✳</b>
          <span>ФІТ КНУ</span>
        </div>
      </div>
      <section className="section">
        <div className="container about-preview">
          <div>
            <span className="eyebrow">ЗНАЙОМСЯ, ЦЕ ФІТ</span>
            <h2>
              Молодий факультет.
              <br />
              Великі амбіції.
            </h2>
          </div>
          <div>
            <p>{data.about.intro}</p>
            <p>
              Ми об’єднуємо фундаментальну освіту, сучасні технології та людей,
              які прагнуть більшого.
            </p>
            <a className="text-link" href="#/about">
              Дізнатися про нас <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <Programs />
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="ЖИТТЯ ФАКУЛЬТЕТУ" title="У центрі подій">
            <a className="text-link" href="#/news">
              Усі новини <ArrowRight size={18} />
            </a>
          </SectionTitle>
          <div className="news-grid">
            {news.map((n) => (
              <NewsCard key={n.id} item={n} />
            ))}
          </div>
        </div>
      </section>
      <JoinBanner />
    </>
  );
}
function JoinBanner() {
  return (
    <section className="join-section">
      <div className="container join-inner">
        <div>
          <span className="eyebrow">НАСТУПНИЙ КРОК — ЗА ТОБОЮ</span>
          <h2>Майбутнє потребує твоїх ідей.</h2>
          <p>Знайди свій напрям у світі інформаційних технологій.</p>
        </div>
        <a className="button button-white" href="#/about#programs">
          Відкрити можливості <ArrowUpRight size={19} />
        </a>
      </div>
    </section>
  );
}
function PageHero({ label, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs">
          <a href="#/">Головна</a>
          <ChevronRight size={14} />
          <span>{label}</span>
        </div>
        <span className="eyebrow">ФАКУЛЬТЕТ ІНФОРМАЦІЙНИХ ТЕХНОЛОГІЙ</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
function About() {
  return (
    <>
      <PageHero
        label="Про факультет"
        title="Місце, де ідеї стають можливостями."
        text={data.about.intro}
      />
      <section className="section">
        <div className="container mission-grid">
          <div className="mission-card">
            <span className="eyebrow">НАША МІСІЯ</span>
            <h2>
              Готувати людей,
              <br />
              які рухають світ уперед.
            </h2>
            <p>{data.about.mission}</p>
          </div>
          <div className="mission-aside">
            <span className="eyebrow">НАША МЕТА</span>
            <h3>Бути серед лідерів ІТ-освіти</h3>
            <p>{data.about.goal}</p>
            <hr />
            <h3>Фундаментальність + практика</h3>
            <p>{data.about.approach}</p>
          </div>
        </div>
      </section>
      <Programs />
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="ЗНАННЯ БЕЗ КОРДОНІВ"
            title="Що ти вивчатимеш"
          />
          <div className="fields-grid">
            {data.about.fields.map((f, i) => (
              <div className="field" key={f}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{f}</h3>
              </div>
            ))}
          </div>
          <div className="education-path">
            {[
              [BookOpen, "Бакалаврат", "Перший крок у професію"],
              [GraduationCap, "Магістратура", "Поглиблення експертизи"],
              [FlaskConical, "Аспірантура", "Власні наукові відкриття"],
            ].map(([Icon, title, text]) => (
              <div key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <JoinBanner />
    </>
  );
}
function News() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Усі новини");
  const categories = ["Усі новини", ...new Set(news.map((n) => n.category))];
  const filtered = news.filter(
    (n) =>
      (category === "Усі новини" || n.category === category) &&
      `${n.title} ${n.excerpt}`
        .toLocaleLowerCase("uk")
        .includes(query.toLocaleLowerCase("uk")),
  );
  return (
    <>
      <PageHero
        label="Новини"
        title="Факультет у русі."
        text="Події, досягнення та важливі оголошення нашої спільноти."
      />
      <section className="section">
        <div className="container">
          <div className="news-toolbar">
            <div className="filters" aria-label="Категорії новин">
              {categories.map((c) => (
                <button
                  key={c}
                  className={c === category ? "selected" : ""}
                  onClick={() => setCategory(c)}
                  aria-pressed={c === category}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="search">
              <Search size={18} />
              <input
                type="search"
                placeholder="Знайти новину…"
                aria-label="Знайти новину"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>
          <p className="results-count">
            Знайдено публікацій: {filtered.length}
          </p>
          <div className="news-grid">
            {filtered.map((n) => (
              <NewsCard key={n.id} item={n} />
            ))}
          </div>
          {!filtered.length && (
            <div className="empty-state">
              <Search size={36} />
              <h2>Нічого не знайдено</h2>
              <p>Спробуй інший запит або обери всі категорії.</p>
              <button
                className="button"
                onClick={() => {
                  setQuery("");
                  setCategory("Усі новини");
                }}
              >
                Скинути фільтри
              </button>
            </div>
          )}
          <p className="source-note">
            Повідомлення відтворено за наданими матеріалами. Актуальність
            уточнюйте на{" "}
            <a href={data.official} target="_blank" rel="noreferrer">
              офіційному сайті факультету ↗
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
function Article({ id }) {
  const item = news.find((n) => n.id === id);
  if (!item) return <NotFound />;
  return (
    <>
      <PageHero
        label="Новини"
        title={item.title}
        text={`${item.category} · ${dateLabel(item.date)}`}
      />
      <article className="container article">
        <img src={item.image} alt="Тематична ілюстрація до публікації" />
        {item.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <a
          className="text-link"
          href={data.official}
          target="_blank"
          rel="noreferrer"
        >
          Офіційне джерело <ArrowUpRight size={18} />
        </a>
        <hr />
        <a className="text-link" href="#/news">
          ← Повернутися до новин
        </a>
      </article>
    </>
  );
}
function History() {
  return (
    <>
      <PageHero
        label="Історія"
        title="Традиції університету. Енергія нового покоління."
        text="Від заснування у 2013 році — до підготовки фахівців, які формують цифрове суспільство."
      />
      <section className="section">
        <div className="container history-layout">
          <aside>
            <img
              src="/images/hero.svg"
              alt="Ілюстрація університетської будівлі"
            />
            <div className="history-quote">
              <span>20.11.2013</span>
              <h2>
                Початок
                <br />
                нашої історії.
              </h2>
              <p>Дата створення факультету інформаційних технологій КНУ.</p>
            </div>
          </aside>
          <div className="timeline">
            {data.history.map((h, i) => (
              <article key={h.year}>
                <span className="timeline-dot" />
                <span className="eyebrow">{h.year}</span>
                <h2>{h.title}</h2>
                <p>{h.text}</p>
                <small>0{i + 1} / ІСТОРІЯ ФІТ</small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <JoinBanner />
    </>
  );
}
function NotFound() {
  return (
    <section className="container empty-state">
      <span className="eyebrow">404</span>
      <h1>Сторінку не знайдено</h1>
      <a className="button" href="#/">
        На головну <ArrowRight size={18} />
      </a>
    </section>
  );
}
function readRoute() {
  return (window.location.hash.slice(1) || "/").split("#")[0];
}
export default function App() {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const update = () => {
      setRoute(readRoute());
      window.scrollTo(0, 0);
      if (window.location.hash.endsWith("#programs"))
        setTimeout(
          () =>
            document
              .getElementById("programs")
              ?.scrollIntoView({ behavior: "smooth" }),
          80,
        );
    };
    window.addEventListener("hashchange", update);
    update();
    return () => window.removeEventListener("hashchange", update);
  }, []);
  const page = route.split("/")[1] || "home";
  useEffect(() => {
    document.title = `${data.navigation.find((n) => n.id === page)?.label || "Новини"} — ФІТ КНУ`;
  }, [page]);
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Перейти до вмісту
      </a>
      <Header page={page} />
      <main id="main" tabIndex={-1}>
        {route === "/" ? (
          <Home />
        ) : route === "/about" ? (
          <About />
        ) : route === "/news" ? (
          <News />
        ) : route.startsWith("/news/") ? (
          <Article id={route.split("/")[2]} />
        ) : route === "/history" ? (
          <History />
        ) : (
          <NotFound />
        )}
      </main>
      <Footer />
    </>
  );
}
