import { CompetitionAttributes } from '@features/competition/interfaces/competition.interface';
import Logger from 'bunyan';
import { config } from '@root/config';
import Competition from '@features/competition/model/competition.schema';
import Team from '@features/team/model/team.schema';
import { CompetitionTeam } from '@global/associations/competitionTeam';
import Player from '@features/player/model/player.schema';

//import Team from '@features/team/model/team.schema';

const log: Logger = config.createLogger('CompetitionService');

class CompetitionService {
  public async saveCompetition(competition: CompetitionAttributes, teams: Team[]): Promise<void> {
    try {
      Competition.findOne({
        where: {
          code: competition.code
        }
      })
        .then(async (res) => {
          let compValue: Competition = new Competition();
          let competitionId;
          if (res) {
            //competitionId = res.id;
            return;
          } else {
            compValue = await Competition.create({ ...competition });
            competitionId = compValue.dataValues.id;
          }

          for (const team of teams) {
            const existingTeam = await Team.findOne({
              where: {
                name: team.name
              }
            });
            let teamId;
            if (existingTeam?.id) {
              teamId = existingTeam.id;
            } else {
              const teamValue = await Team.create({ ...team });
              teamId = teamValue.dataValues.id;
            }

            await CompetitionTeam.create({ competitionId: competitionId, teamId: teamId });
            for (const player of team.players) {
              await Player.create({ ...player, teamId: teamId });
            }
          }
        })
        .catch((err) => {
          log.error(err);
        });
    } catch (err) {
      log.error(err);
    }
  }
}

export const competitionService: CompetitionService = new CompetitionService();
