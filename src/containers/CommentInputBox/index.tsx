import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { useCreateComment } from "src/hooks/mutations/useCreateComment";
import { useSuspendedComments } from "src/hooks/queries/useSuspendedComments";
import { useContentEditable } from "src/hooks/useContentEditable";

export function CommentInputBox() {
  const { content, setContent, onInput, contentEditableRef } =
    useContentEditable("");
  const { mutate: createComment } = useCreateComment();

  return (
    <div
      css={css`
        border: 1px solid black;
      `}
    >
      <div ref={contentEditableRef} contentEditable={true} onInput={onInput} />
      <Button
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
