import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Artist } from "./Artist";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    owner: string

    @Column()
    description: string

    @Column()
    name: string

    @Column()
    startDate: Date

    @Column()
    endDate: Date

    @Column()
    thumbImage: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => Artist, (artist) => artist.projects)
    @JoinTable()
    artists: Artist[]

}