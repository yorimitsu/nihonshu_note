import React from 'react';
import { Link } from 'react-router-dom';
import { Sake, useSakesQuery } from "../graphql/generated";

const SakeList: React.FC = () => {
  const { data, loading, error } = useSakesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error loading sakes</div>;
  }

  return (
    <div>
      <h1>Sake List</h1>
      <ul>
        {data.sakes.map((sake: Sake) => (
          <li key={sake.id}>
            <Link to={`/sake/${sake.id}`}>{sake.name} - {sake.brewery}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SakeList;
