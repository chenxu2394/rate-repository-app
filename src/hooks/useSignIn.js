import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signIn = async ({ username, password }) => {
    return await mutate({
      variables: { credentials: { username, password } },
      onCompleted: async (data) => {
        await authStorage.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
        navigate("/", { replace: true });
      },
    });
  };

  return [signIn, result];
};

export default useSignIn;
