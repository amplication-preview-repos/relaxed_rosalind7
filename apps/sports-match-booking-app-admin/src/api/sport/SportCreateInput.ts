import { MatchCreateNestedManyWithoutSportsInput } from "./MatchCreateNestedManyWithoutSportsInput";

export type SportCreateInput = {
  description?: string | null;
  matches?: MatchCreateNestedManyWithoutSportsInput;
  name?: string | null;
};
