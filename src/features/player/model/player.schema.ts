import { PlayerAttributes } from '@root/features/player/interfaces/player.iterface';
import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import Team from '@features/team/model/team.schema';
interface PlayerCreationAttributes extends PlayerAttributes {}
//import sequelize from '@root/setupDb';
@Table
class Player extends Model<PlayerAttributes, PlayerCreationAttributes> implements PlayerAttributes {
  @Column
  public name!: string;
  @Column
  public position!: string;
  @Column
  public dateOfBirth!: Date;
  @Column
  public nationality!: string;
  @Column
  public type!: 'player|coach';
  @ForeignKey(() => Team)
  @Column
  teamId!: number;

  @BelongsTo(() => Team)
  team!: Team;
}
/*Player.init(
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
);*/

export default Player;
