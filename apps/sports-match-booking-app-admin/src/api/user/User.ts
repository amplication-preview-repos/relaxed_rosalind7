import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  gender: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
