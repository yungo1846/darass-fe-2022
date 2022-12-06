import { useEffect } from "react";

export const OAUTH_SUCCESS_MESSAGE = "success";

export function OauthSuccessPage() {
  useEffect(() => {
    window.postMessage(OAUTH_SUCCESS_MESSAGE);
    window.close();
  }, []);

  return <div>로그인 성공</div>;
}
