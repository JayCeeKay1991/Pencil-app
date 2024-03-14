import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import { Artist } from "./Artist";
import { Project } from "./Project";
import { User } from "./User";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Artist)
    artist: Artist;

    @ManyToOne(() => Project)
    project: Project;
}
