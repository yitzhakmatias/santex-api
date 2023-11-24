import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript';
import Team from '@features/team/model/team.schema';
import { CompetitionTeam } from '@global/associations/competitionTeam';
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
export default Competition;
