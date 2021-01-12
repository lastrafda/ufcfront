import React, { useEffect } from "react";
import New from "../../components/articles/New";
import { INew } from "../../services/news.service";

interface Props {
  news: Array<INew>;
}

const NewsSection: React.FunctionComponent<Props> = ({ news }) => {
  return (
    <section className="py-4" aria-label="News">
      <h2>News</h2>
      {news.map((n: INew) => (
        <New
          headline={n.headline}
          img={n.img}
          url={n.url}
          alt={n.alt}
          key={n.id}
        />
      ))}
    </section>
  );
};

export default NewsSection;
