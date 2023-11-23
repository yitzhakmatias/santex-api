//import { Optional } from 'sequelize';
//import { CompetitionAttributes } from '@root/features/competition/interfaces/competition.interface';
//import sequelize from '@root/setupDb';
import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript';
import Team from '@features/team/model/team.schema';
import { CompetitionTeam } from '@global/associations/competitionTeam';
//import { CompetitionAttributes } from '@features/competition/interfaces/competition.interface';
//interface CompetitionCreationAttributes extends Optional<CompetitionAttributes, 'code'> {}
@Table
class Competition extends Model {
  @Column
  public name!: string;
  @Column
  public code!: string;
  @Column
  public areaName!: string;
  @BelongsToMany(() => Team, () => CompetitionTeam)
  teams!: Team[];
}

/*Competition.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    areaName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Competition'
  }
);*/

export default Competition;
