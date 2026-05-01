import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Topbar from './Topbar'
import MailboxRow from './MailboxRow'

const initialMailboxes = [
  { id: 1,  name: 'Mailbox 1' },
  { id: 2,  name: 'Mailbox 1' },
  { id: 3,  name: 'Mailbox 1' },
  { id: 4,  name: 'Mailbox 1' },
  { id: 5,  name: 'Mailbox 1' },
  { id: 6,  name: 'Mailbox 1' },
  { id: 7,  name: 'Mailbox 1' },
  { id: 8,  name: 'Mailbox 1' },
  { id: 9,  name: 'Mailbox 1' },
  { id: 10, name: 'Mailbox 1' },
]

export default function MailboxesPage() {
  const [mailboxes, setMailboxes] = useState(initialMailboxes)
  const handleDelete = (mailbox) => setMailboxes((prev) => prev.filter((m) => m.id !== mailbox.id))

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100vh', overflow: 'hidden' }}>
      <Topbar title="Mailboxes" userName="Tarik Abara" />
      <Box sx={{ flex: 1, overflowY: 'auto', p: 3, backgroundColor: '#f0f0f0' }}>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mb: 2.5 }}>
         
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: '#1cb48a',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: 13,
              px: 2.5,
              py: 1,
              borderRadius: '6px',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#17a37b', boxShadow: 'none' },
            }}
          >
            New Mailbox
          </Button>
        </Box>

        {/* Rows with gray gap between them */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {mailboxes.map((mailbox) => (
            <MailboxRow key={mailbox.id} mailbox={mailbox} onDelete={handleDelete} />
          ))}
        </Box>

      </Box>
    </Box>
  )
}