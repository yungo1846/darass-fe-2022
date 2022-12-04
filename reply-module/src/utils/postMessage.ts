import { POST_MESSAGE_TYPE } from "../constants/postMessageType";

export const postMessageToParent = {
  setScrollHeight: () => {
    const height = Number(document.querySelector("#root")?.scrollHeight);

    window.parent?.postMessage(
      {
        type: POST_MESSAGE_TYPE.SCROLL_HEIGHT,
        data: height,
      },
      "*"
    );
  },
};
