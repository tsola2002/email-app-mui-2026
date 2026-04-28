import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import BlockIcon from '@mui/icons-material/Block';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import InboxIcon from '@mui/icons-material/Inbox';
import MarkunreadIcon from '@mui/icons-material/Markunread';

const Sidebar = ({ isMobile = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [mailboxOpen, setMailboxOpen] = useState(true);

  const handleMailboxClick = () => {
    setMailboxOpen(!mailboxOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Check if currently on a mailbox page
  const isOnMailboxPage = () => {
    return location.pathname === '/mailbox1' || location.pathname === '/mailbox2';
  };

  // Check which mailbox is active
  const isMailbox1Active = () => {
    return location.pathname === '/mailbox1';
  };

  const isMailbox2Active = () => {
    return location.pathname === '/mailbox2';
  };

  // Check other routes
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#fff' }}>
      {/* Logo Section */}
      <Box sx={{ 
        py: 4,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #e0e0e0',
        mb: 1
      }}>
        <img 
          src="/reply-ai-logo.png" 
          alt="REPLY AI" 
          style={{ 
            height: '80px',
            width: 'auto',
            objectFit: 'contain'
          }} 
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'none',
            fontSize: '32px'
          }}
        >
          REPLY AI
        </Typography>
      </Box>

      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        <List sx={{ px: 2 }}>
          {/* E-Mail Dropdown - Highlights when on any mailbox page */}
          <ListItem disablePadding sx={{ display: 'block', mb: 1 }}>
            <ListItemButton 
              onClick={handleMailboxClick} 
              sx={{ 
                borderRadius: 2,
                backgroundColor: isOnMailboxPage() ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
              }}
            >
              <ListItemIcon>
                <InboxIcon color={isOnMailboxPage() ? 'primary' : 'action'} />
              </ListItemIcon>
              <ListItemText 
                primary="E-Mail" 
                sx={{ 
                  color: isOnMailboxPage() ? 'primary.main' : 'text.primary'
                }}
              />
              {mailboxOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={mailboxOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {/* Mailbox 1 - Highlights ONLY when on Mailbox 1 */}
                <ListItemButton 
                  sx={{ pl: 4, borderRadius: 2, ml: 2, mb: 0.5 }}
                  onClick={() => handleNavigation('/mailbox1')}
                  selected={isMailbox1Active()}
                >
                  <ListItemIcon>
                    <MarkunreadIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Mailbox 1" />
                </ListItemButton>
                {/* Mailbox 2 - Highlights ONLY when on Mailbox 2 */}
                <ListItemButton 
                  sx={{ pl: 4, borderRadius: 2, ml: 2 }}
                  onClick={() => handleNavigation('/mailbox2')}
                  selected={isMailbox2Active()}
                >
                  <ListItemIcon>
                    <MarkunreadIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Mailbox 2" />
                </ListItemButton>
              </List>
            </Collapse>
          </ListItem>

          {/* User List - Highlights when active */}
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => handleNavigation('/users')} 
              selected={isActive('/users')}
              sx={{ borderRadius: 2 }}
            >
              <ListItemIcon>
                <PersonIcon color={isActive('/users') ? 'primary' : 'action'} />
              </ListItemIcon>
              <ListItemText primary="User List" />
            </ListItemButton>
          </ListItem>

          {/* Companies - Highlights when active */}
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => handleNavigation('/companies')} 
              selected={isActive('/companies')}
              sx={{ borderRadius: 2 }}
            >
              <ListItemIcon>
                <BusinessIcon color={isActive('/companies') ? 'primary' : 'action'} />
              </ListItemIcon>
              <ListItemText primary="Companies" />
            </ListItemButton>
          </ListItem>

          {/* Mailboxes - Highlights when active */}
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => handleNavigation('/mailboxes')} 
              selected={isActive('/mailboxes')}
              sx={{ borderRadius: 2 }}
            >
              <ListItemIcon>
                <EmailIcon color={isActive('/mailboxes') ? 'primary' : 'action'} />
              </ListItemIcon>
              <ListItemText primary="Mailboxes" />
            </ListItemButton>
          </ListItem>

          {/* Blocked E-Mail - Highlights when active */}
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => handleNavigation('/blocked')} 
              selected={isActive('/blocked')}
              sx={{ borderRadius: 2 }}
            >
              <ListItemIcon>
                <BlockIcon color={isActive('/blocked') ? 'primary' : 'action'} />
              </ListItemIcon>
              <ListItemText primary="Blocked E-Mail" />
            </ListItemButton>
          </ListItem>

          {/* Trash - Highlights when active */}
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => handleNavigation('/trash')} 
              selected={isActive('/trash')}
              sx={{ borderRadius: 2 }}
            >
              <ListItemIcon>
                <DeleteIcon color={isActive('/trash') ? 'primary' : 'action'} />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      {/* Log Out Button - NO HIGHLIGHT (stays red) */}
      <Box sx={{ 
        borderTop: '1px solid #e0e0e0',
        p: 2,
        bgcolor: '#fff'
      }}>
        <ListItem disablePadding>
          <ListItemButton 
            onClick={() => handleNavigation('/logout')} 
            sx={{ 
              borderRadius: 2, 
              color: 'error.main',
              '&:hover': {
                bgcolor: 'error.light',
                color: 'white',
                '& .MuiListItemIcon-root': {
                  color: 'white'
                }
              }
            }}
          >
            <ListItemIcon sx={{ color: 'error.main' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );
};

export default Sidebar;