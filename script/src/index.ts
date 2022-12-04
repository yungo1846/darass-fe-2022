import { POST_MESSAGE_TYPE } from "./constants/postMessageType";
import { IFRAME_STYLE } from "./styles/iframe";
import { createIframe, resizeElementHeight } from "./utils/dom";

const messageChannel = {
  replyModule: new MessageChannel(),
  replyModal: new MessageChannel(),
};

const blockTistoryMobilePath = () => {
  if (window.location.host.includes("tistory")) {
    if (window.location.href.includes("/m/")) {
      window.location.href = window.location.href.replace("/m/", "/");
    }
  }
};

const init = () => {
  blockTistoryMobilePath();
  const $darass: HTMLElement | null = document.querySelector("#darass");

  if (!$darass) {
    alert("Darass를 렌더링할 수 없습니다. id가 darass인 요소를 추가해주세요.");

    return;
  }

  const projectKey = $darass.dataset.projectKey;
  if (!projectKey) {
    alert("유효하지 않은 프로젝트 키입니다. 프로젝트키를 확인해주세요.");

    return;
  }

  const $replyModuleIframe = createIframe(
    "http://localhost:3000",
    IFRAME_STYLE.REPLY_MODULE
  );

  $replyModuleIframe.setAttribute("scrolling", "no");

  $darass.append($replyModuleIframe);

  const onMessageFromReplyModuleIFrame = ({
    data: { type, data },
  }: MessageEvent) => {
    const ACTION_TABLE = {
      [POST_MESSAGE_TYPE.SCROLL_HEIGHT]: () =>
        resizeElementHeight($replyModuleIframe, data),
    } as const;

    if (!Object.keys(ACTION_TABLE).includes(type)) return;
    ACTION_TABLE[type as keyof typeof ACTION_TABLE]();
  };

  window.addEventListener("message", onMessageFromReplyModuleIFrame);
};

window.addEventListener("load", init);
