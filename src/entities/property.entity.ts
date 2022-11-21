
import { Entity, Column, PrimaryColumn ,CreateDateColumn, PrimaryGeneratedColumn,UpdateDateColumn,ManyToOne,OneToMany, OneToOne,JoinColumn} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Category } from "./category.entity";
import { Addresses } from "./addresses.entity";
import { ShedulesUserProperties } from "./shedules.user.properties.entities";

@Entity ('properties')
export class Properties{

   

    @PrimaryGeneratedColumn("uuid") 
    readonly id: string

   
   
    @Column({default : false})
    sold :boolean

    @Column({type:"decimal",precision:12,scale:2})
    value : Number

    @Column("int")
    size : Number

    @CreateDateColumn()
     createdAt: Date
   
    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Category)
    category: Category

    @OneToOne(() => Addresses, {eager : true})
    @JoinColumn()
    address: Addresses

  @OneToMany(() => ShedulesUserProperties, (schedules) => schedules.properties)
    schedules: ShedulesUserProperties[]


}