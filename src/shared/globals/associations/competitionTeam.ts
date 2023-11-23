import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import Competition from '@features/competition/model/competition.schema';
import Team from '@features/team/model/team.schema';

@Table
export class CompetitionTeam extends Model {
  @ForeignKey(() => Competition)
  @Column
  competitionId!: number;

  @ForeignKey(() => Team)
  @Column
  teamId!: number;
}
