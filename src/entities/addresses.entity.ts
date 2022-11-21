import {
  Entity,
  Column,
  PrimaryColumn
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("addresses")
export class Addresses {
  @PrimaryColumn("uuid")
  readonly id: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

  @Column()
  district: string;
  @Column()
  zipCode: string;
  @Column()
  number: string;
  @Column()
  city: string;
  @Column()
  state: string;
}
