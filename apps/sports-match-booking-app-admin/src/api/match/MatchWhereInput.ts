import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SportWhereUniqueInput } from "../sport/SportWhereUniqueInput";

export type MatchWhereInput = {
  createdBy?: StringNullableFilter;
  genderRestriction?: "Option1";
  id?: StringFilter;
  isFilled?: BooleanNullableFilter;
  matchLocation?: StringNullableFilter;
  matchTime?: DateTimeNullableFilter;
  numberOfParticipants?: IntNullableFilter;
  sport?: SportWhereUniqueInput;
};
