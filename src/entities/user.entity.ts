import { Entity, Column, PrimaryColumn ,CreateDateColumn, UpdateDateColumn,OneToMany} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuidv4 } from "uuid";
import { ShedulesUserProperties } from "./shedules.user.properties.entities";

@Entity ('users')
export class User {

   

    @PrimaryColumn("uuid") 
    readonly id: string

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
   
    @Column({length : 100})
    name :string

    @Column({length : 60, unique : true })
    email:string

    @Column ({length : 140})
    @Exclude()
    password:string 

    @Column ()
    isAdm :boolean

    @Column ({default : true})
    isActive : boolean 

    @CreateDateColumn()
     createdAt: Date
   
    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => ShedulesUserProperties, (shedulesUserProperties) => shedulesUserProperties.user)
    schedules: ShedulesUserProperties[]
}