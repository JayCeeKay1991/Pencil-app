import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Artist } from "./Artist";

@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToMany(() => Artist, (artist) => artist.skills)
    @JoinTable()
    artists: Artist[];
}