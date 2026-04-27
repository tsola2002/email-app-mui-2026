import React, { useState } from 'react';
import { Box, Typography, Avatar, Stack, CssBaseline } from '@mui/material';
import Sidebar from './component/Sidebar';
import EmailCard from './component/EmailCard';

function App() {
  const [activeTab, setActiveTab] = useState("E-Mail");

  const emailBody = (
    <>
      Dear Sales Team,<br /><br />
      I've noticed a discrepancy in the latest invoice you sent us. 
      It appears that we were charged twice for the same service. 
      Can you please look into this as soon as possible?<br /><br />
      Thank you,<br />
      Feranmi
    </>
  );

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f4f6fb', minHeight: '100vh' }}>
      <CssBaseline />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        {/* Top Bar */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold">E-Mail</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="subtitle2" fontWeight="bold">Tarik Abaza</Typography>
              <Typography variant="caption" color="textSecondary">Admin</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#ccc' }}>T</Avatar>
          </Stack>
        </Stack>

        {/* Content */}
        <EmailCard title="Your Contract Is Started">
          {emailBody}
        </EmailCard>

        <EmailCard title="Your Contract Is Started" status="MANUALLY RESPONDED">
          {emailBody}
          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Response</Typography>
          <Box sx={{ p: 2, bgcolor: '#fafafa', border: '1px solid #ddd', borderRadius: 2 }}>
            {emailBody}
          </Box>
        </EmailCard>
      </Box>
    </Box>
  );
}

export default App;
