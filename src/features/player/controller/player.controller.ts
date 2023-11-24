import { Request, Response } from 'express';
import Competition from '@features/competition/model/competition.schema';
import Player from '@features/player/model/player.schema';
import Team from '@features/team/model/team.schema';
import HTTP_STATUS from 'http-status-codes';

export class PlayerController {
  public async getPlayersByLeagueCode(req: Request, res: Response): Promise<any> {
    try {
      const { leagueCode, teamName } = req.body;

      // Check if the league exists
      const competition = await Competition.findOne({
        where: { code: leagueCode },
        include: [{ model: Team, include: [Player] }]
      });

      if (!competition) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({ error: 'League not found' });
      }

      // Retrieve players based on league and optional team name
      let players = competition.teams.flatMap((team) => team.players);

      if (teamName) {
        const team = competition.teams.find((team) => team.name === teamName);
        // Filter players by team name if provided
        if (team) players = players.filter((player) => player.teamId === team.dataValues.id);
      }

      res.json(players);
    } catch (error) {
      console.error(error);
      res.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Internal Server Error' });
    }
  }
}
