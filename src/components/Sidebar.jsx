<<<<<<< HEAD
import React from 'react'
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PeopleIcon from '@mui/icons-material/People'
import BusinessIcon from '@mui/icons-material/Business'
import InboxIcon from '@mui/icons-material/Inbox'
import LogoutIcon from '@mui/icons-material/Logout'
import UnsubscribeOutlinedIcon from '@mui/icons-material/UnsubscribeOutlined'
import DeleteIcon from '@mui/icons-material/Delete';



const drawerWidth = 240; // Ensure this is defined

const navItems = [
  { label: 'E-Mail',         icon: <EmailIcon fontSize="small" /> },
  { label: 'User List',      icon: <PeopleIcon fontSize="small" /> },
  { label: 'Companies',      icon: <BusinessIcon fontSize="small" /> },
  { label: 'Mailboxes',      icon: <InboxIcon fontSize="small" /> },
  { label: 'Blocked E-Mail', icon: <UnsubscribeOutlinedIcon fontSize="small" /> },
  { label: 'Trash',      icon: <DeleteIcon fontSize="small" /> }
]

export default function Sidebar({ active = 'Mailboxes' }) {
=======
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
import Support from '@mui/icons-material/Support';
import People from '@mui/icons-material/People';
import Business from '@mui/icons-material/Business';
import MailOutline from '@mui/icons-material/MailOutline';
import Block from '@mui/icons-material/Block';
import DeleteIcon from '@mui/icons-material/Delete';
import Logout from '@mui/icons-material/Logout';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import logo from '../assets/logo.png';

const Sidebar = () => {
  const location = useLocation();
  
  const [emailDropdownOpen, setEmailDropdownOpen] = useState(true);

  const handleEmailClick = () => {
    setEmailDropdownOpen(!emailDropdownOpen);
  };

  const emailDropdownItems = [
    { 
      icon: () => <span style={{fontSize: 20, fontWeight: 'bold'}}>$</span>, 
      label: 'Sales', 
      path: '/sales'
    },
    { 
      icon: Support, 
      label: 'Support', 
      path: '/support'
    },
  ];

  const otherMenuItems = [
    { 
      icon: People, 
      label: 'User List', 
      path: '/user-list'
    },
    { 
      icon: Business, 
      label: 'Companies', 
      path: '/companies'
    },
    { 
      icon: MailOutline, 
      label: 'Mailboxes', 
      path: '/mailboxes'
    },
    { 
      icon: Block, 
      label: 'Blocked E-Mail', 
      path: '/blocked-email'
    },
      { 
      icon: DeleteIcon, 
      label: 'Trash', 
      path: '/trash' 
    },
  ];

  const isEmailSection = location.pathname === '/' || 
                         location.pathname.startsWith('/email') ||
                         location.pathname.startsWith('/all-emails') ||
                         location.pathname.startsWith('/could-not-respond') ||
                         location.pathname.startsWith('/draft') ||
                         location.pathname.startsWith('/annotated') ||
                         location.pathname.startsWith('/manually-responded') ||
                         location.pathname.startsWith('/auto-respond') ||
                         location.pathname.startsWith('/ignored-deleted');

>>>>>>> origin/master
  return (
    <Drawer
      variant="permanent"
      sx={{
<<<<<<< HEAD
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          color: '#333',
          borderRight: 'none',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* 1. FIXED LOGO: Removed inner padding so it starts from the left container edge */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        padding: '32px 24px' // Added more vertical padding (32px) to make it look "bigger"
      }}>
        <img
          src="/src/assets/logo.png"
          alt="logo"
          style={{ 
            height: 55,       // Increased height slightly for a "bold" look
            width: 'auto', 
            display: 'block' 
          }}
        />
      </Box>

      {/* 2. REMOVED TOP DIVIDER */}

      {/* Nav Items */}
      <List disablePadding sx={{ flex: 1 }}>
        {navItems.map((item) => {
          const isActive = item.label === active
          return (
            <ListItemButton
              key={item.label}
              selected={isActive}
              sx={{
                px: 3, // Increased padding to line up with the logo
                py: 1.4,
                borderLeft: isActive ? '4px solid #1cb48a' : '4px solid transparent',
                color: '#555',
                '&.Mui-selected': {
                  backgroundColor: 'rgba(28,180,138,0.08)',
                  color: '#1cb48a',
                  '& .MuiListItemIcon-root': { color: '#1cb48a' },
                },
                '&.Mui-selected:hover': { backgroundColor: 'rgba(28,180,138,0.12)' },
                '&:hover': { backgroundColor: '#f5f5f5' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: isActive ? '#1cb48a' : '#999' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ fontSize: 14, fontWeight: isActive ? 600 : 400 }} 
              />
            </ListItemButton>
          )
        })}
      </List>

      {/* 3. REMOVED BOTTOM DIVIDER */}
      <Box sx={{ mt: 'auto', pb: 2 }}>
        <ListItemButton
          sx={{
            px: 3,
            py: 1.5,
            color: '#999',
            '&:hover': { backgroundColor: '#f5f5f5', color: '#333' },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: '#999' }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Log Out" primaryTypographyProps={{ fontSize: 14 }} />
        </ListItemButton>
      </Box>
    </Drawer>
  )
}
=======
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          border: 'none',
          boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
          background: '#fff'
        },
      }}
    >
      {/* Logo */}
      <Box 
        component={Link} 
        to="/"
        sx={{ 
          p: 3, 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          textDecoration: 'none',
          cursor: 'pointer',
          mb: -3,
        }}
      >
        <Box 
          component="img"
          src={logo}
          alt="Reply AI Logo"
          sx={{ 
            width: 180, 
            height: 100,
            objectFit: 'contain'
          }}
        />
        
      </Box>

      <List sx={{ px: 2 }}>
        {/* E-Mail Dropdown */}
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

        {/* E-Mail Dropdown Items */}
        <Collapse in={emailDropdownOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {emailDropdownItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <ListItem
                  key={index}
                  component={Link}
                  to={item.path}
                  sx={{
                    pl: 4,
                    py: 1,
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
                  <ListItemIcon sx={{ 
                    color: isActive ? '#00C9B7' : '#94a3b8',
                    minWidth: 36
                  }}>
                    <IconComponent />
                  </ListItemIcon>
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

        {/* Other Menu Items */}
        {otherMenuItems.map((item, index) => {
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

      {/* Logout */}
      <Box sx={{ mt: 'auto', p: 2 }}>
        <ListItem
          component={Link}
          to="/login"
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
>>>>>>> origin/master
