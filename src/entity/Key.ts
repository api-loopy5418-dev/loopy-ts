import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Key {
  @PrimaryColumn({ name: "key" })
  key!: string;
}
