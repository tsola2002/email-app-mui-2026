import React, { useState } from 'react';
import { 
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, 
  ListItemText, Typography, Button, IconButton, Paper, Avatar, CssBaseline 
} from '@mui/material';
import {
  Email, People, Business, MoveToInbox, Block, 
  Logout, Edit, Delete, Add, KeyboardArrowDown
} from '@mui/icons-material';
import Logo from '../src/assets/Logo.png'; 
import CompanyView from './CompanyView'; 

const drawerWidth = 260;
const brandGreen = '#22A78E'; 
const brandGreenLight = '#E9F6F4';

const CompanyDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const companies = Array(10).fill("Company 1");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    
    <Box sx={{ display: 'flex', minHeight: '100vh', maxWidth: '100%', overflowX: 'hidden' }}>
      <CssBaseline />
      
     
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { 
            width: drawerWidth, 
            boxSizing: 'border-box', 
            borderRight: 'none', 
            boxShadow: '1px 0px 10px rgba(0,0,0,0.03)'
          },
        }}
      >
        <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box 
              component="img"
              src={Logo}
              alt="Reply AI Logo"
              sx={{ width: '100%', maxWidth: 150, height: 'auto', mb: 1 }}
            />
        </Box>

        <List sx={{ px: 1 }}>
          {[
            { text: 'E-Mail', icon: <Email />, hasChild: true },
            { text: 'User List', icon: <People /> },
            { text: 'Companies', icon: <Business />, active: true },
            { text: 'Mailboxes', icon: <MoveToInbox /> },
            { text: 'Blocked E-Mail', icon: <Block /> },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton 
                selected={item.active} 
                sx={{ 
                  borderRadius: '0 20px 20px 0',
                  '&.Mui-selected': { 
                    bgcolor: brandGreenLight, 
                    color: brandGreen,
                    '&:hover': { bgcolor: '#D9EFEC' }
                  },
                }}
              >
                <ListItemIcon sx={{ color: item.active ? brandGreen : '#9e9e9e', minWidth: 45 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  slotProps={{ primary: { fontSize: '0.95rem', fontWeight: item.active ? 600 : 400 } }} 
                />
                {item.hasChild && <KeyboardArrowDown fontSize="small" sx={{ color: '#bdbdbd' }} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', mb: 3, px: 1 }}>
          <ListItemButton sx={{ borderRadius: '0 20px 20px 0' }}>
            <ListItemIcon sx={{ minWidth: 45 }}><Logout /></ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </Box>
      </Drawer>

     
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          bgcolor: '#fcfcfc', 
          p: 6,
          minWidth: 0, 
          display: 'flex',
          flexDirection: 'column'
        }}
      >
      
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: '#333' }}>Companies</Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.2 }}>Tarik Abaza</Typography>
              <Typography variant="body2" color="text.secondary">Admin</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#424242', width: 48, height: 48 }}>TA</Avatar>
            <KeyboardArrowDown sx={{ color: '#bdbdbd' }} />
          </Box>
        </Box>

       
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <Button 
            variant="contained" 
            startIcon={<Add />}
            onClick={handleOpenModal}
            sx={{ 
              bgcolor: brandGreen, 
              '&:hover': { bgcolor: '#1B8A75' },
              textTransform: 'none',
              borderRadius: '8px',
              py: 1.5,
              px: 4,
              boxShadow: 'none'
            }}
          >
            New Company
          </Button>
        </Box>

       
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {companies.map((name, index) => (
            <Paper 
              key={index} 
              elevation={0} 
              sx={{ 
                p: 2.5, 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                border: '1px solid #f0f0f0',
                borderRadius: '8px',
                '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 500, color: '#555' }}>{name}</Typography>
              <Box>
                <IconButton size="small" sx={{ color: '#bdbdbd', mr: 1 }}><Edit fontSize="small" /></IconButton>
                <IconButton size="small" sx={{ color: '#bdbdbd' }}><Delete fontSize="small" /></IconButton>
              </Box>
            </Paper>
          ))}
        </Box>

        <CompanyView
          open={isModalOpen} 
          handleClose={handleCloseModal} 
        />
      </Box>
    </Box>
  );
};

export default CompanyDashboard;