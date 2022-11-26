import styled from "@emotion/styled";
import { Avatar as MAvatar } from "@mui/material";
import { User } from "src/domains/user";
import { useSuspendedUser } from "src/hooks/queries/useSuspendedUser";
import userImage from "../../../public/images/user.png";

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
      <MAvatar src={userImage} alt="익명 유저" />
      <Name>익명</Name>
      <a href="http://localhost:8000/v1/auth/kakao">로그인</a>
    </>
  );
}

function LoggedInUser({ user }: { user: User }) {
  return <MAvatar src={user.profileImage} alt={user.name} />;
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-left: 8px;
`;
