import * as graphql from "@nestjs/graphql";
import { SportResolverBase } from "./base/sport.resolver.base";
import { Sport } from "./base/Sport";
import { SportService } from "./sport.service";

@graphql.Resolver(() => Sport)
export class SportResolver extends SportResolverBase {
  constructor(protected readonly service: SportService) {
    super(service);
  }
}
