import { Sport } from "../sport/Sport";

export type Match = {
  createdAt: Date;
  createdBy: string | null;
  genderRestriction?: "Option1" | null;
  id: string;
  isFilled: boolean | null;
  matchLocation: string | null;
  matchTime: Date | null;
  numberOfParticipants: number | null;
  sport?: Sport | null;
  updatedAt: Date;
};
