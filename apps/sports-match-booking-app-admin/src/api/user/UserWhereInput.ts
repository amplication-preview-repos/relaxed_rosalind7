import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
