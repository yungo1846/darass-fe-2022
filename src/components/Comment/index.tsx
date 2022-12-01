import { css } from "@emotion/react";
import { Avatar as MAvatar } from "@mui/material";
import { Comment } from "src/domains/comment";
import { Commenter } from "src/domains/commenter";
import { useSuspendedUser } from "src/hooks/queries/useSuspendedUser";
import { COLORS } from "src/styles/colors";

interface Props {
  comment: Comment;
}

export function CommentListRow({ comment }: Props) {
  const { data: user } = useSuspendedUser();

  return (
    <div
      css={css`
        display: flex;
        max-width: 600px;
        align-self: ${user?.id === comment.commenter.id && "flex-end"};
      `}
    >
      <Avatar commenter={comment.commenter} />
      <CommentBody comment={comment} />
    </div>
  );
}

function Avatar({ commenter }: { commenter: Commenter }) {
  return (
    <MAvatar
      alt={`${commenter.name ?? "익명"}의 프로필 이미지`}
      src={commenter.profileImage}
    />
  );
}

function CommentBody({ comment }: { comment: Comment }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        background-color: ${COLORS.GRAY_300};
        border-radius: 4px;
        padding: 12px 16px;
        margin: 0 10px 20px 10px;
      `}
    >
      <span
        css={css`
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 8px;
        `}
      >
        {comment.commenter.name}
      </span>
      <span
        css={css`
          font-size: 14px;
        `}
      >
        {comment.content}
      </span>
    </div>
  );
}
