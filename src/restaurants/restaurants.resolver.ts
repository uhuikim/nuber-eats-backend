import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  @Query(() => Boolean)
  isPizzaGood(): boolean {
    return true;
  }
}
//Query가 return하고자 하는 type을 return하는 function이어야 한다.
// @~~ 데코레이터라고 부름
