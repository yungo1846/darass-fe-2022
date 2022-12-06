import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Avatar as MAvatar, Button, Menu, MenuItem } from "@mui/material";
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { ENDPOINT } from "src/constants/endpoint";
import { User } from "src/domains/user";
import { useSuspendedUser } from "src/hooks/queries/useSuspendedUser";
import { OAUTH_SUCCESS_MESSAGE } from "src/pages/OauthSuccessPage";

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
            margin-left: 4px;
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

              const popupX = window.screen.width / 2 - 700 / 2;
              const popupY = window.screen.height / 2 - 800 / 2;

              const popup = window.open(
                `${ENDPOINT}/v1/auth/kakao`,
                "로그인 팝업",
                `width=700px,height=800px,scrollbars=yes,left=${popupX}px, top=${popupY}px`
              );

              popup?.window.addEventListener("message", (event) => {
                if (event.data === OAUTH_SUCCESS_MESSAGE) {
                  useSuspendedUser.refetch();
                }
              });
            }}
          >
            카카오
          </MenuItem>
          <MenuItem onClick={popupState.close}>네이버</MenuItem>
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
