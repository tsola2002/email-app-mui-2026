import React from 'react';
import { 
  Dialog, DialogTitle, DialogContent, TextField, 
  Grid, Typography, Button, IconButton, Box 
} from '@mui/material';
import { Close } from '@mui/icons-material';

const brandGreen = '#22A78E';

const CompanyView = ({ open, handleClose }) => {
  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: { borderRadius: '12px', overflow: 'hidden' }
      }}
    >
      
      <DialogTitle sx={{ 
        bgcolor: brandGreen, 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        fontWeight: 500
      }}>
        New Company
        <IconButton onClick={handleClose} sx={{ color: 'white' }}>
          <Close />
        </IconButton>
      </DialogTitle>

      
      <DialogContent sx={{ p: 4, mt: 2 }}>
        <Grid container spacing={3}>
          {[
            { label: "Company Name", placeholder: "-" },
            { label: "SMTP Server", placeholder: "-" },
            { label: "SMTP Port", placeholder: "-" },
            { label: "SMTP Username", placeholder: "-" },
            { label: "SMTP Password", placeholder: "-", type: "password" },
            { label: "Company Logo URL", placeholder: "-" },
            { label: "Max Responses Per Day", placeholder: "-" },
          ].map((field, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 500, color: '#555' }}>
                {field.label}
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                placeholder={field.placeholder} 
                type={field.type || "text"}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
          <Button 
            variant="contained" 
            onClick={handleClose} 
            sx={{ 
              bgcolor: brandGreen, 
              '&:hover': { bgcolor: '#1B8A75' },
              textTransform: 'none',
              px: 6,
              py: 1,
              borderRadius: '8px',
              boxShadow: 'none'
            }}
          >
            Submit
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
};

export default CompanyView;