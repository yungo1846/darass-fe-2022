import { css } from "@emotion/react";
import { useSuspendedUser } from "src/hooks/queries/useSuspendedUser";

export function AvatarMenu() {
  const { data: user } = useSuspendedUser();

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      {user == null ? (
        <MenuButton menu="로그인" onClick={() => {}} />
      ) : (
        <MenuButton menu="로그아웃" onClick={() => {}} />
      )}
    </div>
  );
}

function MenuButton({ menu, onClick }: { menu: string; onClick: () => void }) {
  return <button onClick={onClick}>{menu}</button>;
}
