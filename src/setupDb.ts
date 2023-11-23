import { Sequelize } from 'sequelize-typescript';
import { config } from '@root/config';
import Competition from '@features/competition/model/competition.schema';
import Team from '@features/team/model/team.schema';
import { CompetitionTeam } from '@global/associations/competitionTeam';
import Player from '@features/player/model/player.schema';

export default new Sequelize('app', '', '', {
  dialect: 'sqlite',
  storage: `./` + config.DB_STORAGE,
  models: [Competition, Team, CompetitionTeam, Player]
});
