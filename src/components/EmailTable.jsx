import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip,
  Box
} from '@mui/material';
import FilterList from '@mui/icons-material/FilterList';
import StatusChip from './StatusChip';
import { emailData, statusConfig } from '../constants';

const EmailTable = () => {
  return (
    <TableContainer 
      component={Paper} 
      sx={{ 
        borderRadius: '16px', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        border: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f8fafc' }}>
            <TableCell sx={{ fontWeight: 600, color: '#475569', fontSize: '0.75rem', py: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                MAIL TYPE
                <FilterList sx={{ fontSize: 14, color: '#94a3b8' }} />
              </Box>
            </TableCell>
            <TableCell sx={{ fontWeight: 600, color: '#475569', fontSize: '0.75rem', py: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                CUSTOMER NAME
                <FilterList sx={{ fontSize: 14, color: '#94a3b8' }} />
              </Box>
            </TableCell>
            <TableCell sx={{ fontWeight: 600, color: '#475569', fontSize: '0.75rem', py: 2 }}>
              {/* Subject column */}
            </TableCell>
            <TableCell sx={{ fontWeight: 600, color: '#475569', fontSize: '0.75rem', py: 2, textAlign: 'right' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
                RECEIVED
                <FilterList sx={{ fontSize: 14, color: '#94a3b8' }} />
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {emailData.map((email) => (
            <TableRow 
              key={email.id}
              sx={{ 
                '&:hover': { backgroundColor: '#f8fafc' },
                borderLeft: `4px solid ${statusConfig[email.type]?.color || '#ccc'}`,
                transition: 'all 0.2s ease'
              }}
            >
              <TableCell sx={{ py: 2.5 }}>
                <StatusChip status={email.type} />
              </TableCell>
              <TableCell sx={{ py: 2.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b', mb: 0.3 }}>
                  {email.customer}
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>
                  {email.email}
                </Typography>
              </TableCell>
              <TableCell sx={{ py: 2.5 }}>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b', mb: 0.5 }}>
                    {email.subject}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748b', display: 'block' }}>
                    {email.snippet}
                  </Typography>
                  {email.hasBadge && (
                    <Chip
                      label={email.badgeText}
                      size="small"
                      sx={{
                        mt: 1,
                        backgroundColor: '#FEE2E2',
                        color: '#EF4444',
                        fontWeight: 600,
                        fontSize: '0.65rem',
                        height: 22,
                        borderRadius: '4px'
                      }}
                    />
                  )}
                </Box>
              </TableCell>
              <TableCell sx={{ py: 2.5, textAlign: 'right' }}>
                <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                  {email.received}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmailTable;