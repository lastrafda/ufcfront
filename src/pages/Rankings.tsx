import * as React from "react";
import RankingList from "../components/Rankings";
import ufcService, { IRankings } from "../services/ufc.service";
// TODO: USE CSS GRID IN ALL RESOLUTIONS
export const Rankings: React.FC = () => {
  const [rankings, setRankings] = React.useState<IRankings[]>([]);
  const fetchData = async () => {
    const data: IRankings[] = await ufcService.getRankings();
    setRankings(data);
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="bg-gray-800 p-4 text-white font-bold">
      <h1 className="text-yellow-500 text-xl font-extrabold py-4">Rankings</h1>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {rankings.length &&
          rankings.map(({ fighters, division }, index) => (
            <RankingList key={index} fighters={fighters} name={division} />
          ))}
        {/* <RankingList fighters={} name="asd" /> */}
      </section>
    </main>
  );
};
