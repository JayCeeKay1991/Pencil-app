import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, JoinColumn, JoinTable } from "typeorm";
import { Project } from "./Project";
import { Skill } from "./Skill";
import { Location } from "./Location";

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
}