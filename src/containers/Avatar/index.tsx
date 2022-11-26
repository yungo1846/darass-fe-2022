import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { User } from "src/domains/user";
import { useSuspendedUser } from "src/hooks/queries/useSuspendedUser";
import userImage from "../../../public/images/user.png";

export function Avatar() {
  const { data: user } = useSuspendedUser();

  if (user == null) {
    return <UnknownUser />;
  }

  return <LoggedInUser user={user} />;
}
const Container = styled.div`
  position: relative;
`;

function ProfileImage({ src }: { src: string }) {
  return (
    <img
      css={css`
        width: 50px;
        height: 50px;
        border-radius: 50%;
      `}
      src={src}
    />
  );
}

function UnknownUser() {
  return (
    <Container>
      <ProfileImage src={userImage} />
    </Container>
  );
}

function LoggedInUser({ user }: { user: User }) {
  return (
    <Container>
      <ProfileImage src={user.profileImage} />
    </Container>
  );
}
