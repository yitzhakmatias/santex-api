import Logger from 'bunyan';
import { config } from '@root/config';
import { TeamAttributes } from '@features/team/interfaces/team.interface';
import Team from '@features/team/model/team.schema';

const log: Logger = config.createLogger('TeamService');

class TeamService {
  public async saveTeam(team: TeamAttributes): Promise<void> {
    try {
      Team.findOne({
        where: {
          tla: team.tla
        }
      }).then((res) => {
        if (!res) {
          Team.create(team);
        }
      });
    } catch (err) {
      log.error(err);
    }
  }
}

export const teamService: TeamService = new TeamService();
