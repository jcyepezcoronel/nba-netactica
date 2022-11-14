import { useMemo } from 'react';
import { Grid, Autocomplete, TextField } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm, Controller } from 'react-hook-form';
import { ITeam } from "../../shared/interfaces/Team";

export interface FormFilter {
  team?: number,
  season?: number,
}

export interface BaseFormProps {
  seasons: number[];
  teams: ITeam[];
  onSubmit: (data: FormFilter) => void;
  loading: boolean;
}

export const BaseForm = ({ onSubmit, seasons, teams, loading }: BaseFormProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      team: undefined,
      season: undefined,
    }
  });

  const teamsOptions = useMemo(() => {
    return teams.map((t) => ({
      label: t.name || t.nickname,
      value: t.id,
    })).sort((a, b) => {
      if (a < b) return -1;
      if ( a > b) return 1;
      return 0;
    })
  }, [teams]);

  const seasonsOptions = useMemo(() => {
    return seasons.map((s) => ({
      label: s.toString(),
      value: s,
    }))
  }, [seasons]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Grid item md={4}>
          <Controller 
            name="team"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete 
                options={teamsOptions}
                renderInput={(params) => <TextField {...params} label="Team"/>}
                onChange={(_e, op) => onChange(op?.value || undefined)}
                value={teamsOptions.find((op) => op.value === value)}
              />
            )}
          />
        </Grid>
        <Grid item md={4}>
          <Controller 
            name="season"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete 
                options={seasonsOptions}
                renderInput={(params) => <TextField {...params} label="Season"/>}
                onChange={(_e, op) => onChange(op?.value || undefined)}
                value={seasonsOptions.find((op) => op.value === value)}
              />
            )}
          />
        </Grid>
        <Grid item>
          <LoadingButton 
            variant="contained"
            loading={loading}
            type="submit" 
            style={{ width: 150 }}>
            submit
          </LoadingButton >
        </Grid>
      </Grid>
    </form>
  )
}