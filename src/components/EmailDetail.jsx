import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Chip,
  IconButton
} from '@mui/material';
import Close from '@mui/icons-material/Close';
import { statusConfig } from "../constanstes.js"; // Make sure this path matches your file

const EmailDetail = ({ email }) => {
  // Default email data if none provided
  const defaultEmail = {
    id: 1,
    type: 'IGNORED/DELETED',
    from: 'Tarik Abaza',
    email: 'tarik_abaza@hotmail.com',
    to: 'Me',
    date: '2024, September 16, 08:00 AM',
    subject: 'Your Contract Is Started',
    body: `Dear Sales Team,

I've noticed a discrepancy in the latest invoice you sent us. It appears that we were charged twice for the same service. Can you please look into this as soon as possible?

Thank you,
John Doe
Customer Support Lead
Customer Inc.`,
    deletedBy: 'John Doe'
  };

  const data = email || defaultEmail;
  const config = statusConfig[data.type] || statusConfig['DRAFT'];
  const StatusIcon = config.icon;

  return (
    <Box sx={{ 
      background: '#fff', 
      borderRadius: '16px', 
      p: 4, 
      boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
      maxWidth: 800,
      margin: '0 auto'
    }}>
      {/* Header Row */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        {/* Sender Info */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: '#334155', width: 48, height: 48, fontWeight: 600 }}>
            {data.from.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1e293b' }}>
              {data.from}
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748b' }}>
              From: {data.email} • To: {data.to}
            </Typography>
          </Box>
        </Box>

        {/* Date & Close */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#94a3b8' }}>
            {data.date}
          </Typography>
          <IconButton 
            size="small"
            sx={{ color: '#94a3b8' }}
          >
            <Close />
          </IconButton>
        </Box>
      </Box>

      {/* Status Chip */}
      <Box sx={{ mb: 3 }}>
        <Chip
          icon={<StatusIcon sx={{ fontSize: 14 }} />}
          label={data.type}
          size="small"
          sx={{
            backgroundColor: config.bgColor,
            color: config.color,
            fontWeight: 600,
            fontSize: '0.7rem',
            height: 24,
            borderRadius: '4px',
            '& .MuiChip-icon': { color: config.color, ml: 0.5 }
          }}
        />
        <Typography variant="caption" sx={{ color: '#94a3b8', ml: 1 }}>
          By: {data.from} • Date: 07/08/2024
        </Typography>
      </Box>

      {/* Subject */}
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b', mb: 3 }}>
        {data.subject}
      </Typography>

      {/* Email Body */}
      <Box sx={{ mb: 4 }}>
        {data.body.split('\n').map((paragraph, index) => (
          <Typography 
            key={index} 
            variant="body2" 
            sx={{ 
              color: '#475569', 
              mb: paragraph.trim() === '' ? 2 : 1,
              lineHeight: 1.7,
              whiteSpace: 'pre-line'
            }}
          >
            {paragraph}
          </Typography>
        ))}
      </Box>

      {/* Deleted Info */}
      {data.deletedBy && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1e293b', mb: 1 }}>
            Deleted
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            Deleted By: {data.deletedBy}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default EmailDetail;