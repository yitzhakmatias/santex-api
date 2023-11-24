import express, { Router } from 'express';

import { TeamController } from '@features/team/controller/team.controller';

class TeamRoutes {
  private readonly router: Router;

  constructor() {
    this.router = express.Router();
  }
  public routers(): Router {
    this.router.get('/team', TeamController.prototype.getTeams);
    return this.router;
  }
}
export const teamRoutes: TeamRoutes = new TeamRoutes();
