import { useSuspendedQuery } from "@toss/react-query";
import { HTTPError } from "ky";
import { User } from "src/domains/user";
import { client } from "src/utils/network";

export function useSuspendedUser() {
  return useSuspendedQuery(useSuspendedUser.key, async () => {
    try {
      const user = await client.get("users/profile").json<User>();

      return user;
    } catch (error) {
      return null;
    }
  });
}

useSuspendedUser.key = ["user"];
