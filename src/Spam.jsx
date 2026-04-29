import React, { useState } from "react";
import { Box, Paper, Typography, Button, Stack, Chip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// 🧠 Initial spam data
const initialSpamEmails = [
  {
    id: 1,
    sender: "scam@lottery-win.com",
    subject: "You have WON $1,000,000!!!",
    preview: "Click immediately to claim your prize before it expires...",
    time: "10:45 AM",
  },
  {
    id: 2,
    sender: "promo@cheapdeals.net",
    subject: "🔥 Exclusive offer just for you",
    preview: "Limited-time discount on luxury items you never asked for...",
    time: "9:15 AM",
  },
  {
    id: 3,
    sender: "unknown@security-alert.com",
    subject: "Account Suspended - Action Required",
    preview: "We detected suspicious activity. Login to verify...",
    time: "Yesterday",
  },
];

// 🎬 Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Spam = () => {
  const [emails, setEmails] = useState(initialSpamEmails);

  const handleNotSpam = (email) => {
    const inbox = JSON.parse(localStorage.getItem("inbox")) || [];
    localStorage.setItem("inbox", JSON.stringify([...inbox, email]));
    setEmails((prev) => prev.filter((e) => e.id !== email.id));
  };

  const handleDelete = (id) => {
    setEmails((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <Box sx={{ mt: 2 }}>
      {/* Header */}
      <Typography
        sx={{
          fontWeight: 700,
          color: "#1e293b",
          mb: 2,
          fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
        }}
      >
        Spam Messages
      </Typography>

      {/* Empty state */}
      {emails.length === 0 ? (
        <Typography sx={{ color: "#64748b" }}>
          No spam messages 🎉
        </Typography>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <Stack spacing={2}>
            <AnimatePresence>
              {emails.map((email) => (
                <motion.div
                  key={email.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  transition={{ duration: 0.25 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      border: "1px solid #e2e8f0",
                      backgroundColor: "#fff5f5",
                      transition: "0.2s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                      },
                    }}
                  >
                    {/* Top row */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>
                        {email.sender}
                      </Typography>

                      <Chip
                        label="SPAM"
                        size="small"
                        sx={{
                          backgroundColor: "#DC2626",
                          color: "#fff",
                          fontWeight: 600,
                        }}
                      />
                    </Box>

                    {/* Subject */}
                    <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                      {email.subject}
                    </Typography>

                    {/* Preview */}
                    <Typography sx={{ color: "#64748b", fontSize: "0.85rem", mb: 1 }}>
                      {email.preview}
                    </Typography>

                    {/* Footer */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: { xs: "flex-start", sm: "center" },
                        justifyContent: "space-between",
                        gap: 1,
                      }}
                    >
                      <Typography sx={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                        {email.time}
                      </Typography>

                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={1}
                        sx={{ width: { xs: "100%", sm: "auto" } }}
                      >
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => handleNotSpam(email)}
                          sx={{
                            textTransform: "none",
                            borderColor: "#10b981",
                            color: "#10b981",
                            fontSize: "0.75rem",
                          }}
                        >
                          Not Spam
                        </Button>

                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => handleDelete(email.id)}
                          sx={{
                            textTransform: "none",
                            borderColor: "#ef4444",
                            color: "#ef4444",
                            fontSize: "0.75rem",
                          }}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </AnimatePresence>
          </Stack>
        </motion.div>
      )}
    </Box>
  );
};

export default Spam;