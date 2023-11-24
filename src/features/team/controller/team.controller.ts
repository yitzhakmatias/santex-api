import { Request, Response } from 'express';
import Player from '@features/player/model/player.schema';
import Team from '@features/team/model/team.schema';
import HTTP_STATUS from 'http-status-codes';

export class TeamController {
  public async getTeams(req: Request, res: Response): Promise<Team | any> {
    try {
      const { teamName, includePlayers } = req.body;

      // Check if the team exists
      const team = await Team.findOne({
        where: { name: teamName },
        include: includePlayers === 'true' ? [Player] : []
      });

      if (!team) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Team not found' });
      }

      res.json(team);
    } catch (error) {
      console.error(error);
      res.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Internal Server Error' });
    }
  }
}
