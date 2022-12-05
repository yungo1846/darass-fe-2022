import { useMutation } from "react-query";
import { useReplyModuleContext } from "src/contexts/ReplyModuleContext";
import { Comment } from "src/domains/comment";
import { client } from "src/utils/network";

type CommentPayload = Omit<
  Comment,
  "id" | "createdAt" | "updatedAt" | "commenter"
>;
type Payload = CommentPayload & {
  url: string;
  projectId: string;
};

export function useCreateComment() {
  const { url, projectId } = useReplyModuleContext();

  return useMutation(async (comment: CommentPayload) => {
    const payload: Payload = { ...comment, url, projectId };

    await client.post("v1/comments", { json: payload });
  });
}
