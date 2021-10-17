/* import { listClasses } from '@mui/material';
import { useState } from 'react'; */
import { Form } from '../Form/Form';

const Weather = ({ fetchData, searchQuery, setSearchQuery }) => {
  return <Form searchQuery={searchQuery} fetchData={fetchData} setSearchQuery={setSearchQuery} />;
};
