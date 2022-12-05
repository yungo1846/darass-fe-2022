import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useCreateComment } from "src/hooks/mutations/useCreateComment";
import { useSuspendedComments } from "src/hooks/queries/useSuspendedComments";
import { useSuspendedUser } from "src/hooks/queries/useSuspendedUser";

export function CommentInputBox() {
  const { data: user } = useSuspendedUser();
  const [content, setContent] = useState("");
  const { mutate: createComment } = useCreateComment();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 16px;
        margin-top: 16px;
      `}
    >
      <TextField
        css={css`
          width: 100%;
        `}
        multiline
        maxRows={6}
        placeholder={
          user == null ? "댓글을 추가하려면 로그인이 필요해요" : "댓글 입력"
        }
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <Button
        variant="contained"
        css={css`
          width: 52px;
        `}
        disabled={user == null}
        onClick={() => {
          createComment(
            { content },
            {
              onSuccess: async () => {
                await useSuspendedComments.refetch();
                setContent("");
              },
            }
          );
        }}
      >
        등록
      </Button>
    </div>
  );
}
