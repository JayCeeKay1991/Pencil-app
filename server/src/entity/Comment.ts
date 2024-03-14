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
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Artist)
    @JoinColumn({ name: 'artistId' })
    artist: Artist;

    @ManyToOne(() => Project)
    @JoinColumn({ name: 'projectId' })
    project: Project;
}

