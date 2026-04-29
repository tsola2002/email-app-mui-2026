import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Trash from './Trash';

function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3, background: '#f8fafc' }}>
        <Routes>
          {/* Home page - shows Trash */}
          <Route path="/" element={<Trash />} />
          
          {/* Trash page */}
          <Route path="/trash" element={<Trash />} />
          
          {/* Mailbox routes - add your mailbox pages here */}
          <Route path="/mailbox-1" element={<div>Mailbox 1 Page</div>} />
          <Route path="/mailbox-2" element={<div>Mailbox 2 Page</div>} />
          
          {/* Other sidebar routes - add your pages here */}
          <Route path="/user-list" element={<div>User List Page</div>} />
          <Route path="/companies" element={<div>Companies Page</div>} />
          <Route path="/mailboxes" element={<div>Mailboxes Page</div>} />
          <Route path="/blocked-email" element={<div>Blocked Email Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;