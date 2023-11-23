import { Request, Response } from 'express';
import { leagueService } from '@root/services/db/league.service';
import HTTP_STATUS from 'http-status-codes';

export class LeagueController {
  public async getLeaguesByCode(req: Request, res: Response): Promise<any> {
    try {
      const { leagueCode } = req.params;
      leagueService.getLeagueFromAPI(leagueCode).then(() => {
        res.status(HTTP_STATUS.OK).json({ message: 'League was added !!' });
      });
    } catch (error) {
      res.status(HTTP_STATUS.EXPECTATION_FAILED).json({ message: 'League was not found !!' });
    }
  }
}
