import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, OneToMany, JoinTable } from "typeorm";
import { Artist } from "./Artist";
import { Like } from "./Like";
import { Dislike } from "./Dislike";
import { Comment } from "./Comment";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    owner: string

    @Column({ length: 200 })
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

    @OneToMany(() => Like, like => like.project)
    likes: Like[];

    @OneToMany(() => Dislike, dislike => dislike.user)
    dislikes: Dislike[];

    @OneToMany(() => Comment, comment => comment.project)
    comments: Comment[];
}