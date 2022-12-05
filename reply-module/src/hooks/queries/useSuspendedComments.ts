import { useSuspendedQuery } from "@toss/react-query";
import { Comment } from "src/domains/comment";
import { queryClient } from "src/pages/App";
import { client } from "src/utils/network";
import { QS } from "@toss/utils";
import { useReplyModuleContext } from "src/contexts/ReplyModuleContext";

export function useSuspendedComments() {
  const { url, projectId } = useReplyModuleContext();

  return useSuspendedQuery(
    useSuspendedComments.queryKey,
    async () => {
      const comments = await client
        .get(`v1/comments${QS.create({ url, projectId })}`)
        .json<Comment[]>();

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
