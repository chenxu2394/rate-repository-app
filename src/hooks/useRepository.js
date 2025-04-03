import { GET_REPOSITORY } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useRepository = (variables, enabled) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables,
    skip: !enabled,
  });

  const item = data?.repository ?? null;

  return { item, error, loading };
};

export default useRepository;
