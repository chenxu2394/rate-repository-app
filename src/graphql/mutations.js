import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
      expiresAt
      user {
        username
        id
        createdAt
        reviewCount
      }
    }
  }
`;
