import { SportWhereUniqueInput } from "../sport/SportWhereUniqueInput";

export type MatchUpdateInput = {
  createdBy?: string | null;
  genderRestriction?: "Option1" | null;
  isFilled?: boolean | null;
  matchLocation?: string | null;
  matchTime?: Date | null;
  numberOfParticipants?: number | null;
  sport?: SportWhereUniqueInput | null;
};
