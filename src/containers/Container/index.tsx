import { css } from "@emotion/react";
import { CommentInputBox } from "src/containers/CommentInputBox";
import { Avatar } from "../Avatar";
import { CommentList } from "../CommentList";

export function Container() {
  return (
    <div
      css={css`
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
      `}
    >
      <CommentList />
      <Avatar />
      <CommentInputBox />
    </div>
  );
}
