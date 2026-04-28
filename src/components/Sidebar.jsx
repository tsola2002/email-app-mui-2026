import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Typography,
  Collapse
} from '@mui/material';
import Email from '@mui/icons-material/Email';
import People from '@mui/icons-material/People';
import Business from '@mui/icons-material/Business';
import MailOutline from '@mui/icons-material/MailOutline';
import Block from '@mui/icons-material/Block';
import TrashIcon from '@mui/icons-material/DeleteOutline';
import Logout from '@mui/icons-material/Logout';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import logo from '../assets/logo.png';

const Sidebar = () => {
  const location = useLocation();
  
  // State for E-Mail dropdown
  const [emailDropdownOpen, setEmailDropdownOpen] = useState(true);

  const handleEmailClick = () => {
    setEmailDropdownOpen(!emailDropdownOpen);
  };

  // ============================================
  // CHANGE THESE PATHS TO MATCH YOUR ROUTES
  // ============================================
  const emailDropdownItems = [
    { 
      label: 'Mailbox 1', 
      path: '/mailbox-1'    // <-- CHANGE THIS PATH
    },
    { 
      label: 'Mailbox 2', 
      path: '/mailbox-2'    // <-- CHANGE THIS PATH
    },
  ];

  // ============================================
  // CHANGE THESE PATHS TO MATCH YOUR ROUTES
  // ============================================
  const menuItems = [
    { 
      icon: People, 
      label: 'User List', 
      path: '/user-list'      // <-- CHANGE THIS PATH
    },
    { 
      icon: Business, 
      label: 'Companies', 
      path: '/companies'      // <-- CHANGE THIS PATH
    },
    { 
      icon: MailOutline, 
      label: 'Mailboxes', 
      path: '/mailboxes'      // <-- CHANGE THIS PATH
    },
    { 
      icon: Block, 
      label: 'Blocked E-Mail', 
      path: '/blocked-email'  // <-- CHANGE THIS PATH
    },
    { 
      icon: TrashIcon, 
      label: 'Trash', 
      path: '/trash'  // <-- CHANGE THIS PATH
    }
  ];

  // Check if we're in the email section
  const isEmailSection = location.pathname === '/' || 
                         location.pathname.startsWith('/email') ||
                         location.pathname.startsWith('/mailbox');

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          border: 'none',
          boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column'
        },
      }}
    >
      {/* LOGO - Clickable */}
      <Box 
        component={Link} 
        to="/"
        sx={{ 
          p: 3, 
          display: 'flex', 
          justifyContent: 'center',
          textDecoration: 'none',
          cursor: 'pointer'
        }}
      >
        <Box 
          component="img"
          src={logo}
          alt="Reply AI Logo"
          sx={{ 
            width: 150,
            height: 80,
            objectFit: 'contain'
          }}
        />
      </Box>

      <List sx={{ px: 2, flexGrow: 1 }}>
        {/* E-MAIL DROPDOWN */}
        <ListItem
          onClick={handleEmailClick}
          sx={{
            mb: 0.5,
            borderRadius: '10px',
            backgroundColor: isEmailSection ? '#E0F7FA' : 'transparent',
            color: isEmailSection ? '#00C9B7' : '#64748b',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: isEmailSection ? '#E0F7FA' : '#f1f5f9',
            },
            py: 1.2
          }}
        >
          <ListItemIcon sx={{ 
            color: isEmailSection ? '#00C9B7' : '#94a3b8',
            minWidth: 40
          }}>
            <Email />
          </ListItemIcon>
          <ListItemText 
            primary="E-Mail" 
            primaryTypographyProps={{ 
              fontSize: '0.9rem', 
              fontWeight: isEmailSection ? 600 : 500 
            }}
          />
          {emailDropdownOpen ? (
            <KeyboardArrowDown sx={{ fontSize: 18, color: '#00C9B7' }} />
          ) : (
            <KeyboardArrowRight sx={{ fontSize: 18, color: '#94a3b8' }} />
          )}
        </ListItem>

        {/* DROPDOWN ITEMS */}
        <Collapse in={emailDropdownOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {emailDropdownItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              
              return (
                <ListItem
                  key={index}
                  component={Link}
                  to={item.path}
                  sx={{
                    pl: 4,
                    py: 0.8,
                    borderRadius: '8px',
                    backgroundColor: isActive ? '#E0F7FA' : 'transparent',
                    color: isActive ? '#00C9B7' : '#64748b',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: isActive ? '#E0F7FA' : '#f1f5f9',
                    },
                    mb: 0.5
                  }}
                >
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{ 
                      fontSize: '0.85rem', 
                      fontWeight: isActive ? 600 : 500 
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </Collapse>

        {/* OTHER MENU ITEMS */}
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <ListItem
              key={index}
              component={Link}
              to={item.path}
              sx={{
                mb: 0.5,
                borderRadius: '10px',
                backgroundColor: isActive ? '#E0F7FA' : 'transparent',
                color: isActive ? '#00C9B7' : '#64748b',
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: isActive ? '#E0F7FA' : '#f1f5f9',
                },
                py: 1.2
              }}
            >
              <ListItemIcon sx={{ 
                color: isActive ? '#00C9B7' : '#94a3b8',
                minWidth: 40
              }}>
                <IconComponent />
              </ListItemIcon>
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ 
                  fontSize: '0.9rem', 
                  fontWeight: isActive ? 600 : 500 
                }}
              />
            </ListItem>
          );
        })}
      </List>

      {/* LOGOUT */}
      <Box sx={{ p: 2 }}>
        <ListItem
          component={Link}
          to="/login"    // <-- CHANGE THIS PATH IF NEEDED
          sx={{
            borderRadius: '10px',
            color: '#64748b',
            textDecoration: 'none',
            cursor: 'pointer',
            '&:hover': { backgroundColor: '#f1f5f9' }
          }}
        >
          <ListItemIcon sx={{ color: '#94a3b8', minWidth: 40 }}>
            <Logout />
          </ListItemIcon>
          <ListItemText 
            primary="Log Out" 
            primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }}
          />
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default Sidebar;