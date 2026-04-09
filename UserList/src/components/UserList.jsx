import { useState } from "react";
import AddUserModal from "./AddUserModal";
import {
    Box, Typography, List, ListItem, ListItemText,
    IconButton, Button, Select, MenuItem, FormControl,
    Divider, Tooltip,
} from "@mui/material";
import { Delete, Add } from "@mui/icons-material";

const initialUsers = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: "Tarik Abaza",
    email: "Tarik_abaza@hotmail.com",
}));

export default function UserList() {
    const [permission, setPermission] = useState("");
    const [userList, setUserList] = useState(initialUsers);
    const [modalOpen, setModalOpen] = useState(false);

    const handleAddUser = (formData) => {
        const newUser = {
             id: Date.now(),
             name: `${formData.firstName} ${formData.lastName}`,
             email: formData.email,
         };
         setUserList((prev) => [...prev, newUser]);
    };

    const handleDelete = (id) => setUserList((prev) => prev.filter((u) => u.id !== id));

    return (
        <Box sx={{ flex: 1, px: 4, py: 3 }}>
            {/* Toolbar */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <FormControl size="small" sx={{ minWidth: 170 }}>
                    <Select
                        value={permission}
                        onChange={(e) => setPermission(e.target.value)}
                        displayEmpty
                        renderValue={(val) => (
                            <Typography sx={{ fontSize: 13, color: val ? "#1a2340" : "#9aa3bf", fontFamily: "'DM Sans', sans-serif" }}>
                                {val || "Change Permission"}
                            </Typography>
                        )}
                        sx={{
                            bgcolor: "#fff", borderRadius: "8px",
                            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#e0e4ef" },
                            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#00b39f" },
                        }}
                    >
                        <MenuItem value="admin" sx={{ fontSize: 13 }}>Admin</MenuItem>
                        <MenuItem value="editor" sx={{ fontSize: 13 }}>Editor</MenuItem>
                        <MenuItem value="viewer" sx={{ fontSize: 13 }}>Viewer</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() => setModalOpen(true)}
                    sx={{
                        bgcolor: "#00b39f", color: "#fff", borderRadius: "8px",
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13,
                        px: 2.5, py: 0.85, textTransform: "none",
                        boxShadow: "0 2px 10px rgba(0,179,159,0.25)",
                        "&:hover": { bgcolor: "#009e8e", boxShadow: "0 4px 14px rgba(0,179,159,0.35)" },
                        transition: "all 0.2s",
                    }}
                >
                    New User
                </Button>

            </Box>
            
            <AddUserModal
                 open={modalOpen}
                 onClose={() => setModalOpen(false)}
                 onSubmit={handleAddUser}
            />

            {/* List */}
            <Box sx={{ bgcolor: "#fff", borderRadius: "12px", border: "1px solid #eef0f5", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <List disablePadding>
                    {userList.map((user, index) => (
                        <Box key={user.id}>
                            <ListItem
                                sx={{ px: 3, py: 1.4, "&:hover": { bgcolor: "#f9fafb" }, transition: "background 0.12s" }}
                                secondaryAction={
                                    <Tooltip title="Delete user" placement="left">
                                        <IconButton
                                            edge="end"
                                            size="small"
                                            onClick={() => handleDelete(user.id)}
                                            sx={{ color: "#cdd2e0", "&:hover": { color: "#e05252", bgcolor: "#fff0f0" }, transition: "all 0.15s" }}
                                        >
                                            <Delete fontSize="small" />
                                        </IconButton>
                                    </Tooltip>
                                }
                            >
                                <ListItemText
                                    primary={<Typography sx={{ fontSize: 14, fontWeight: 600, color: "#1a2340", fontFamily: "'DM Sans', sans-serif" }}>{user.name}</Typography>}
                                    secondary={<Typography sx={{ fontSize: 12.5, color: "#9aa3bf", fontFamily: "'DM Sans', sans-serif" }}>{user.email}</Typography>}
                                />
                            </ListItem>
                            {index < userList.length - 1 && <Divider sx={{ mx: 3, borderColor: "#f0f2f7" }} />}
                        </Box>
                    ))}

                    {userList.length === 0 && (
                        <Box sx={{ py: 6, textAlign: "center" }}>
                            <Typography sx={{ color: "#9aa3bf", fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
                                No users found.
                            </Typography>
                        </Box>
                    )}
                </List>
            </Box>
        </Box>
    );
}