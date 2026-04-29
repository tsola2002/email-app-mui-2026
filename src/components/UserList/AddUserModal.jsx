import { useState } from "react";
import {
    Box, Typography, TextField, Button, Checkbox,
    FormControlLabel, Modal, IconButton, Divider,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const PERMISSIONS = [
    { key: "adminUsers",          label: "Can Administer Users" },
    { key: "adminCompanies",      label: "Can Administer Companies" },
    { key: "adminMailboxes",      label: "Can Administer Mailboxes" },
    { key: "respondEmails",       label: "Can Respond to Emails" },
    { key: "adminContacts",       label: "Can Administer Contacts" },
    { key: "adminBlockedEmails",  label: "Can Administer Blocked Emails" },
];

const defaultForm = {
    email: "", firstName: "", lastName: "", password: "",
    active: null,
    permissions: {
        adminUsers: false, adminCompanies: false, adminMailboxes: false,
        respondEmails: false, adminContacts: false, adminBlockedEmails: false,
    },
};

export default function AddUserModal({ open, onClose, onSubmit }) {
    const [form, setForm] = useState(defaultForm);

    const handleField = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handlePermission = (key) =>
        setForm((prev) => ({
            ...prev,
            permissions: { ...prev.permissions, [key]: !prev.permissions[key] },
        }));

    const handleSubmit = () => {
        onSubmit?.(form);
        setForm(defaultForm);
        onClose();
    };

    const inputSx = {
        "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            fontSize: 13,
            fontFamily: "'DM Sans', sans-serif",
            "& fieldset": { borderColor: "#e0e4ef" },
            "&:hover fieldset": { borderColor: "#00b39f" },
            "&.Mui-focused fieldset": { borderColor: "#00b39f" },
        },
        "& .MuiInputLabel-root": {
            fontSize: 12,
            fontFamily: "'DM Sans', sans-serif",
            color: "#9aa3bf",
            "&.Mui-focused": { color: "#00b39f" },
        },
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "90%", sm: 480 },
                    bgcolor: "#fff", borderRadius: "12px",
                    overflow: "hidden", outline: "none",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        bgcolor: "#00b39f", px: 2.5, py: 1.8,
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}
                >
                    <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>
                        New User
                    </Typography>
                    <IconButton size="small" onClick={onClose} sx={{ color: "#fff", p: 0.5 }}>
                        <Close fontSize="small" />
                    </IconButton>
                </Box>

                {/* Body */}
                <Box sx={{ px: 3, py: 2.5 }}>
                    {/* Fields grid */}
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, mb: 2 }}>
                        <TextField size="small" label="E-Mail" name="email" value={form.email} onChange={handleField} sx={inputSx} />
                        <TextField size="small" label="First Name" name="firstName" value={form.firstName} onChange={handleField} sx={inputSx} />
                        <TextField size="small" label="Last Name" name="lastName" value={form.lastName} onChange={handleField} sx={inputSx} />
                        <TextField size="small" label="Password" name="password" type="password" value={form.password} onChange={handleField} sx={inputSx} />
                    </Box>

                    {/* Active */}
                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: 12, color: "#9aa3bf", fontFamily: "'DM Sans', sans-serif", mb: 0.5 }}>
                            Active
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            {["Yes", "No"].map((val) => (
                                <FormControlLabel
                                    key={val}
                                    label={<Typography sx={{ fontSize: 13, fontFamily: "'DM Sans', sans-serif", color: "#1a2340" }}>{val}</Typography>}
                                    control={
                                        <Checkbox
                                            size="small"
                                            checked={form.active === val}
                                            onChange={() => setForm((prev) => ({ ...prev, active: val }))}
                                            sx={{ color: "#cdd2e0", "&.Mui-checked": { color: "#00b39f" }, p: 0.5 }}
                                        />
                                    }
                                    sx={{ m: 0 }}
                                />
                            ))}
                        </Box>
                    </Box>

                    <Divider sx={{ mb: 2, borderColor: "#f0f2f7" }} />

                    {/* Permissions */}
                    <Box sx={{ mb: 2.5 }}>
                        <Typography sx={{ fontSize: 12, color: "#9aa3bf", fontFamily: "'DM Sans', sans-serif", mb: 1 }}>
                            Permissions
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                            {PERMISSIONS.map(({ key, label }) => (
                                <FormControlLabel
                                    key={key}
                                    label={<Typography sx={{ fontSize: 13, fontFamily: "'DM Sans', sans-serif", color: "#1a2340" }}>{label}</Typography>}
                                    control={
                                        <Checkbox
                                            size="small"
                                            checked={form.permissions[key]}
                                            onChange={() => handlePermission(key)}
                                            sx={{ color: "#cdd2e0", "&.Mui-checked": { color: "#00b39f" }, p: 0.5 }}
                                        />
                                    }
                                    sx={{ m: 0 }}
                                />
                            ))}
                        </Box>
                    </Box>

                    {/* Submit */}
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            sx={{
                                bgcolor: "#00b39f", color: "#fff", borderRadius: "8px",
                                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13,
                                px: 3.5, py: 0.9, textTransform: "none",
                                boxShadow: "0 2px 10px rgba(0,179,159,0.25)",
                                "&:hover": { bgcolor: "#009e8e" },
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}