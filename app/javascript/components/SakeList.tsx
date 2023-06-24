import React from 'react';
import SearchAppBar from './SearchAppBar';
import SakeTable from './SakeTable';

const SakeList: React.FC = () => {
  return (
    <>
      <SearchAppBar />
      <SakeTable />
    </>
  );
};

export default SakeList;

//<Link to={`/sake/${sake.id}`}>{sake.name} - {sake.brewery}</Link>
