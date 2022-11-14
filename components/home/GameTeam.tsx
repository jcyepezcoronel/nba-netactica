import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import { IGameScore, IGameTeam } from "../../shared/interfaces/Game"

export interface GameTeamProps {
  team: IGameTeam;
  score: IGameScore;
}

export const GameTeam = ({ team, score }: GameTeamProps) => {
  return (
    <Grid container spacing={3} direction="column">
      <Grid item xs={12}>
        <Typography align="center" variant="h4" fontWeight="bold">
          {team.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          <Image 
            src={team.logo}
            alt="team logo"
            height={350}
            width={300}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="h2" fontWeight="bold">
          {score.points}
        </Typography>
      </Grid>
    </Grid>
  )
}