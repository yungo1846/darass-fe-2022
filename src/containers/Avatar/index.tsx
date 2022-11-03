import { css } from "@emotion/react";
import { useSuspendedUser } from "src/hooks/queries/useSuspendedUser";

export function Avatar() {
  const { data: user } = useSuspendedUser();

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <img
        css={css`
          width: 60px;
          height: 60px;
          border-radius: 50%;
        `}
        src={user.profileImage}
      />
    </div>
  );
}
