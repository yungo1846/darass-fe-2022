import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useCreateComment } from "src/hooks/mutations/useCreateComment";
import { useSuspendedComments } from "src/hooks/queries/useSuspendedComments";

export function CommentInputBox() {
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
        placeholder="댓글 입력"
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
