import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SportService } from "./sport.service";
import { SportControllerBase } from "./base/sport.controller.base";

@swagger.ApiTags("sports")
@common.Controller("sports")
export class SportController extends SportControllerBase {
  constructor(protected readonly service: SportService) {
    super(service);
  }
}
