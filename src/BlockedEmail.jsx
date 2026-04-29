import { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"
import IconButton from "@mui/material/IconButton"
import Sidebar from "./components/Sidebar"

export default function BlockedEmail() {
  const [showModal, setShowModal] = useState(false)

  const emails = [
    "tarik_abaza@hotmail.com",
    "tarik_abaza@hotmail.com",
    "tarik_abaza@hotmail.com",
    "tarik_abaza@hotmail.com",
    "tarik_abaza@hotmail.com",
    "tarik_abaza@hotmail.com",
    "tarik_abaza@hotmail.com",
    "tarik_abaza@hotmail.com",
    "tarik_abaza@hotmail.com",
    "tarik_abaza@hotmail.com",
  ]

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>

      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flex: 1, backgroundColor: "#fff" }}>

        {/* Top Bar */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: "1px solid #eee" }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>Blocked E-Mail</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box sx={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#555", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "12px" }}>TA</Box>
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>Tarik Abaza</Typography>
              <Typography sx={{ fontSize: "11px", color: "#888" }}>Admin</Typography>
            </Box>
          </Box>
        </Box>

        {/* Content */}
        <Box sx={{ padding: "20px 24px" }}>
          <Button
            variant="contained"
            onClick={() => setShowModal(true)}
            sx={{ backgroundColor: "#4ecdc4", "&:hover": { backgroundColor: "#3dbdb5" }, display: "block", marginLeft: "auto", marginBottom: "16px", textTransform: "none" }}
          >
            Block E-Mail
          </Button>

          {/* Email List */}
          <Box sx={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden" }}>
            {emails.map((email, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid #eee" }}>
                <Typography sx={{ fontSize: "14px" }}>{email}</Typography>
                <Box sx={{ display: "flex", gap: "4px" }}>
                  <IconButton size="small">✏️</IconButton>
                  <IconButton size="small">🗑️</IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", borderRadius: "12px", padding: "24px", width: 340 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
            <Typography sx={{ backgroundColor: "#4ecdc4", color: "#fff", padding: "6px 16px", borderRadius: "8px", fontSize: "15px", fontWeight: 500 }}>Block User</Typography>
            <IconButton onClick={() => setShowModal(false)}>✕</IconButton>
          </Box>
          <Typography sx={{ fontSize: "13px", color: "#666", marginBottom: "6px" }}>Email Address</Typography>
          <TextField fullWidth size="small" placeholder="-" sx={{ marginBottom: "16px" }} />
          <Typography sx={{ fontSize: "13px", color: "#666", marginBottom: "6px" }}>Blocked Reason</Typography>
          <TextField fullWidth size="small" placeholder="-" sx={{ marginBottom: "16px" }} />
          <Button fullWidth variant="contained" sx={{ backgroundColor: "#4ecdc4", "&:hover": { backgroundColor: "#3dbdb5" }, textTransform: "none" }}>
            Submit
          </Button>
        </Box>
      </Modal>

    </Box>
  )
}