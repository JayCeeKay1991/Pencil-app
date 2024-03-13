import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Artist } from "./Artist";

@Entity()
export class Work {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 200})
    description: string

    @Column()
    image: string

    @ManyToOne(() => Artist, (artist) => artist.work)
    artist: Artist

}