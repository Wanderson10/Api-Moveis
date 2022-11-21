import "dotenv/config"

import { DataSource } from "typeorm"


const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    } :
    {
        type: "postgres",
        host:"localhost",
        port: 5432,
        username:"postgres" ,
        password:"metroidhp48" ,
        database: "kaimoveis",
        logging: true,
        synchronize: false,
        entities: ['src/entities/*.ts'],
        migrations: ['src/migrations/*.ts']
    }
)

export default AppDataSource