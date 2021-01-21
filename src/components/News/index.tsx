import React from "react";

import { INew } from "../../services/news.service";
import New from "../New";

interface Props {
  news: Array<INew>;
}

const News: React.FunctionComponent<Props> = ({ news }) => {
  return (
    <section className="py-4" aria-label="News">
      <h2># News</h2>
      {/* TODO: maybe I should use composition (child) and a title prop */}
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

export default News;
