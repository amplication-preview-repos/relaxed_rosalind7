import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  genderRestriction?: SortOrder;
  id?: SortOrder;
  isFilled?: SortOrder;
  matchLocation?: SortOrder;
  matchTime?: SortOrder;
  numberOfParticipants?: SortOrder;
  sportId?: SortOrder;
  updatedAt?: SortOrder;
};
