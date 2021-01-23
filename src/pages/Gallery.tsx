import * as React from "react";
import conorMcGregor from "../assets/img/conor-mcGregor.jpeg";
import dustinPoirier from "../assets/img/dustin-poirier2.jpg";
import oliveiraVsLee from "../assets/img/oliveira-vs-lee.jpg";
import fightIsland from "../assets/img/fight-island.jpg";
import espnUfc from "../assets/img/espn-ufc.jpg";
import weiliZhang from "../assets/img/weili-zhang.jpg";
import amandaNunesChampChamp from "../assets/img/amanda-nunes-champ-champ.jpg";
import jonJones from "../assets/img/jon-jones.jpg";
import jorgeMasvidal from "../assets/img/jorge-masvidal.png";
import israelAdesanya from "../assets/img/israel-adesanya.jpg";
import janBlachowicz from "../assets/img/jan-blachowicz.jpg";
import janBlachowicz2 from "../assets/img/jan-blachowicz2.jpg";

const Gallery: React.FC = () => {
  return (
    <main className="bg-gray-800 py-4 px-2 text-white font-bold h-full">
      {/* <h1 className="text-yellow-500 text-xl font-extrabold py-4">Gallery</h1> */}
      <div className="h-full grid grid-cols-3 grid-rows-5 gap-1">
        <img
          className="rounded-lg shadow-md col-span-2 h-full p-0 w-full z-10"
          src={conorMcGregor}
          alt="Conor McGregor posing for the cameras."
        />
        <img
          className="rounded-lg shadow-md row-span-2 h-full p-0 bg-cover w-full"
          src={dustinPoirier}
          alt="Dustin Poirier posing in the weight-ins."
        />
        <img
          className="rounded-lg shadow-md h-full p-0 bg-cover w-full"
          src={oliveiraVsLee}
          alt="Charles oliveira with Kevin Lee exchanging strikes."
        />
        <img
          className="rounded-lg shadow-md h-full p-0 bg-contain w-full"
          src={fightIsland}
          alt="Fight Island promo, a cage in the beach."
        />
        <img
          className="rounded-lg shadow-md h-full p-0 bg-contain w-full"
          src={weiliZhang}
          alt="Weili Zhang getting the Belt."
        />
        <img
          className="rounded-lg shadow-md h-full p-0 bg-contain w-full"
          src={espnUfc}
          alt="Poster about the UFC - ESPN deal."
        />

        <img
          className="rounded-lg shadow-md h-full p-0 bg-contain w-full"
          src={amandaNunesChampChamp}
          alt="Amanda nunes posing to the camera with her 2 belts."
        />
        <img
          className="rounded-lg shadow-md h-full p-0 bg-contain w-full"
          src={jorgeMasvidal}
          alt="Jorge Masvidal smiling dressed as Tony Montana(Al Pacino)."
        />
        <img
          className="rounded-lg shadow-md h-full col-span-2 p-0 bg-contain w-full"
          src={jonJones}
          alt="Jon Jones after a fight 'I\'m number one'"
        />
        <img
          className="rounded-lg shadow-md h-full col-span-2 p-0 bg-contain w-full"
          src={israelAdesanya}
          alt="Israel Adesanya taunting his opponent."
        />
        <img
          className="rounded-lg shadow-md h-full p-0 bg-contain w-full"
          src={janBlachowicz2}
          alt="Jan Blachowicz posing after winning the belt."
        />
      </div>
    </main>
  );
};

export default Gallery;
