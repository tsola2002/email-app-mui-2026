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
  return (
    <Drawer
      variant="permanent"
      sx={{
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
