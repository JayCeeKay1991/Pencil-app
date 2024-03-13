import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import { Artist } from "./Artist";
import { Project } from "./Project";
import { User } from "./User";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    artistId: number;

    @PrimaryColumn()
    projectId: number;

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
