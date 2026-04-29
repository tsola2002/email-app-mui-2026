
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import EmailPage from './EmailPage';
import AllEmails from './AllEmails';
import Annotated from './Annotated';
import CompanyDashboard from './CompanyDashboard';
import Spam from './Spam';
import IgnoredDeleted from './IgnoredDeleted';

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
// import { useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'
import CouldNotRespond from './CouldNotRespond';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* ============================================
            EMAIL SECTION WITH NESTED FILTER ROUTES
            ============================================ */}
        <Route path="/" element={<EmailPage />}>
          {/* Default / home shows AllEmails (your page) */}
          <Route index element={<AllEmails />} />
          
          {/* Filter tab routes - teammates uncomment as they build */}
          <Route path="all-emails" element={<AllEmails />} />
          
          {/* TEAMMATES: UNCOMMENT THESE AS YOU CREATE THE FILES */}
          {/* <Route path="draft" element={<Draft />} /> */}
          {/* <Route path="draft" element={<Draft />} /> */}
          <Route path="annotated" element={<Annotated />} />
          <Route path="spam" element={<Spam />} />
          <Route path="could-not-respond" element={<CouldNotRespond/>} />

          {/* <Route path="manually-responded" element={<ManuallyResponded />} /> */}
          {/* <Route path="auto-respond" element={<AutoRespond />} /> */}
          <Route path="ignored-deleted" element={<IgnoredDeleted />} />
        </Route>

        {/* ============================================
            SIDEBAR ROUTES 
            TEAMMATES: UNCOMMENT THESE AS YOU CREATE THE FILES
            ============================================ */}
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
