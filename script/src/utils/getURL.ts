import { QS } from "@toss/utils";
import { URL_REPLACE_TABLE } from "../constants/common";

export const refineCurrentURL = () => {
  let currentURL = window.location.origin + window.location.pathname;

  currentURL = URL_REPLACE_TABLE.reduce((acc, curr) => {
    const { from, to } = curr;
    acc = acc.replaceAll(from, to);

    return acc;
  }, currentURL);

  currentURL = currentURL.replace("m.", "");
  if (currentURL.endsWith("/")) {
    currentURL = currentURL.slice(0, -1);
  }

  return currentURL;
};

const REPLY_MODULE_URL =
  process.env.BUILD_MODE === "production"
    ? "https://reply-module.darass.site"
    : "http://localhost:3000";

export const getReplyModuleURL = ({ projectKey }: { projectKey: string }) => {
  const url = `${REPLY_MODULE_URL}${QS.create({
    url: refineCurrentURL(),
    projectId: projectKey,
  })}`;

  return url;
};
