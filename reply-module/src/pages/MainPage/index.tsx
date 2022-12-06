import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { CommentInputBox } from "src/containers/CommentInputBox";
import { postMessageToParent } from "src/utils/postMessage";
import { Avatar } from "../../containers/Avatar";
import { CommentList } from "../../containers/CommentList";

export function MainPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      new ResizeObserver(() => {
        postMessageToParent.setScrollHeight();
      }).observe(ref.current);
    }
  });

  return (
    <div
      ref={ref}
      css={css`
        width: 100%;
        max-width: 1024px;
        padding: 0 16px;
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
