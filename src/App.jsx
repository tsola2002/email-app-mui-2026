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
<<<<<<< HEAD
import Login from './LoginPage';

// ============================================
// TEAMMATES: UNCOMMENT AND IMPORT YOUR PAGES HERE
// ============================================

// Filter tab pages (teammates):
// import CouldNotRespond from './pages/email/CouldNotRespond';
// import Draft from './pages/email/Draft';
// import ManuallyResponded from './pages/email/ManuallyResponded';
// import AutoRespond from './pages/email/AutoRespond';
// import IgnoredDeleted from './pages/email/IgnoredDeleted';

// Sidebar pages (teammates):
// import SalesPage from './pages/sales/SalesPage';
// import SupportPage from './pages/support/SupportPage';
// import UserList from './pages/UserList';
// import Companies from './pages/Companies';
import Mailboxes from './Mailboxes';
import BlockedEmail from './BlockedEmail';
import './App.css';
import CouldNotRespond from './CouldNotRespond';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>

          {/* LOGIN PAGE */}
          <Route path="/" element={<Login />} />

          {/* EMAIL DASHBOARD LAYOUT */}
          <Route path="/EmailPage" element={<EmailPage />}>

            {/* DEFAULT PAGE (THIS FIXES YOUR "EMPTY EMAILPAGE FIRST" ISSUE) */}
            <Route index element={<AllEmails />} />

            {/* EMAIL FILTER ROUTES */}
            <Route path="all-emails" element={<AllEmails />} />

            {/* TEAMMATES: UNCOMMENT THESE AS YOU CREATE THE FILES */}
            {/* <Route path="draft" element={<Draft />} /> */}
            <Route path="annotated" element={<Annotated />} />
            <Route path="spam" element={<Spam />} />
            <Route path="could-not-respond" element={<CouldNotRespond />} />

          </Route>

          {/* SIDEBAR ROUTES */}
          {/* <Route path="/sales" element={<SalesPage />} /> */}
          {/* <Route path="/support" element={<SupportPage />} /> */}
          {/* <Route path="/user-list" element={<UserList />} /> */}
          <Route path="/companies" element={<CompanyDashboard />} />
          <Route path="/mailboxes" element={<Mailboxes />} />
          <Route path="/blocked-email" element={<BlockedEmail />} />
          {/* <Route path="/trash" element={<Trash />} /> */}

        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

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
>>>>>>> e14dcc03f075f52de476ced040895f488d4a46dc
