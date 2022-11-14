import { useEffect, useState, useCallback, useMemo } from 'react';
import { Container, Grid, Toolbar, CircularProgress, Divider } from '@mui/material';
import { apiNBA } from '../shared/api/nba.api';
import { BaseForm, FormFilter } from '../components/home/BaseForm';
import { ITeam } from '../shared/interfaces/Team';
import { Game } from '../components/home/Game';
import { IGame } from '../shared/interfaces/Game';

interface HomeProps {
  seasons: number[];
  teams: ITeam[];
}

export default function Home({ seasons, teams }: HomeProps) {
  const [games, setGames] = useState<IGame[]>([]);
  const [loadingGames, setLoadingGames] = useState(false);
  const [formFilter, setFormFilter] = useState<FormFilter>({
    team: undefined,
    season: undefined,
  });

  const fetchGames = useCallback(() => {
    if(formFilter.team && formFilter.season) {
      setLoadingGames(true);

      const queryParams = new URLSearchParams({
        team: formFilter.team.toString(),
        season: formFilter.season.toString()
      }).toString();

      apiNBA.get(`/games?${queryParams}`)
        .then((res) => setGames(res.data.response))
        .catch((err) => console.error(err))
        .finally(() => setLoadingGames(false));
      
    }
  }, [formFilter]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  const content = useMemo(() => {
    return (
      <Grid container spacing={5} direction="column">
        {games.map((game, i) => (
          <Grid item key={game.id} xs={12}>
            <Game data={game} />
            <br />
            {(i + 1) < games.length ? <Divider /> : null}
          </Grid>
        ))}
      </Grid>
    )
  }, [games])

  return (
    <div>
      <Toolbar />
      <Container component="main" maxWidth="md">
        <BaseForm 
          teams={teams} 
          seasons={seasons} 
          onSubmit={(data) => setFormFilter(data)} 
          loading={loadingGames}
        />
        <br /><br />
        {content}
      </Container>
    </div>
  );
}

export async function getStaticProps() {

  const [resTeams, resSeasons] = await Promise.all([
    apiNBA.get('teams'),
    apiNBA.get('seasons'),
  ]);

  const teams = resTeams.data.response
  const seasons = resSeasons.data.response

  return {
    props: {
      teams,
      seasons
    },
  }
}
