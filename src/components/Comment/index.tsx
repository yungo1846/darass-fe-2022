import { Comment } from "src/domains/comment";
import styled from "@emotion/styled";
import { Commenter } from "src/domains/commenter";
import { css } from "@emotion/react";
import { COLORS } from "src/styles/colors";

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
    <img
      css={css`
        width: 40px;
        height: 40px;
        border-radius: 50%;
      `}
      alt={`${commenter.name} 프로필 사진`}
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
        background-color: ${COLORS.GRAY_500};
        border-radius: 4px;
        padding: 8px 12px;
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
        {comment.content.body}
      </span>
    </div>
  );
}
