import { css } from "@emotion/react";
import { CommentListRow } from "src/components/Comment";
import { useSuspendedComments } from "src/hooks/queries/useSuspendedComments";

export function CommentList() {
  const { data: comments } = useSuspendedComments();

  return (
    <ul
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {comments.map((comment) => {
        return <CommentListRow key={comment.id} comment={comment} />;
      })}
    </ul>
  );
}
