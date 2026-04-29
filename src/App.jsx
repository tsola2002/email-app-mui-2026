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
import IgnoredDeleted from './IgnoredDeleted';
import MailboxesPage from './components/MailboxesPage';
import BlockedEmail from './BlockedEmail';
import CouldNotRespond from './CouldNotRespond';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar />
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<EmailPage />}>
              <Route index element={<AllEmails />} />
              <Route path="all-emails" element={<AllEmails />} />
              <Route path="annotated" element={<Annotated />} />
              <Route path="spam" element={<Spam />} />
              <Route path="could-not-respond" element={<CouldNotRespond />} />
              <Route path="ignored-deleted" element={<IgnoredDeleted />} />
            </Route>
            <Route path="/companies" element={<CompanyDashboard />} />
            <Route path="/mailboxes" element={<MailboxesPage />} />
            <Route path="/blocked-email" element={<BlockedEmail />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}