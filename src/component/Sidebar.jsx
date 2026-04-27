import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
// 1. Import the image from your folder
import logoImg from '../assets/image 1.png'; // Adjust the path based on where your image folder is

const menuItems = ["E-Mail", "Mailbox 1", "Mailbox 2", "User List", "Companies", "Mailboxes", "Blocked E-Mail"];

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box', borderRight: '1px solid #ddd' },
      }}
    >
      <Box sx={{ p: 3 }}>
        {/* 2. Replace Typography with an img tag */}
        <Box 
          component="img" 
          src={logoImg} 
          alt="Logo" 
          sx={{ height: 80, width: 150, objectFit: 'contain' }} 
        />
      </Box>

      <List>
        {menuItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton 
              selected={activeTab === text}
              onClick={() => setActiveTab(text)}
              sx={{
                '&.Mui-selected': { bgcolor: '#e8f0ff', color: '#2a6df4', '& .MuiTypography-root': { fontWeight: 'bold' } },
                px: 3
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
        <ListItemButton sx={{ color: 'red' }}>
          <ListItemText primary="Log Out" />
        </ListItemButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
