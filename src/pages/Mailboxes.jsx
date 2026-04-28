import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Mailboxes = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom>
        Mailboxes
      </Typography>
      <Box sx={{ mt: 2, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="body1" color="text.secondary">
          Mailboxes
        </Typography>
      </Box>
    </Container>
  );
};

export default Mailboxes;