import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import EmailHeader from './components/EmailHeader';
import { useMailbox } from './context/MailboxContext';
import { Box, Typography, Container } from '@mui/material';

// Import page components
import UserList from './pages/UserList';
import Companies from './pages/Companies';
import Mailboxes from './pages/Mailboxes';
import BlockedEmail from './pages/BlockedEmail';
import Trash from './pages/Trash';
import Logout from './pages/Logout';

const originalEmail = {
  id: 1,
  from: "Tarik Abaza",
  fromEmail: "tarik.abazaa@hotmail.com",
  to: "Me",
  subject: "AUTO RESPOND - Your Contract Is Started",
  body: `Dear Sales Team,

I've noticed a discrepancy in the latest invoice you sent us. It appears that we were charged twice for the same service. Can you please look into this as soon as possible?

Thank you,
John Doe
Customer Support Lead
Customer Inc.`
};

const responseText = `Dear Sales Team,

I've noticed a discrepancy in the latest invoice you sent us. It appears that we were charged twice for the same service. Can you please look into this as soon as possible?

Thank you,
John Doe
Customer Support Lead
Customer Inc.`;

// Mailbox 1 Component
const Mailbox1 = () => {
  const { mailbox1Deleted, deleteMailbox1 } = useMailbox();

  const handleEmailClose = () => {
    deleteMailbox1();
  };

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      {!mailbox1Deleted && (
        <EmailHeader 
          emailData={originalEmail} 
          responseText={responseText}
          onClose={handleEmailClose} 
        />
      )}
      
      {mailbox1Deleted && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No emails in this mailbox 📭
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Refresh the page to restore deleted emails
          </Typography>
        </Box>
      )}
    </Container>
  );
};

// Mailbox 2 Component
const Mailbox2 = () => {
  const { mailbox2Deleted, deleteMailbox2 } = useMailbox();

  const handleEmailClose = () => {
    deleteMailbox2();
  };

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      {!mailbox2Deleted && (
        <EmailHeader 
          emailData={originalEmail} 
          responseText={responseText}
          onClose={handleEmailClose} 
        />
      )}
      
      {mailbox2Deleted && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No emails in this mailbox 📭
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Refresh the page to restore deleted emails
          </Typography>
        </Box>
      )}
    </Container>
  );
};

function App() {
  return (
    <Layout>
      <Routes>
        {/* Email Routes */}
        <Route path="/" element={<Mailbox1 />} />
        <Route path="/mailbox1" element={<Mailbox1 />} />
        <Route path="/mailbox2" element={<Mailbox2 />} />
        
        {/* Other Routes - Each has its own component for collaborators */}
        <Route path="/users" element={<UserList />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/mailboxes" element={<Mailboxes />} />
        <Route path="/blocked" element={<BlockedEmail />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Layout>
  );
}

export default App;