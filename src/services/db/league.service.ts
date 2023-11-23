import Logger from 'bunyan';
import { config } from '@root/config';
import { competitionService } from '@root/services/db/competition.service';

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
          this.getTeamsFromAPI(leagueCode, { name, code, areaName: area.name });
        })
        .catch((error) => {
          log.error(error);
        });
    } catch (error) {
      log.error(error);
    }
  }

  private async getTeamsFromAPI(leagueCode: string, competition: { code: string; areaName: string; name: string }) {
    try {
      const url = `${config.API_URL}/competitions/${leagueCode}/teams`;
      fetch(url, options)
        .then((res) => res.json())
        .then(async (data) => {
          if (data) {
            const { teams } = data;

            if (teams) {
              let teamArray = new Array<any>();

              teams.forEach((team: any) => {
                const coach = team.coach;
                const squad = team.squad;
                const players = new Array<any>();
                players.push({
                  name: coach.name,
                  position: '',
                  dateOfBirth: coach.dateOfBirth,
                  nationality: coach.nationality,
                  type: 'coach'
                });
                squad.forEach((player: any) => {
                  players.push({
                    name: player.name,
                    position: player.position,
                    dateOfBirth: player.dateOfBirth,
                    nationality: player.nationality,
                    type: 'player'
                  });
                });
                console.log(squad);
                console.log(coach);

                teamArray.push({
                  name: team.name,
                  tla: team.tla,
                  areaName: team.area.name,
                  address: team.address,
                  shortName: team.shortName,
                  players: players
                });
              });
              await competitionService.saveCompetition(competition, teamArray);
            }
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
