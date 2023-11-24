import express, { Router } from 'express';
import { PlayerController } from '@features/player/controller/player.controller';

class PlayerRoutes {
  private readonly router: Router;

  constructor() {
    this.router = express.Router();
  }
  public routers(): Router {
    this.router.get('/players', PlayerController.prototype.getPlayersByLeagueCode);
    return this.router;
  }
}
export const playerRoutes: PlayerRoutes = new PlayerRoutes();
