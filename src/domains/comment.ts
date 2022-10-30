import { Commenter } from "./commenter";

export type Comment = {
  id: number;
  commenter: Commenter;
  content: {
    body: string;
    createdAt: string;
    updatedAt: string;
  };
};
