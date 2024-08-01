import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "createdBy";

export const MatchTitle = (record: TMatch): string => {
  return record.createdBy?.toString() || String(record.id);
};
