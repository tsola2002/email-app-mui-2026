import React from 'react'
import { Box, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Sidebar from './components/Sidebar'
import MailboxesPage from './components/MailboxesPage'

const theme = createTheme({
  typography: { fontFamily: 'Roboto, sans-serif' },
  palette: { background: { default: '#f5f7fa' } },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar active="Mailboxes" />
        <MailboxesPage />
      </Box>
    </ThemeProvider>
  )
}