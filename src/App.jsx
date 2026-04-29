import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { theme } from './theme';

// Layout / Parent Page
import EmailPage from './EmailPage';

// Email Pages (nested routes)
import AllEmails from './AllEmails';
import Annotated from './Annotated';
import Spam from './Spam';
import CouldNotRespond from './CouldNotRespond';
import Mailboxes from './Mailboxes';

// Standalone Pages
import UserList from "./components/UserList/UserList";
import CompanyDashboard from './CompanyDashboard';
import BlockedEmail from './BlockedEmail';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>

        {/* =========================
            EMAIL LAYOUT ROUTES
        ========================= */}
        <Route path="/" element={<EmailPage />}>
          {/* default page */}
          <Route index element={<AllEmails />} />

          {/* email tabs */}
          <Route path="all-emails" element={<AllEmails />} />
          <Route path="annotated" element={<Annotated />} />
          <Route path="spam" element={<Spam />} />
          <Route path="could-not-respond" element={<CouldNotRespond />} />
          <Route path="mailboxes" element={<Mailboxes />} />
        </Route>

        {/* =========================
            STANDALONE PAGES
        ========================= */}
        <Route path="/user-list" element={<UserList />} />
        <Route path="/companies" element={<CompanyDashboard />} />
        <Route path="/blocked-email" element={<BlockedEmail />} />

      </Routes>

    </ThemeProvider>
  );
}

export default App;