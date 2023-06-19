import React from 'react';
import { useQuery, gql } from "@apollo/client";

const FETCH_SAKES = gql`
  query {
    sakes {
      id
      name
      classification
    }
  }
`;

interface SAKE {
  id: string;
  name: string;
  classification: string;
}

function App() {
  const { data: { sakes = [] } = {} } = useQuery(FETCH_SAKES);

  return (
    <div>
      {sakes.map((sake: SAKE) => (
        <div key={sake.id}>{sake.name}</div>
      ))}
    </div>
  );
}

export default App;
// import React from 'react';
// const HelloMessage = ({ name }) => <h1>Hello, {name}!</h1>;
// export default HelloMessage;
