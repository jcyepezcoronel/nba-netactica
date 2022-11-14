import axios from 'axios';
import { NBA_API_KEY } from '../constants/env.contansts';

export const apiNBA = axios.create({
  baseURL: 'https://api-nba-v1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': NBA_API_KEY,
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
});