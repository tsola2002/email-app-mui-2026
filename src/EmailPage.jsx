import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Avatar,
  TextField,
  InputAdornment,
  MenuItem,
  Pagination,
  Menu,
  IconButton
} from '@mui/material';
import Search from '@mui/icons-material/Search';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Sidebar from './components/Sidebar';
import FilterTab from './components/FilterTab';

// Filter tabs config - these are the routed tabs at the top
const filterTabs = [
  { label: 'All E-Mails', color: '#00C9B7', path: '/all-emails' },
  { label: 'Could Not Respond', color: '#F59E0B', path: '/could-not-respond' },
  { label: 'Draft', color: '#3B82F6', path: '/draft' },
  { label: 'Annotated', color: '#EC4899', path: '/annotated' },
  { label: 'Manually Responded', color: '#F97316', path: '/manually-responded' },
  { label: 'Auto Respond', color: '#10B981', path: '/auto-respond' },
  { label: 'Spam', color: '#DC2626', path: '/spam' },
  { label: 'Ignored/Deleted', color: '#EF4444', path: '/ignored-deleted' }
];

const EmailPage = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  // User dropdown menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Determine active filter based on current URL
  const currentPath = location.pathname;
  const activeFilter = filterTabs.find(tab => currentPath.includes(tab.path))?.label || 'All E-Mails';

  return (
    <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, minHeight: '100vh' }}>
      <Sidebar />
      
      <Box sx={{ flexGrow: 1, p: 3, background: '#f8fafc' }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 4,
          pb: 2,
          borderBottom: '1px solid #e2e8f0'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b', letterSpacing: '-0.5px' }}>
            E-Mail
          </Typography>
          
          {/* User Profile - Clickable Dropdown */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar 
              sx={{ 
                bgcolor: '#334155', 
                width: 38, 
                height: 38,
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            >
              TA
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b', lineHeight: 1.2 }}>
                Tarik Abaza
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.75rem' }}>
                Admin
              </Typography>
            </Box>
            
            <IconButton onClick={handleClick} size="small">
              <KeyboardArrowDown sx={{ color: '#64748b', fontSize: 20 }} />
            </IconButton>
            
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem component={Link} to="/profile" onClick={handleClose}>
                Profile
              </MenuItem>
              <MenuItem component={Link} to="/settings" onClick={handleClose}>
                Settings
              </MenuItem>
              <MenuItem component={Link} to="/login" onClick={handleClose}>
                Log Out
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* FILTER TABS - ROUTED LINKS */}
        <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {filterTabs.map((tab) => (
            <FilterTab
              key={tab.label}
              label={tab.label}
              color={tab.color}
              path={tab.path}
              isActive={activeFilter === tab.label}
            />
          ))}
        </Box>

        {/* Search and Filter Row */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 2 }}>
          <TextField
            select
            size="small"
            defaultValue="Filter By"
            sx={{ 
              width: 140,
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                backgroundColor: '#fff',
                fontSize: '0.85rem'
              }
            }}
          >
            <MenuItem value="Filter By">Filter By</MenuItem>
            <MenuItem value="Date">Date</MenuItem>
            <MenuItem value="Status">Status</MenuItem>
          </TextField>

          <TextField
            placeholder="Search Listing"
            size="small"
            sx={{ 
              flexGrow: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                backgroundColor: '#fff',
                fontSize: '0.85rem'
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#94a3b8', fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* OUTLET - Renders the active filter page */}
        <Outlet />

        {/* Pagination */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mt: 3,
          px: 1
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
              Show
            </Typography>
            <TextField
              select
              size="small"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(e.target.value)}
              sx={{ 
                width: 70,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                  fontSize: '0.85rem'
                }
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </TextField>
          </Box>

          <Pagination
            count={5}
            page={page}
            onChange={(e, value) => setPage(value)}
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#64748b',
                fontWeight: 500,
                '&.Mui-selected': {
                  backgroundColor: '#00C9B7',
                  color: '#fff',
                  fontWeight: 600
                }
              }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EmailPage;