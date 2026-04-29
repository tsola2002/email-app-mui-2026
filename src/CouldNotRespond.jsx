import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";
import ReactQuill from "react-quill";
import { useState } from "react";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";

function CouldNotRespond() {
  const [value, setValue] = useState("");

  const icons = Quill.import("ui/icons");
  icons["undo"] = "↺";
  icons["redo"] = "↻";
  icons.divider = "—";
  icons.delete = "🗑️";

  const modules = {
    toolbar: {
      container: "#custom-toolbar",
      handlers: {
        undo() { this.quill.history.undo(); },
        redo() { this.quill.history.redo(); },
        delete() { this.quill.setText(""); },
        divider: function () {
          const range = this.quill.getSelection();
          this.quill.insertEmbed(range.index, "divider", true);
        }
      }
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      {/* Top Header */}
      

      {/* Main Content - Centered */}
      <Box sx={{ maxWidth: 800, mx: 3, p: 3 }}>
        
        {/* Email Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: "#2E3534", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontSize: 16 }}>
              TA
            </Box>
            <Box>
              <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#2E3534" }}>Tarik Abaza</Typography>
              <Typography sx={{ fontSize: 12, color: "#B3B3B3" }}>From: tarik_abaza@hotmail.com • To: Me</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: 12, color: "#5a5858" }}>2024, September 16, 08:00 AM</Typography>
            <Box sx={{ cursor: "pointer", color: '#999', fontSize: 16 }}>✕</Box>
          </Box>
        </Box>

        {/* Status */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <CommentsDisabledIcon sx={{ color: "#E2CB00", width: 20, height: 20 }} />
          <Typography sx={{ fontSize: 12, fontWeight: 600, color: "#E2CB00" }}>COULD NOT RESPOND</Typography>
        </Box>

        {/* Subject */}
        <Typography sx={{ fontWeight: 600, fontSize: 15, color: "#2E3534", mb: 2 }}>Your Contract Is Started</Typography>

        {/* Body */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontSize: 14, color: "#666666", whiteSpace: "pre-line", lineHeight: 1.6 }}>
            {`Dear Sales Team,

I've noticed a discrepancy in the latest invoice you sent us. It appears that we were charged twice for the same service. Can you please look into this as soon as possible?

Thank you,
John Doe
Customer Support Lead
Customer Inc.`}
          </Typography>
        </Box>

        {/* Reason Box */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1, color: "#2E3534" }}>Reason For Failure To Respond</Typography>
          <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: "#F8E7E7", border: "1px solid #FF0000" }}>
            <Typography sx={{ fontSize: 14, color: "#FF0000", lineHeight: 1.6, fontStyle: "italic" }}>
              Invalid or missing customer details. The system could not find sufficient information about the customer to generate an automatic response.
            </Typography>
          </Box>
        </Box>

        {/* Editor */}
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1, color: "#2E3534" }}>Type And Send Response</Typography>
          <Box sx={{ height: "400px", borderRadius: "12px", overflow: "hidden", border: "1px solid #ccc", bgcolor: '#fff' }}>
            <div id="custom-toolbar">
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
              <div className="toolbar-row">
                <span className="ql-formats">
                  <button className="ql-undo">↺</button>
                  <button className="ql-redo">↻</button>
                </span>
                <span className="ql-formats">
                  <button className="ql-list" value="ordered" />
                  <button className="ql-list" value="divider">-</button>
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
            <ReactQuill
              theme="snow"
              modules={modules}
              value={value}
              onChange={(content) => setValue(content)}
              style={{ height: "calc(100% - 80px)" }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button variant="contained" sx={{ bgcolor: "#22A78E", fontSize: 12, "&:hover": { bgcolor: "#1e846f" }, textTransform: "none", px: 3, py: 1 }}>
              Send Draft
            </Button>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default CouldNotRespond;