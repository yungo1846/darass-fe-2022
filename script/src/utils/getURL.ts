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

export const getReplyModuleURL = ({ projectKey }: { projectKey: string }) => {
  const url = `http://localhost:3000${QS.create({
    url: refineCurrentURL(),
    projectId: projectKey,
  })}`;

  return url;
};
