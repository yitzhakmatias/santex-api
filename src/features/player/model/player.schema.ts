import { DataTypes, Model } from 'sequelize';
import { PlayerAttributes } from '@root/features/player/interfaces/player.iterface';
interface PlayerCreationAttributes extends PlayerAttributes {}
import sequelize from '@root/setupDb';
class Player extends Model<PlayerAttributes, PlayerCreationAttributes> implements PlayerAttributes {
  public name!: string;
  public position!: string;
  public dateOfBirth!: Date;
  public nationality!: string;
}
Player.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Player'
  }
);

export default Player;
