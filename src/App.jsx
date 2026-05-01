import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import Sidebar from './components/Sidebar';
import EmailPage from './EmailPage';
import AllEmails from './AllEmails';
import Annotated from './Annotated';
import CompanyDashboard from './CompanyDashboard';
import Spam from './Spam';
import Login from './LoginPage';
import Mailboxes from './Mailboxes';
import BlockedEmail from './BlockedEmail';
import CouldNotRespond from './CouldNotRespond';
import IgnoredDeleted from './IgnoredDeleted';
import Trash from './Trash'; // YOUR IMPORT

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/EmailPage" element={<EmailPage />}>
          <Route index element={<AllEmails />} />
          <Route path="all-emails" element={<AllEmails />} />
          <Route path="annotated" element={<Annotated />} />
          <Route path="spam" element={<Spam />} />
          <Route path="could-not-respond" element={<CouldNotRespond />} />
          <Route path="ignored-deleted" element={<IgnoredDeleted />} />
        </Route>
        <Route path="/companies" element={<CompanyDashboard />} />
        <Route path="/mailboxes" element={<Mailboxes />} />
        <Route path="/blocked-email" element={<BlockedEmail />} />
        <Route path="/trash" element={<Trash />} /> {/* YOUR ROUTE */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;