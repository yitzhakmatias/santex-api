import { Application } from 'express';
import { movieRoutes } from '@movie//routes/movieRoutes';
import { ratingRoutes } from '@rating/routes/rating.route';
import { leagueRoutes } from '@features/league/routes/league.routes';
import { playerRoutes } from '@features/player/routes/player.routes';
import { teamRoutes } from '@features/team/routes/team.routes';

const BASE_PATH = '/api/v1';
export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, movieRoutes.routers());
    app.use(BASE_PATH, ratingRoutes.routers());
    app.use(BASE_PATH, leagueRoutes.routers());
    app.use(BASE_PATH, playerRoutes.routers());
    app.use(BASE_PATH, teamRoutes.routers());
  };
  routes();
};
