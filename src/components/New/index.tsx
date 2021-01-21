import React from "react";

interface Props {
  alt: string;
  img: string;
  headline: string;
  url: string;
}

const New: React.FC<Props> = ({ alt, headline, img, url }) => {
  return (
    <article>
      <a href={url} className="text-yellow-500 py-4 block hover:underline">
        {headline}
      </a>
      <img src={img} alt={alt} />
    </article>
  );
};

export default New;
