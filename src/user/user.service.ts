import { Injectable } from '@nestjs/common';
import { User } from './domain/user.domain';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInput } from './domain/user.input';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>) {}

    async save(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async modify(id: UserInput): Promise<User>
    async modify(id: string, userInput: UserInput): Promise<User>
    async modify(id: UserInput | string, userInput?: UserInput): Promise<User> {
        userInput = userInput || id as UserInput;
        let user = await this.userRepository.findOne(userInput.id || id as string);
        user = this.generateFromInput(userInput, user);
        return this.save(user);
    }

    generateFromInput(userInput: UserInput, user: User = new User()): User {
        user.name = userInput.name || user.name ;
        user.prof = userInput.prof || user.prof;
        user.loc = userInput.loc || user.loc;
        user.ext = userInput.ext || user.ext;
        user.conf = userInput.conf || user.conf;
        return user;
    }

    async findOne(id: string): Promise<User> {
        return await this.userRepository.findOne(id);
    }
}
