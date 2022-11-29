import { Comment } from "src/domains/comment";
import styled from "@emotion/styled";
import { Commenter } from "src/domains/commenter";
import { css } from "@emotion/react";
import { COLORS } from "src/styles/colors";
import { Avatar as MAvatar } from "@mui/material";

interface Props {
  comment: Comment;
}

export function CommentListRow({ comment }: Props) {
  return (
    <Container>
      <Avatar commenter={comment.commenter} />
      <CommentBody comment={comment} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 600px;
`;

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
        margin: 0 10px 0 10px;
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
