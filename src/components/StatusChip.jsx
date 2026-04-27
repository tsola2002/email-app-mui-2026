import React from 'react';
import { Chip } from '@mui/material';
import { statusConfig } from '../constants';

const StatusChip = ({ status }) => {
  const config = statusConfig[status] || statusConfig['DRAFT'];
  const IconComponent = config.icon;
  
  return (
    <Chip
      icon={<IconComponent sx={{ fontSize: 16 }} />}
      label={status}
      sx={{
        backgroundColor: config.bgColor,
        color: config.color,
        fontWeight: 600,
        fontSize: '0.7rem',
        height: 28,
        borderRadius: '6px',
        '& .MuiChip-icon': {
          color: config.color,
          ml: 0.5
        }
      }}
    />
  );
};

export default StatusChip;