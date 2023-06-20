import React from 'react';
import { useSakesQuery } from "../graphql/generated";

function App() {
  const { data: { sakes = [] } = {} } = useSakesQuery();

  return (
    <div>
      {sakes.map((sake) => (
        <div key={sake.id}>{sake.name}</div>
      ))}
    </div>
  );
}

export default App;
