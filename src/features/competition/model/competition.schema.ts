import { DataTypes, Model } from 'sequelize';
//import { CompetitionAttributes } from '@root/features/competition/interfaces/competition.interface';
import sequelize from '@root/setupDb';
//interface CompetitionCreationAttributes extends Optional<CompetitionAttributes, 'code'> {}

class Competition extends Model {
  public name!: string;
  public code!: string;
  public areaName!: string;
}
Competition.init(
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
);

export default Competition;
