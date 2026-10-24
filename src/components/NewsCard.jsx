import { ArrowUpRight } from "lucide-react";
export const dateLabel = (date) =>
  date
    ? new Intl.DateTimeFormat("uk-UA", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(date))
    : "З матеріалів факультету";
export default function NewsCard({ item }) {
  return (
    <article className="news-card">
      <a
        className="news-image"
        href={`#/news/${item.id}`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <img src={item.image} alt="" loading="lazy" />
        <span>{item.category}</span>
      </a>
      <div className="news-card-body">
        <small>{dateLabel(item.date)}</small>
        <h3>
          <a href={`#/news/${item.id}`}>{item.title}</a>
        </h3>
        <p>{item.excerpt}</p>
        <a className="text-link" href={`#/news/${item.id}`}>
          Читати новину <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}
