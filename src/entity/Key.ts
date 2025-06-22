import { PrimaryColumn, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Key {
  @PrimaryColumn()
  key!: string;
}
