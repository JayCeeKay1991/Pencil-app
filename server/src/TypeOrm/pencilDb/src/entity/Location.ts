import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Artist } from "./Artist";

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Artist, (artist) => artist.location)
    artists: Artist[]

}
