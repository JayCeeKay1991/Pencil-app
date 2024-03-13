import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Like } from './Like';
import { Dislike } from './Dislike';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Like, like => like.user)
  likes: Like[];
  
  @OneToMany(() => Dislike, dislike => dislike.user)
  dislikes: Dislike[];
}