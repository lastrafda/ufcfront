import colvyCovington from "../assets/img/colvy-covington.jpeg";
import figueiredo from "../assets/img/figueiredo.jpeg";

export interface INew {
  alt: string;
  img: string;
  id?: string;
  headline: string;
  url: string;
}
const news: INew[] = [
  {
    headline:
      "UFC 257: Covington says ex-teammate Poirier will ‘get sparked in the first round’ by McGregor",
    img: colvyCovington,
    id: "img1",
    url: "",
    alt: "Colvy Covington calling for a title shot",
  },
  {
    headline: "The 2020 Awards: The Fighters Of The Year",
    img: figueiredo,
    id: "img2",
    url: "",
    alt: "Figueiredo after winning the belt",
  },
];

export const getNews = (): Promise<INew[]> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(news);
      }, 300);
    } catch (error) {
      reject("This will never happen");
    }
  });
};
