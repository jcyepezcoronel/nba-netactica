import { Grid, Typography, Avatar } from "@mui/material";
import moment from 'moment';
import { IGame } from "../../shared/interfaces/Game";
import { GameTeam } from "./GameTeam";

export interface GameProps {
  data: IGame
}

export const Game = ({ data }: GameProps) => {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item md={4}> 
          <Typography align="center" variant="h5">
            {moment(data.date.start).format('DD/MM/YYYY hh:mm a')}
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={3}>
        <Grid item md={5}>
          <GameTeam team={data.teams.home} score={data.scores.home} />
        </Grid>
        <Grid item md={2}>
          <Typography align="center" variant="h5">
            V.S
          </Typography>
          <Typography align="center" variant="subtitle1"fontStyle="italic">
            {data.league}
          </Typography>
        </Grid>
        <Grid item md={5}>
          <GameTeam team={data.teams.visitors} score={data.scores.visitors} />
        </Grid>
      </Grid>
    </div>
  );
};
