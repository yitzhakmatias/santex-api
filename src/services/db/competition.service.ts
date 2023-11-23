import { CompetitionAttributes } from '@features/competition/interfaces/competition.interface';
import Logger from 'bunyan';
import { config } from '@root/config';
import Competition from '@features/competition/model/competition.schema';
//import Team from '@features/team/model/team.schema';

const log: Logger = config.createLogger('CompetitionService');

class CompetitionService {
  public async saveCompetition(competition: CompetitionAttributes): Promise<void> {
    try {
      Competition.findOne({
        where: {
          code: competition.code
        }
      })
        .then(async (res) => {
          const team = {
            name: 'test',
            tla: '123',
            areaName: 'asdfasd',
            address: 'asdfasd',
            shortName: 'asdfasdfsad',
            type: 'player'
          };
          const team2 = {
            name: 'test',
            tla: '1234',
            areaName: 'asdfasd',
            address: 'asdfasd',
            shortName: 'asdfasdfsad',
            type: 'player'
          };
          if (!res) {
            await Competition.create(
              { ...competition, teams: [{ ...team }, { ...team2 }] },
              {
                include: 'teams'
              }
            );
            /*const createdCompetition = await Competition.create(
              { ...competition },
              {
                include: ['teams']
              }
            );*/

            // Add teams to the created competition
            //await createdCompetition.addTeams([team, team2]);
            /* competition1.set('teams', { team2 });
            await competition1.save();*/
            // team1.addCompetition(competition1);
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
