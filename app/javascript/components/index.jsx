import { useQuery, gql } from "@apollo/client";

const FETCH_BOOKS = gql`
  query {
    books {
      id
      title
    }
  }
`;

function Index() {
  const { data: { books } = {} } = useQuery(FETCH_BOOKS);

  return <div></div>;
}

export default Index;
