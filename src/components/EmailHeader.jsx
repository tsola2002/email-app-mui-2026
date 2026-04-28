import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';

const EmailHeader = ({ emailData, responseText, onClose }) => {
  const [open, setOpen] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  // Function to close/delete the email
  const performClose = (actionType = 'archive') => {
    setOpen(false);
    setTimeout(() => {
      if (actionType === 'delete') {
        setSnackbarMessage('Email thread deleted');
        setSnackbarSeverity('error');
      } else {
        setSnackbarMessage('Email thread archived');
        setSnackbarSeverity('success');
      }
      setSnackbarOpen(true);
      if (onClose) onClose();
    }, 320);
  };

  const handleClose = () => {
    performClose('archive');
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  // Menu item handlers
  const handleArchive = () => {
    handleMenuClose();
    performClose('archive');
  };

  const handleMarkUnread = () => {
    handleMenuClose();
    setSnackbarMessage('Marked as unread');
    setSnackbarSeverity('info');
    setSnackbarOpen(true);
  };

  const handleDeleteFromMenu = () => {
    handleMenuClose();
    performClose('delete');
  };

  // Safe data extraction with fallbacks
  const senderName = emailData?.from || "Tarik Abaza";
  const senderRole = "Admin"; // Adding role
  const senderEmail = emailData?.fromEmail || "tarik.abazaa@hotmail.com";
  const recipient = emailData?.to || "Me";
  const body = emailData?.body || "";
  
  // Current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return (
    <>
      <Collapse in={open} timeout={300} unmountOnExit>
        <Card sx={{ mb: 3, boxShadow: 1, borderRadius: 2 }}>
          <CardHeader
            title={
              <Box>
                {/* Name and Role together */}
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, flexWrap: 'wrap' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {senderName}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#666' }}>
                    {senderRole}
                  </Typography>
                </Box>
                
                {/* Email and date/time row */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: 0.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    From: {senderEmail} · To: {recipient}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {formattedDate}, {formattedTime}
                  </Typography>
                </Box>
              </Box>
            }
            action={
              <Box>
                <IconButton onClick={handleMenuOpen} size="small" aria-label="more options">
                  <MoreVertIcon />
                </IconButton>
                <IconButton onClick={handleClose} size="small" aria-label="close">
                  <CloseIcon />
                </IconButton>
              </Box>
            }
            sx={{ pb: 0 }}
          />
          <CardContent>
            {/* Green AUTO RESPOND Badge */}
            <Box sx={{ mb: 2 }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  bgcolor: '#4caf50',
                  color: 'white',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  fontWeight: 'bold',
                  fontSize: '0.7rem',
                  display: 'inline-block'
                }}
              >
                AUTO RESPOND
              </Typography>
            </Box>
            
            <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 2 }}>
              Your Contract Is Started
            </Typography>
            
            {/* Original Email Body */}
            <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', color: 'text.primary', mb: 3 }}>
              {body}
            </Typography>

            {/* Divider between email and response */}
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                ↓↓↓
              </Typography>
            </Divider>

            {/* Response Section - inside same card */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, fontSize: '1rem' }}>
                Response
              </Typography>
              <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', color: 'text.primary', lineHeight: 1.8 }}>
                {responseText}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Collapse>

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          elevation: 3,
          sx: { minWidth: 160 }
        }}
      >
        <MenuItem onClick={handleArchive}>
          Archive
        </MenuItem>
        <MenuItem onClick={handleMarkUnread}>
          Mark as unread
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleDeleteFromMenu} sx={{ color: 'error.main' }}>
          Delete
        </MenuItem>
      </Menu>

      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={3000} 
        onClose={handleSnackbarClose} 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default EmailHeader;