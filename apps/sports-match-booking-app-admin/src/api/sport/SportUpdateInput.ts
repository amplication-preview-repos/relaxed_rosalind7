import { MatchUpdateManyWithoutSportsInput } from "./MatchUpdateManyWithoutSportsInput";

export type SportUpdateInput = {
  description?: string | null;
  matches?: MatchUpdateManyWithoutSportsInput;
  name?: string | null;
};
