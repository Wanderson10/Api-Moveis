import { Entity, Column, PrimaryColumn ,ManyToOne} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { User } from "./user.entity";
import { Properties } from "./property.entity";

@Entity ('shedules_user_properties')
export class ShedulesUserProperties {

   

    @PrimaryColumn("uuid") 
    readonly id: string

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
   
    @Column("date")
    date :string

    @Column("time")
    hour:string

    @ManyToOne(() => User, (user) => user.schedules)
    user: User

    @ManyToOne(() => Properties, (properties) => properties.schedules)
    properties: Properties
}