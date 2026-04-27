import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const EmailCard = ({ title, status, children }) => {
  return (
    <Card sx={{ mt: 3, borderRadius: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <CardContent sx={{ p: 3 }}>
        {status && (
          <Typography variant="caption" sx={{ color: 'orange', fontWeight: 'bold', display: 'block', mb: 1 }}>
            {status}
          </Typography>
        )}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ color: '#555', lineHeight: 1.6 }}>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default EmailCard;
