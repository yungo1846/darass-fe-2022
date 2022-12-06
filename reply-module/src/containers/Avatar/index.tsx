import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Avatar as MAvatar, Button, Menu, MenuItem } from "@mui/material";
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { User } from "src/domains/user";
import { useSuspendedUser } from "src/hooks/queries/useSuspendedUser";

export function Avatar() {
  const { data: user } = useSuspendedUser();

  return (
    <Container>
      {user == null ? <UnknownUser /> : <LoggedInUser user={user} />}
    </Container>
  );
}

function UnknownUser() {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

  return (
    <>
      <MAvatar src={undefined} alt="익명 유저" />

      <div>
        <Button
          css={css`
            font-size: 20px;
            font-weight: 600;
            margin-left: 8px;
          `}
          color="inherit"
          variant="text"
          {...bindTrigger(popupState)}
        >
          로그인
        </Button>
        <Menu {...bindMenu(popupState)}>
          <MenuItem
            onClick={() => {
              popupState.close();
              window.open("http://localhost:8000/v1/auth/kakao");
            }}
          >
            카카오
          </MenuItem>
          <MenuItem onClick={popupState.close}>Death</MenuItem>
        </Menu>
      </div>
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
