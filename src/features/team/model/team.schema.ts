import { DataTypes, Model } from 'sequelize';
//import { TeamAttributes } from '@root/features/team/interfaces/team.interface';

import sequelize from '@root/setupDb';
//import Player from '@root/features/player/model/player.schema';
//interface TeamCreationAttributes extends TeamAttributes {}
class Team extends Model {
  public name!: string;
  public tla!: string;
  public shortName!: string;
  public areaName!: string;
  public address!: string;
  public type!: 'player' | 'coach';
}
Team.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tla: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    shortName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    areaName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('player', 'coach'),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Team'
  }
);

export default Team;
