import React from 'react'
import { Box, Typography, Avatar } from '@mui/material'

export default function Topbar({ title = 'Mailboxes', userName = 'Tarik Abara' }) {
  const initials = userName.split(' ').map((n) => n[0]).join('')
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3, py: 1.5, backgroundColor: '#fff', borderBottom: '1px solid #e0e0e0', flexShrink: 0 }}>
      <Typography sx={{ fontWeight: 700, fontSize: 20, color: '#1a1a1a' }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
        <Avatar sx={{ width: 34, height: 34, backgroundColor: '#333', fontSize: 13 }}>{initials}</Avatar>
        <Box>
          <Typography sx={{ fontSize: 13, fontWeight: 500, color: '#1a1a1a', lineHeight: 1.3 }}>{userName}</Typography>
          <Typography sx={{ fontSize: 11, color: '#888', lineHeight: 1.3 }}>Admin</Typography>
        </Box>
      </Box>
    </Box>
  )
}