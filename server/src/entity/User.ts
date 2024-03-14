import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Like } from './Like';
import { Dislike } from './Dislike';
import { Comment } from './Comment';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Like, like => like.user)
  likes: Like[];

  @OneToMany(() => Dislike, dislike => dislike.user)
  dislikes: Dislike[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];
}