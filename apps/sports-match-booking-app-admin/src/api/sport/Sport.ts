import { Match } from "../match/Match";

export type Sport = {
  createdAt: Date;
  description: string | null;
  id: string;
  matches?: Array<Match>;
  name: string | null;
  updatedAt: Date;
};
