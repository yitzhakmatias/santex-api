//import { DataTypes } from 'sequelize';
//import { TeamAttributes } from '@root/features/team/interfaces/team.interface';

import { Table, Model, Column, BelongsToMany, HasMany } from 'sequelize-typescript';
import Competition from '@features/competition/model/competition.schema';
import { CompetitionTeam } from '@global/associations/competitionTeam';
import Player from '@features/player/model/player.schema';
//import Player from '@root/features/player/model/player.schema';
//interface TeamCreationAttributes extends TeamAttributes {}
@Table
class Team extends Model {
  @Column
  public name!: string;
  @Column
  public tla!: string;
  @Column
  public shortName!: string;
  @Column
  public areaName!: string;
  @Column
  public address!: string;
  /*@Column
  public type!: 'player' | 'coach';*/

  @BelongsToMany(() => Competition, () => CompetitionTeam)
  competitions!: Competition[];
  @HasMany(() => Player)
  players!: Player[];
}

export default Team;
