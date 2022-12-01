import { useMutation } from "react-query";
import { Comment } from "src/domains/comment";
import { client } from "src/utils/network";

type Payload = Omit<Comment, "id" | "createdAt" | "updatedAt" | "commenter">;

export function useCreateComment() {
  return useMutation(async (comment: Payload) => {
    await client.post("v1/comments", { json: comment });
  });
}
