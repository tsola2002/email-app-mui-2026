import { Box, AppBar, Toolbar, Typography, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/Inbox";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import LogoutIcon from "@mui/icons-material/Logout";
import DraftIcon from "@mui/icons-material/Article";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function CouldNotRespond() {
  const drawerWidth = 220;

  const Sidebar = () => {
    const [openMail, setOpenMail] = useState(false);
    const editorRef = useRef(null);
    const quillInstance = useRef(null);
    const [value, setValue] = useState("");

    useEffect(() => {
      if (editorRef.current && !quillInstance.current) {
        // Register custom icons
        const icons = Quill.import("ui/icons");
        icons["undo"] = "↺";
        icons["redo"] = "↻";
        icons.divider = "—";
        icons.delete = "🗑️";

        // Initialize Quill
        quillInstance.current = new Quill(editorRef.current, {
          theme: "snow",
          modules: {
            toolbar: {
              container: "#custom-toolbar",
              handlers: {
                undo() {
                  this.quill.history.undo();
                },
                redo() {
                  this.quill.history.redo();
                },
                delete() {
                  this.quill.setText("");
                }
              }
            }
          }
        });

        // Set initial content
        if (value) {
          quillInstance.current.root.innerHTML = value;
        }

        // Listen for changes
        quillInstance.current.on("text-change", () => {
          const html = quillInstance.current.root.innerHTML;
          setValue(html);
          console.log(html);
        });
      }
    }, []);

    // Update content when value changes externally
    useEffect(() => {
      if (quillInstance.current && value !== quillInstance.current.root.innerHTML) {
        quillInstance.current.root.innerHTML = value;
      }
    }, [value]);

    return (
      <>
        {/* Sidebar */}
        <Box
          sx={{
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            bgcolor: "#fff",
            borderRight: "1px solid #eee",
            p: 1,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src="src/assets/image 1.png"
            alt="logo"
            sx={{ width: 100, mb: 2, ml: 3 }}
          />

          <List>
            {/* Email dropdown */}
            <ListItemButton
              onClick={() => setOpenMail(!openMail)}
              sx={{ color: "#22A78E", mt: 2, "&:hover": { bgcolor: "#EAFAF7" } }}
            >
              <ListItemIcon sx={{ color: "#22A78E" }}>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="E-mail" slotProps={{ primary: { fontSize: 14 } }} />
              <ExpandMoreIcon
                sx={{
                  transform: openMail ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.3s",
                }}
              />
            </ListItemButton>

            <Collapse in={openMail} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemButton
                  sx={{
                    color: "#22A78E",
                    pl: 4,
                    "&:hover": { bgcolor: "#EAFAF7" },
                  }}
                >
                  <ListItemText primary="Mailbox 1" slotProps={{ primary: { fontSize: 14 } }} />
                </ListItemButton>

                <ListItemButton
                  sx={{
                    color: "#22A78E",
                    pl: 4,
                    "&:hover": { bgcolor: "#EAFAF7" },
                  }}
                >
                  <ListItemText primary="Mailbox 2" slotProps={{ primary: { fontSize: 14 } }} />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Other items */}
            <ListItemButton sx={{ color: "#B3B3B3", mt: 2, "&:hover": { bgcolor: "#EAFAF7" } }}>
              <ListItemIcon sx={{ color: "#B3B3B3" }}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="User List" slotProps={{ primary: { fontSize: 14 } }} />
            </ListItemButton>

            <ListItemButton sx={{ color: "#B3B3B3", mt: 2, "&:hover": { bgcolor: "#EAFAF7" } }}>
              <ListItemIcon sx={{ color: "#B3B3B3" }}>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary="Companies" slotProps={{ primary: { fontSize: 14 } }} />
            </ListItemButton>

            <ListItemButton sx={{ color: "#B3B3B3", mt: 2, "&:hover": { bgcolor: "#EAFAF7" } }}>
              <ListItemIcon sx={{ color: "#B3B3B3" }}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Mailboxes" slotProps={{ primary: { fontSize: 14 } }} />
            </ListItemButton>

            <ListItemButton sx={{ color: "#B3B3B3", mt: 2, "&:hover": { bgcolor: "#EAFAF7" } }}>
              <ListItemIcon sx={{ color: "#B3B3B3" }}>
                <UnsubscribeIcon />
              </ListItemIcon>
              <ListItemText primary="Blocked E-mail" slotProps={{ primary: { fontSize: 14 } }} />
            </ListItemButton>

          </List>

          <Box sx={{ flexGrow: 1 }} />

          <ListItemButton sx={{ color: "#B3B3B3", "&:hover": { bgcolor: "#EAFAF7" } }}>
            <ListItemIcon sx={{ color: "#B3B3B3" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" slotProps={{ primary: { fontSize: 14 } }} />
          </ListItemButton>
        </Box>

        {/* AppBar */}
        <AppBar
          position="fixed"
          sx={{
            top: 0,
            left: `${drawerWidth}px`,
            width: `calc(100% - ${drawerWidth}px)`,
            bgcolor: "#fff",
            color: "#2E3534",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            borderBottom: "1px solid #eee",
            padding: "3px",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">E-Mail</Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "#2E3534",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 600,
                }}>

              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                  Tarik Abaza
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#B3B3B3" }}>
                  Admin
                </Typography>
              </Box>

              <ExpandMoreIcon sx={{ color: "#B3B3B3", cursor: "pointer" }} />

            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Body Content */}
        <Box
          sx={{
            ml: `${drawerWidth}px`,
            mt: "64px",
            p: 3,
            bgcolor: "#fff",
            minHeight: "calc(100vh - 64px)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}>

          {/* 1️⃣ Email Header Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1.5,
            }}>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "#2E3534",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 16,
                }}>

              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.2 }}>
                <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#2E3534"}}>
                  Tarik Abaza
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#B3B3B3" }}>
                  From: tarik_abaza@hotmail.com . To: Me
                </Typography>
              </Box>
            </Box>

            {/* RIGHT: Date + X */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ fontSize: 12, color: "#5a5858" }}>
                2024, September 16, 08:00 AM
              </Typography>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}>
                X
              </Box>
            </Box>
          </Box>

          {/* 2️⃣ Status Row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              ml: 0,
            }}>

            <DraftIcon sx={{ color: "#2515d3", width: 20, height: 20 }} />
            <Typography sx={{ fontSize: 12, fontWeight: 600, color: "#2515d3" }}>
              DRAFT
            </Typography>
          </Box>

          <Box sx={{ display: "flex", color: "#2E3534", alignItems: "center", ml: 0 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
              Your Contract Is Started
            </Typography>
          </Box>

          {/* 3️⃣ Email Body Content */}
          <Box>
            <Typography
              sx={{
                fontSize: 14,
                color: "#666666",
                whiteSpace: "pre-line",
                lineHeight: 1.6,
                textAlign: "left",
                ml: 0,
              }}
            >
              {`Dear Sales Team,

I've noticed a discrepancy in the latest invoice you sent us. It appears that we were charged twice for the same service. Can you please look into this as soon as 
possible?

Thank you,
John Doe
Customer Support Lead
Customer Inc.`}
            </Typography>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                mb: 1,
                color: "#2E3534",
                textAlign: "left",
              }}
            >
              Draft
            </Typography>

            <Box
              sx={{
                height: "400px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #ccc",
              }}
            >
              <div id="custom-toolbar">
                {/* ROW 1 */}
                <div className="toolbar-row">
                  <span className="ql-formats">
                    <button className="ql-bold" />
                    <button className="ql-italic" />
                    <button className="ql-underline" />
                    <button className="ql-strike" />
                  </span>

                  <span className="ql-formats">
                    <button className="ql-script" value="super" />
                    <button className="ql-script" value="sub" />
                  </span>

                  <span className="ql-formats">
                    <button className="ql-blockquote" />
                  </span>

                  <span className="ql-formats">
                    <select className="ql-font" />
                    <select className="ql-size" />
                    <select className="ql-header">
                      <option value="1"></option>
                      <option value="2"></option>
                      <option value="3"></option>
                    </select>
                  </span>
                </div>

                {/* ROW 2 */}
                <div className="toolbar-row">
                  <span className="ql-formats">
                    <button className="ql-undo">↺</button>
                    <button className="ql-redo">↻</button>
                  </span>

                  <span className="ql-formats">
                    <button className="ql-list" value="ordered" />
                    <button className="ql-list" value="bullet" />
                  </span>

                  <span className="ql-formats">
                    <button className="ql-indent" value="-1" />
                    <button className="ql-indent" value="+1" />
                  </span>

                  <span className="ql-formats">
                    <button className="ql-link" />
                    <button className="ql-image" />
                    <button className="ql-video" />
                  </span>

                  <span className="ql-formats">
                    <button className="ql-delete">🗑</button>
                    <button className="ql-clean" />
                  </span>
                </div>
              </div>

              {/* Direct Quill editor container */}
              <div ref={editorRef} style={{ height: "calc(100% - 42px)" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 2,
                gap: 2,
              }}
            >
              <Button variant="contained" sx={{
                bgcolor: "#22A78E", fontSize: 12, "&:hover": { bgcolor: "#1e846f" },
                textTransform: "none", paddingX: 3, paddingY: 1
              }}>
                Save Draft
              </Button>

              <Button variant="contained" sx={{
                bgcolor: "#22A78E", fontSize: 12, "&:hover": { bgcolor: "#1e846f" },
                textTransform: "none", paddingX: 3, paddingY: 1
              }}>
                Send Draft
              </Button>
            </Box>
          </Box>

        </Box>
      </>
    );
  }

  return <Sidebar />;
}

export default CouldNotRespond;