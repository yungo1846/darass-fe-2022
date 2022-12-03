import styled from "@emotion/styled";
import { Avatar as MAvatar } from "@mui/material";
import { User } from "src/domains/user";
import { useSuspendedUser } from "src/hooks/queries/useSuspendedUser";
import { css } from "@emotion/react";

export function Avatar() {
  const { data: user } = useSuspendedUser();

  return (
    <Container>
      {user == null ? <UnknownUser /> : <LoggedInUser user={user} />}
    </Container>
  );
}

function UnknownUser() {
  return (
    <>
      <MAvatar src={undefined} alt="익명 유저" />
      <a
        css={css`
          font-size: 20px;
          font-weight: 600;
          margin-left: 8px;
        `}
        href="http://localhost:8000/v1/auth/kakao"
      >
        로그인
      </a>
    </>
  );
}

function LoggedInUser({ user }: { user: User }) {
  return (
    <>
      <MAvatar src={user.profileImage} alt={user.name} />
      <Name>{user.name}</Name>
    </>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-left: 8px;
`;
