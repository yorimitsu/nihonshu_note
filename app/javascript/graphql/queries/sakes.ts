import { gql } from "@apollo/client";

export default gql`
  query sakes {
    sakes {
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
      reviews {
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
