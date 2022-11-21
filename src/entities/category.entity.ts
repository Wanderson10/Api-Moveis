import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Properties } from "./property.entity";
@Entity ('category')
export class Category {

   

    @PrimaryGeneratedColumn("uuid") 
    readonly id: string

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
   
    @Column()
    name :string


    @OneToMany(() =>Properties , (property) => property.category)
    properties: Properties[]
    

}