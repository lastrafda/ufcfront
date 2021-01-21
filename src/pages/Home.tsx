import * as React from "react";
import piorierMcGregorPoster from "../assets/img/poirier-mcgregor2-2.jpeg";
import News from "../components/News";

import { getNews, INew } from "../services/news.service";

export const Home: React.FC = () => {
  const [news, setNews] = React.useState<INew[]>([]);
  React.useEffect(() => {
    getNews().then((news: INew[]) => {
      setNews(news);
    });
  }, []);
  return (
    <main className="bg-gray-800 p-4 text-white font-bold">
      <article>
        <span className="text-sm"># Next Event</span>
        <h1 className="text-yellow-500 text-xl font-extrabold py-4">
          UFC 257 - 24th January
        </h1>
        <img
          src={piorierMcGregorPoster}
          alt="Dustin Poirier vs Connor McGregor 2 Poster"
          className="w-full"
        />
      </article>
      <News news={news} />
    </main>
  );
};
