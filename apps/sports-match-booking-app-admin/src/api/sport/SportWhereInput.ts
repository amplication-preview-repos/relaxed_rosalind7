import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MatchListRelationFilter } from "../match/MatchListRelationFilter";

export type SportWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  matches?: MatchListRelationFilter;
  name?: StringNullableFilter;
};
