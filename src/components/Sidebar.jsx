import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
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
    { icon: People, label: 'User List', path: '/user-list' },
    { icon: Business, label: 'Companies', path: '/companies' },
    { icon: MailOutline, label: 'Mailboxes', path: '/mailboxes' },
    { icon: Block, label: 'Blocked E-Mail', path: '/blocked-email' },
    { icon: DeleteIcon, label: 'Trash', path: '/trash' },
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
          background: '#fff'
        },
      }}
    >
      <Box 
        component={Link} 
        to="/"
        sx={{ 
          p: 3, display: 'flex', alignItems: 'center', gap: 2,
          textDecoration: 'none', cursor: 'pointer', mb: -3,
        }}
      >
        <Box component="img" src={logo} alt="Reply AI Logo"
          sx={{ width: 180, height: 100, objectFit: 'contain' }}
        />
      </Box>

      <List sx={{ px: 2 }}>
        <ListItem
          onClick={handleEmailClick}
          sx={{
            mb: 0.5, borderRadius: '10px',
            backgroundColor: isEmailSection ? '#E0F7FA' : 'transparent',
            color: isEmailSection ? '#00C9B7' : '#64748b',
            cursor: 'pointer',
            '&:hover': { backgroundColor: isEmailSection ? '#E0F7FA' : '#f1f5f9' },
            py: 1.2
          }}
        >
          <ListItemIcon sx={{ color: isEmailSection ? '#00C9B7' : '#94a3b8', minWidth: 40 }}>
            <Email />
          </ListItemIcon>
          <ListItemText primary="E-Mail" 
            primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: isEmailSection ? 600 : 500 }}
          />
          {emailDropdownOpen ? (
            <KeyboardArrowDown sx={{ fontSize: 18, color: '#00C9B7' }} />
          ) : (
            <KeyboardArrowRight sx={{ fontSize: 18, color: '#94a3b8' }} />
          )}
        </ListItem>

        <Collapse in={emailDropdownOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {emailDropdownItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <ListItem key={index} component={Link} to={item.path}
                  sx={{
                    pl: 4, py: 1, borderRadius: '8px',
                    backgroundColor: isActive ? '#E0F7FA' : 'transparent',
                    color: isActive ? '#00C9B7' : '#64748b',
                    textDecoration: 'none', cursor: 'pointer',
                    '&:hover': { backgroundColor: isActive ? '#E0F7FA' : '#f1f5f9' },
                    mb: 0.5
                  }}
                >
                  <ListItemIcon sx={{ color: isActive ? '#00C9B7' : '#94a3b8', minWidth: 36 }}>
                    <IconComponent />
                  </ListItemIcon>
                  <ListItemText primary={item.label}
                    primaryTypographyProps={{ fontSize: '0.85rem', fontWeight: isActive ? 600 : 500 }}
                  />
                </ListItem>
              );
            })}
          </List>
        </Collapse>

        {otherMenuItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={index} component={Link} to={item.path}
              sx={{
                mb: 0.5, borderRadius: '10px',
                backgroundColor: isActive ? '#E0F7FA' : 'transparent',
                color: isActive ? '#00C9B7' : '#64748b',
                textDecoration: 'none', cursor: 'pointer',
                '&:hover': { backgroundColor: isActive ? '#E0F7FA' : '#f1f5f9' },
                py: 1.2
              }}
            >
              <ListItemIcon sx={{ color: isActive ? '#00C9B7' : '#94a3b8', minWidth: 40 }}>
                <IconComponent />
              </ListItemIcon>
              <ListItemText primary={item.label}
                primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: isActive ? 600 : 500 }}
              />
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
        <ListItem component={Link} to="/login"
          sx={{
            borderRadius: '10px', color: '#64748b',
            textDecoration: 'none', cursor: 'pointer',
            '&:hover': { backgroundColor: '#f1f5f9' }
          }}
        >
          <ListItemIcon sx={{ color: '#94a3b8', minWidth: 40 }}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Log Out"
            primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }}
          />
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default Sidebar;