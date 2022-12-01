import { useSuspendedQuery } from "@toss/react-query";
import { Comment } from "src/domains/comment";
import { queryClient } from "src/pages/App";
import { client } from "src/utils/network";

export function useSuspendedComments() {
  return useSuspendedQuery(
    useSuspendedComments.queryKey,
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

useSuspendedComments.queryKey = ["comments"];
useSuspendedComments.refetch = async () => {
  queryClient.refetchQueries(useSuspendedComments.queryKey);
};
