import { Entity, TableInheritance, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', length: 32, name: 'type' } })
export class Resource {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    size: number;

    @OneToOne(type => User)
    @JoinColumn()
    author: User;

    @CreateDateColumn()
    createdDate: Date;
}
