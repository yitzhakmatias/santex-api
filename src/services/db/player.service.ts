import Logger from 'bunyan';
import { config } from '@root/config';
import { PlayerAttributes } from '@features/player/interfaces/player.iterface';
import Player from '@features/player/model/player.schema';

const log: Logger = config.createLogger('TeamService');

class PlayerService {
  public async saveTeam(player: PlayerAttributes): Promise<void> {
    try {
      Player.findOne({
        where: {
          name: player.name
        }
      }).then((res) => {
        if (!res) {
          Player.create(player);
        }
      });
    } catch (err) {
      log.error(err);
    }
  }
}

export const playerService: PlayerService = new PlayerService();
