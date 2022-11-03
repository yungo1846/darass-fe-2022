import { CommentListRow } from "src/components/Comment";
import { useSuspendedComments } from "src/hooks/queries/useSuspendedComments";

export function CommentList() {
  const { data: comments } = useSuspendedComments();

  return (
    <ul>
      {comments.map((comment) => {
        return <CommentListRow key={comment.id} comment={comment} />;
      })}
    </ul>
  );
}
