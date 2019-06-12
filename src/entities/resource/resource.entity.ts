import { Entity, TableInheritance, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/domain/user.domain';
import { Field, ID, ObjectType, Int } from 'type-graphql';

@Entity()
@TableInheritance({ column: { type: 'varchar', length: 32, name: 'type' } })
@ObjectType()
export class Resource {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column({nullable: true})
    @Field({nullable: true})
    size: number;

    @OneToOne(type => User)
    @JoinColumn()
    // @Field(type => User)
    author: User;

    @CreateDateColumn()
    @Field(type => Date)
    createdDate: Date;
}
