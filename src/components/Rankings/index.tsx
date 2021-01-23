import React from "react";
import { IFighter } from "../../services/ufc.service";
interface Props {
  fighters: IFighter[];
  name: string;
}

const RankingList: React.FC<Props> = ({ fighters, name }) => {
  return (
    <article>
      <h2 className="py-4">{`# ${name}`}</h2>
      <ol>
        {fighters.map(({ fullname, description }, index) => (
          <li
            key={index}
            className="p-4 mb-2 justify-between border rounded-lg border-transparent bg-gray-700"
          >
            <div className="inline-flex w-full justify-between">
              <div>
                {index === 0 ? (
                  <span className="pr-3 pl-2 text-yellow-400 font-bold">C</span>
                ) : (
                  <span className="pr-4">{`#${index}`}</span>
                )}
                {fullname}
              </div>
              <div>{description.match(/\d+-\d+-\d+/)}</div>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
};

export default RankingList;
