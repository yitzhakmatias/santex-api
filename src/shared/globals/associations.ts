import sequelize from '@root/setupDb';
import { DataTypes } from 'sequelize';
import Team from '@features/team/model/team.schema';
import Competition from '@features/competition/model/competition.schema';
import Player from '@features/player/model/player.schema';

const CompetitionTeams = sequelize.define(
  'CompetitionTeams',
  {
    selfGranted: DataTypes.BOOLEAN
  },
  { timestamps: false }
);

Team.hasMany(Player);
Player.belongsTo(Team);

Competition.belongsToMany(Team, { as: 'teams', through: CompetitionTeams });
Team.belongsToMany(Competition, { as: 'competitions', through: CompetitionTeams });
