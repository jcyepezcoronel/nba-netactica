export interface ITeamLeague {
  conference: string;
  division: string;
}

export interface ITeamLeagues {
  standard: ITeamLeague;
  vegas: ITeamLeague;
  utah: ITeamLeague;
  sacramento: ITeamLeague;
}

export interface ITeam {
  id: number;
  name: string;
  nickname: string;
  code: string;
  city: string;
  logo: string;
  allStar: boolean;
  nbaFranchise: boolean;
  leagues: ITeamLeagues
}