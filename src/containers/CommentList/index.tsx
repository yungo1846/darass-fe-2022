import { CommentListRow } from "src/components/Comment";
import { useComments } from "src/hooks/useComments";

export function CommentList() {
  const { data: comments } = useComments();
  console.log("hi");

  return (
    <ul>
      {comments.map((comment) => {
        return <CommentListRow key={comment.id} comment={comment} />;
      })}
    </ul>
  );
}
