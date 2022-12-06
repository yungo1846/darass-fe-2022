import { useSuspendedQuery } from "@toss/react-query";
import { User } from "src/domains/user";
import { queryClient } from "src/pages/App";
import { client } from "src/utils/network";

export function useSuspendedUser() {
  return useSuspendedQuery(useSuspendedUser.key, async () => {
    try {
      const user = await client.get("v1/users/profile").json<User>();

      return user;
    } catch (error) {
      return null;
    }
  });
}

useSuspendedUser.key = ["user"];
useSuspendedUser.refetch = async () => {
  queryClient.refetchQueries(useSuspendedUser.key);
};
