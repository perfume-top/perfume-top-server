import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { User } from './domain/user.domain';
import { UserInput } from './domain/user.input';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Query(returns => User, { name: 'user' })
    async getUser(@Args({ name: 'id', type: () => String }) id: string) {
        return await this.userService.findOne(id);
    }

    @Mutation(returns => User)
    async addUser(@Args('user') userInput: UserInput) {
      return this.userService.save(this.userService.generateFromInput(userInput));
    }

    @Mutation(returns => User)
    async modifyUser(@Args('user') userInput: UserInput) {
      return this.userService.modify(userInput);
    }

}
