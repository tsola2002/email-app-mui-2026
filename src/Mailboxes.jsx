import React, { useState } from "react";
import { Box, Paper, Typography, Stack, Chip } from "@mui/material";

const initialEmails = [
  {
    id: 1,
    sender: "client@company.com",
    subject: "Project Update",
    preview: "Please review the latest changes...",
    time: "11:20 AM",
  },
  {
    id: 2,
    sender: "team@work.com",
    subject: "Meeting Reminder",
    preview: "Don't forget our standup meeting...",
    time: "9:00 AM",
  },
];

const Mailboxes = () => {
  const [emails, setEmails] = useState(() => {
    // Load from localStorage if available, otherwise use initialEmails
    const stored = JSON.parse(localStorage.getItem("inbox"));
    // return stored ? JSON.parse(stored) : initialEmails;
    return stored || initialEmails;
  });

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Inbox
      </Typography>

      <Stack spacing={2}>
        {emails.map((email) => (
          <Paper
            key={email.id}
            sx={{
              p: 2,
              borderRadius: 2,
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontWeight: 600 }}>
                {email.sender}
              </Typography>

              <Chip label="INBOX" size="small" />
            </Box>

            <Typography sx={{ fontWeight: 600, mt: 1 }}>
              {email.subject}
            </Typography>

            <Typography sx={{ color: "#64748b", fontSize: "0.85rem" }}>
              {email.preview}
            </Typography>

            <Typography sx={{ fontSize: "0.75rem", color: "#94a3b8", mt: 1 }}>
              {email.time}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Mailboxes;