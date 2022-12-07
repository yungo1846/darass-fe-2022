import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { CommentInputBox } from "src/containers/CommentInputBox";
import { postMessageToParent } from "src/utils/postMessage";
import { Avatar } from "../../containers/Avatar";
import { CommentList } from "../../containers/CommentList";
import { ErrorBoundary } from "@toss/error-boundary";
import { HTTPError } from "ky";

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
        display: flex;
        flex-direction: column;
      `}
    >
      <ErrorBoundary
        renderFallback={({ error }) => {
          if (error instanceof HTTPError) {
            if (error.response.status === 404) {
              return (
                <div
                  css={css`
                    width: 100%;
                    height: 300px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  `}
                >
                  <div
                    css={css`
                      font-size: 20px;
                      text-align: center;
                    `}
                  >
                    ⚠️ 존재하지 않는 프로젝트 입니다.
                    <br />
                    프로젝트 키를 확인해주세요.
                  </div>
                </div>
              );
            }
          }
        }}
      >
        <CommentList />
      </ErrorBoundary>
      <Avatar />
      <CommentInputBox />
    </div>
  );
}
