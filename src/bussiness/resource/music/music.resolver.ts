import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription, ResolveProperty, Parent } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { Music } from '../../../entities/resource/music.entity';
import { User } from '../../../user/domain/user.domain';
// import { RecipesService } from './recipes.service';

@Resolver(of => Music)
export class MusicResolver {
  // constructor(private readonly recipesService: RecipesService) {}

  @Query(returns => Music, {name: 'music'})
  async getMusic(@Args('id') id: number): Promise<Music> {
    // const recipe = await this.recipesService.findOneById(id);
    // if (!recipe) {
    //   throw new NotFoundException(id);
    // }
    const music = new Music();
    music.id = 911;
    music.src = 'xxx.mp3';
    return music;
  }

  // @Query(returns => [Music])
  // getMusics(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
  //   return this.recipesService.findAll(recipesArgs);
  // }

  // @Mutation(returns => Music)
  // async addRecipe(
  //   @Args('newRecipeData') newRecipeData: NewRecipeInput,
  // ): Promise<Recipe> {
  //   const recipe = await this.recipesService.create(newRecipeData);
  //   pubSub.publish('recipeAdded', { recipeAdded: recipe });
  //   return recipe;
  // }

  @ResolveProperty('user', returns => User)
  async getPosts(@Parent() perfume) {
    const { id } = perfume;
    const user = new User();
    user.name = {
      CN: 'CN',
      EN: 'EN',
      JP: 'JP',
    };
    return await user;
  }

  @Mutation(returns => Music)
  async removeMusic(@Args('id') id: string) {
    const music = new Music();
    music.id = 911;
    music.src = 'remove.mp3';
    return music;
    // return this.recipesService.remove(id);
  }

}
