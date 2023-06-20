import { gql } from "@apollo/client";

export default gql`
  query sakes {
    sakes {
      id
      name
      classification
    }
  }
`;
