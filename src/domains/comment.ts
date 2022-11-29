import { Commenter } from "./commenter";

export type Comment = {
  id: number;
  commenter: Commenter;
  content: string;
  createdAt: string;
  updatedAt: string;
};
