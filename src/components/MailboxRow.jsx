import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

export default function MailboxRow({ mailbox, onEdit, onDelete }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 2,
        backgroundColor: '#fff',
        mb: '6px',
        transition: 'background-color 0.15s',
        '&:hover': { backgroundColor: '#f0f0f0' },
      }}
    >
      <Typography sx={{ fontSize: 14, color: '#333' }}>{mailbox.name}</Typography>
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        <IconButton size="small" onClick={() => onEdit && onEdit(mailbox)}
          sx={{ color: '#bbb', '&:hover': { color: '#555', backgroundColor: '#e8e8e8' } }}>
          <EditIcon sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton size="small" onClick={() => onDelete && onDelete(mailbox)}
          sx={{ color: '#bbb', '&:hover': { color: '#d32f2f', backgroundColor: '#fdecea' } }}>
          <DeleteIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>
    </Box>
  )
}