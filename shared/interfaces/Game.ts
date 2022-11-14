export interface IGameDate {
  start: string;
  end: string;
  duration: string;
}

export interface IGameStatus {
  clock: null;
  halftime: boolean;
  short: number;
  long: string;
}

export interface IGamePeriods {
  current: number;
  total: number;
  endOfPeriod: boolean;
}

export interface IGameArena {
  name: string;
  city: string;
  state: string;
  country: string | null;
}

export interface IGameTeam {
  id: number;
  name: string;
  nickname: string;
  code: string;
  logo: string;
}

export interface IGameTeams {
  visitors: IGameTeam;
  home: IGameTeam;
}

export interface IGamgeScoreSeries {
  win: number;
  loss: number;
}

export interface IGameScore {
  win: number;
  loss: number;
  series: IGamgeScoreSeries;
  linescore: string[];
  points: number;
}

export interface IGameScores {
  visitors: IGameScore;
  home: IGameScore;
}

export interface IGame {
  id: number;
  league: string;
  season: number;
  date: IGameDate
  stage: number;
  status: IGameStatus;
  periods: IGamePeriods;
  arena: IGameArena;
  teams: IGameTeams;
  scores: IGameScores;
  officials: string[];
  timesTied: number;
  leadChanges: number;
  nugget: null;
}