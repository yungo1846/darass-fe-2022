import { css } from "@emotion/react";
import { colors } from "@mui/material";
import { CommentListRow } from "src/components/Comment";
import { useSuspendedComments } from "src/hooks/queries/useSuspendedComments";

export function CommentList() {
  const { data: comments } = useSuspendedComments();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          font-weight: 600;
          color: ${colors.grey[800]};
        `}
      >
        댓글{" "}
        <span
          css={css`
            font-size: 24px;
            font-weight: 800;
            color: ${colors.blue[600]};
          `}
        >
          {comments.length}
        </span>
      </div>
      <div
        css={css`
          height: 2px;
          background-color: #ebebeb;
          margin: 16px 0;
        `}
      />
      <ul
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {comments.length === 0 && (
          <div
            css={css`
              text-align: center;
              font-size: 16px;
              color: ${colors.grey[800]};
              margin: 50px 0;
            `}
          >
            작성된 댓글이 없어요
          </div>
        )}
        {comments.map((comment) => {
          return <CommentListRow key={comment.id} comment={comment} />;
        })}
      </ul>
    </div>
  );
}
