import { gql } from "@apollo/client";

export default gql`
  mutation createReview($params: ReviewAttributes!) {
    createReview(input: { params: $params }) {
      review {
        id
        comment
        rating
        sake {
          id
        }
      }
    }
  }
`;
