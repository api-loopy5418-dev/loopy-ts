import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ResponseID {
  @PrimaryGeneratedColumn()
  id!: number;
}
