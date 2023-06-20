import React from 'react';
import { useParams } from 'react-router-dom';
import { useSakeQuery } from "../graphql/generated";

const SakeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid sake ID</div>;
  }

  
  const { data, loading, error } = useSakeQuery({ variables: { id } });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data || !data.sake) {
    return <div>Error loading sake details</div>;
  }

  const sake = data.sake;

  return (
    <div>
      <h1>{sake.name}</h1>
      <p>Brewery: {sake.brewery}</p>
      <p>Classification: {sake.classification}</p>
    </div>
  );
};

export default SakeDetail;
