import { useSuspendedQuery } from "@toss/react-query";
import { User } from "src/domains/user";
import { client } from "src/utils/network";

export function useSuspendedUser() {
  return useSuspendedQuery(useSuspendedUser.key, async () => {
    const user = await client.get("users/profile").json<User>();

    return user;
  });
}

useSuspendedUser.key = ["user"];
