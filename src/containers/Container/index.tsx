import { css } from "@emotion/react";
import { useSuspendedUser } from "src/hooks/queries/useSuspendedUser";
import { Avatar } from "../Avatar";
import { CommentList } from "../CommentList";

export function Container() {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <CommentList />
      <Avatar />
    </div>
  );
}
