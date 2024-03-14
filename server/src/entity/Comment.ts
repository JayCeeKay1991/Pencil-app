import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, UpdateDateColumn, ManyToMany, OneToMany, JoinTable } from "typeorm";
import { Artist } from "./Artist";
import { User } from "./User";
import { Project } from "./Project";
@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number 
    
    @Column({length: 200})
    content: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Artist)
    artist: Artist;

    @ManyToOne(() => Project)
    project: Project;
}

