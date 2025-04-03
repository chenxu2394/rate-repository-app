import { gql } from "@apollo/client";
import {
  REPOSITORY_BASE_FIELDS,
  USER_BASE_FIELDS,
  REVIEW_BASE_FIELDS,
} from "./fragments";

export const GET_REPOSITORIES = gql`
  query getRepositories {
    repositories {
      edges {
        node {
          ...repositoryBaseFields
        }
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
`;

export const GET_ME = gql`
  query getMe {
    me {
      ...userBaseFields
    }
  }
  ${USER_BASE_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...repositoryBaseFields
      reviews {
        edges {
          node {
            ...reviewBaseFields
          }
        }
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
  ${REVIEW_BASE_FIELDS}
`;
