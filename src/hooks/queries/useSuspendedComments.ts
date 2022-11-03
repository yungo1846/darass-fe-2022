import { useSuspendedQuery } from "@toss/react-query";
import { Comment } from "src/domains/comment";
import { client } from "src/utils/network";

export function useSuspendedComments() {
  return useSuspendedQuery(
    useSuspendedComments.key,
    async () => {
      const comments = await client.get("v1/comments").json<Comment[]>();

      return comments;
    },
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );
}

useSuspendedComments.key = ["comments"];
