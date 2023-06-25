import { gql } from "@apollo/client";

export default gql`
  query sake($id: ID!) {
    sake(id: $id) {
      id
      name
      brand
      brewery
      classification
      mainRice
      ricePolishingRatio
      alcoholContent
      acidity
      sakeMeterValue
      flavorProfile
      description
    }
  }
`;
