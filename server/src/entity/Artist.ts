import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, JoinColumn, JoinTable, OneToMany } from "typeorm";
import { Project } from "./Project";
import { Skill } from "./Skill";
import { Location } from "./Location";
import { Work } from "./Work";
import { Like } from "./Like";
import { Dislike } from "./Dislike";
import { Comment } from "./Comment";


@Entity()
export class Artist {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    profileImg: string

    @Column()
    rateAmount: number

    @Column()
    rateType: string

    @Column()
    rateCurrency: string

    @Column()
    mainSkill: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => Project, (project) => project.artists)
    projects: Project[]

    @ManyToMany(() => Skill, (skill) => skill.artists)
    skills: Skill[]

    @ManyToOne(() => Location, (location) => location.artists)
    location: Location

    @OneToMany(() => Work, (work) => work.artist)
    work: Work[]

    @OneToMany(() => Like, like => like.artist)
    likes: Like[];

    @OneToMany(() => Dislike, dislike => dislike.user)
    dislikes: Dislike[];

    @OneToMany(() => Comment, comment => comment.artist)
    comments: Comment[];
}