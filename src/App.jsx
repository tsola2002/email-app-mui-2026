import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import IgnoredDeleted from './IgnoredDeleted';

function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3, background: '#f8fafc' }}>
        <IgnoredDeleted />
      </Box>
    </Box>
  );
}

export default App;