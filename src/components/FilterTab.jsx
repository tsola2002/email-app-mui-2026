import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const FilterTab = ({ label, color, path, isActive }) => (
  <Button
    component={Link}
    to={path}
    sx={{
      mr: 1,
      mb: 1,
      px: 2,
      py: 0.8,
      borderRadius: '4px',        // 4px border radius
      backgroundColor: isActive ? color : 'transparent',
      color: isActive ? '#fff' : color,
      border: `1.5px solid ${color}`,
      fontWeight: 600,
      fontSize: '0.75rem',
      textTransform: 'none',
      textDecoration: 'none',     // Remove Link underline
      '&:hover': {
        backgroundColor: isActive ? color : `${color}15`,
      },
      transition: 'all 0.2s ease'
    }}
  >
    {label}
  </Button>
);

export default FilterTab;