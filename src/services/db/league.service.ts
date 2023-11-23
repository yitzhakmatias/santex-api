import Logger from 'bunyan';
import { config } from '@root/config';
import { competitionService } from '@root/services/db/competition.service';
import teamSchema from '@features/team/model/team.schema';

const log: Logger = config.createLogger('LeagueService');

const options = {
  method: 'GET',
  headers: {
    'X-Auth-Token': config.API_KEY
  }
};

class LeagueService {
  public async getLeagueFromAPI(leagueCode: string): Promise<any> {
    try {
      const url = `${config.API_URL}/competitions/${leagueCode}`;

      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          const { name, code, area } = data;
          competitionService.saveCompetition({ name, code, areaName: area.name }).then(() => {
            this.getTeamsFromAPI(leagueCode);
          });
        })
        .catch((error) => {
          log.error(error);
        });
    } catch (error) {
      log.error(error);
    }
  }

  private async getTeamsFromAPI(leagueCode: string) {
    try {
      const url = `${config.API_URL}/competitions/${leagueCode}/teams`;
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            const { teams } = data;
            teams.forEach((team: teamSchema) => {
              console.log(team);
            });
          }
        })
        .catch((error) => {
          log.error(error);
        });
    } catch (error) {
      log.error(error);
    }
  }
}

export const leagueService: LeagueService = new LeagueService();
