import express, { Router } from 'express';

import { LeagueController } from '@features/league/controller/league.controller';

class LeagueRoutes {
  private readonly router: Router;

  constructor() {
    this.router = express.Router();
  }
  public routers(): Router {
    this.router.get('/importLeague/:leagueCode', LeagueController.prototype.getLeaguesByCode);
    return this.router;
  }
}
export const leagueRoutes: LeagueRoutes = new LeagueRoutes();
