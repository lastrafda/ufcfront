import rankingsJson from "./rankings.json";

interface IPromo {
  label: string;
  value: number;
}

interface IPercentageDetail {
  value: number;
  percentage: string;
}

interface ISigStrikesByPosition {
  standing: IPercentageDetail;
  clinch: IPercentageDetail;
  ground: IPercentageDetail;
}

interface ISigStrikeByTarget {
  head: IPercentageDetail;
  body: IPercentageDetail;
  leg: IPercentageDetail;
}

interface IWinByWay {
  koTko: IPercentageDetail;
  dec: IPercentageDetail;
  sub: IPercentageDetail;
}

interface IStats {
  sigStrikesAttempted: number;
  sigStrikesLanded: number;
  takedownsAttempted: number;
  takedownsLanded: number;
  sigStrikesLandedPerMin: number;
  sigStrikesAbsorbedPerMin: number;
  takedownAvgPerFifteen: number;
  submissionAvgPerFifteen: number;
  sigStrikeDefence: string;
  takedownDefence: string;
  knockdownRatio: number;
  avgFightTime: string;
  sigStrikesByPosition: ISigStrikesByPosition;
  sigStrikeByTarget: ISigStrikeByTarget;
  winByWay: IWinByWay;
}

export interface IFighter {
  nickname: string;
  fullname: string;
  description: string;
  promoted: IPromo[];
  stats: IStats;
}

export interface IRankings {
  division: string;
  fighters: IFighter[];
}

const rankings: IRankings[] = rankingsJson;

export const getRankings = (): Promise<IRankings[]> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(rankings);
      });
    } catch (error) {
      reject("This will never happen");
    }
  });
};
