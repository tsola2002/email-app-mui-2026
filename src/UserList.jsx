import { useState } from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    IconButton,
    Button,
    Select,
    MenuItem,
    FormControl,
    Drawer,
    Divider,
    Collapse,
    Tooltip,
    Chip,
} from "@mui/material";
import {
    Delete,
    Add,
    Email,
    ExpandMore,
    ExpandLess,
    Business,
    Inbox,
    Block,
    Logout,
    PersonOutline,
    SmartToy,
} from "@mui/icons-material";

const users = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: "Tarik Abaza",
    email: `Tarik_abaza@hotmail.com`,
    initials: "TA",
}));

const navItems = [
    {
        label: "E-Mail",
        icon: <Email fontSize="small" />,
        expandable: true,
        children: ["Inbox", "Sent", "Drafts"],
    },
    { label: "User List", icon: <PersonOutline fontSize="small" />, active: true },
    { label: "Companies", icon: <Business fontSize="small" /> },
    { label: "Mailboxes", icon: <Inbox fontSize="small" /> },
    { label: "Blocked E-Mail", icon: <Block fontSize="small" /> },
];

const DRAWER_WIDTH = 200;

export default function App() {
    const [emailExpanded, setEmailExpanded] = useState(false);
    const [permission, setPermission] = useState("");
    const [userList, setUserList] = useState(users);

    const handleDelete = (id) => {
        setUserList((prev) => prev.filter((u) => u.id !== id));
    };

    return (
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f6fa", fontFamily: "'DM Sans', sans-serif" }}>
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: DRAWER_WIDTH,
                        boxSizing: "border-box",
                        bgcolor: "#fff",
                        borderRight: "1px solid #eef0f5",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    },
                }}
            >
                <Box>
                    {/* Logo */}
                    <Box sx={{ px: 2.5, py: 2.5, display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                            sx={{
                                width: 34,
                                height: 34,
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #00c9b1 0%, #0097a7 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <SmartToy sx={{ color: "#fff", fontSize: 18 }} />
                        </Box>
                        <Typography
                            sx={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 700,
                                fontSize: 15,
                                color: "#1a2340",
                                letterSpacing: 0.2,
                            }}
                        >
                            REPLY AI
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 1 }} />

                    {/* Nav Items */}
                    <List dense sx={{ px: 1 }}>
                        {navItems.map((item) => (
                            <Box key={item.label}>
                                <ListItem
                                    button
                                    onClick={item.expandable ? () => setEmailExpanded((p) => !p) : undefined}
                                    sx={{
                                        borderRadius: "8px",
                                        mb: 0.3,
                                        px: 1.5,
                                        py: 0.8,
                                        bgcolor: item.active ? "#e8faf8" : "transparent",
                                        color: item.active ? "#00b39f" : "#5a6480",
                                        "&:hover": { bgcolor: item.active ? "#e8faf8" : "#f5f6fa" },
                                        transition: "background 0.15s",
                                    }}
                                >
                                    <Box sx={{ mr: 1.2, display: "flex", color: item.active ? "#00b39f" : "#9aa3bf" }}>
                                        {item.icon}
                                    </Box>
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontSize: 13,
                                            fontWeight: item.active ? 600 : 500,
                                            fontFamily: "'DM Sans', sans-serif",
                                        }}
                                    />
                                    {item.expandable && (
                                        <Box sx={{ color: "#9aa3bf" }}>
                                            {emailExpanded ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
                                        </Box>
                                    )}
                                </ListItem>

                                {item.expandable && (
                                    <Collapse in={emailExpanded} timeout="auto" unmountOnExit>
                                        <List dense sx={{ pl: 3 }}>
                                            {item.children?.map((child) => (
                                                <ListItem
                                                    key={child}
                                                    button
                                                    sx={{
                                                        borderRadius: "8px",
                                                        px: 1.5,
                                                        py: 0.5,
                                                        color: "#5a6480",
                                                        "&:hover": { bgcolor: "#f5f6fa" },
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={child}
                                                        primaryTypographyProps={{
                                                            fontSize: 12.5,
                                                            fontFamily: "'DM Sans', sans-serif",
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                )}
                            </Box>
                        ))}
                    </List>
                </Box>

                {/* Logout */}
                <Box sx={{ px: 1, pb: 2 }}>
                    <Divider sx={{ mb: 1 }} />
                    <ListItem
                        button
                        sx={{
                            borderRadius: "8px",
                            px: 1.5,
                            py: 0.8,
                            color: "#5a6480",
                            "&:hover": { bgcolor: "#fff0f0", color: "#e05252" },
                            transition: "all 0.15s",
                        }}
                    >
                        <Box sx={{ mr: 1.2, display: "flex" }}>
                            <Logout fontSize="small" />
                        </Box>
                        <ListItemText
                            primary="Log Out"
                            primaryTypographyProps={{
                                fontSize: 13,
                                fontWeight: 500,
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        />
                    </ListItem>
                </Box>
            </Drawer>

            {/* Main Content */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                {/* Top bar */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        px: 4,
                        py: 2,
                        bgcolor: "#fff",
                        borderBottom: "1px solid #eef0f5",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: 22,
                            color: "#1a2340",
                            letterSpacing: -0.3,
                        }}
                    >
                        User List
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Avatar
                            sx={{
                                width: 34,
                                height: 34,
                                bgcolor: "#3d3d3d",
                                fontSize: 13,
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            TA
                        </Avatar>
                        <Box>
                            <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#1a2340", lineHeight: 1.2, fontFamily: "'DM Sans', sans-serif" }}>
                                Tarik Abaza
                            </Typography>
                            <Typography sx={{ fontSize: 11, color: "#9aa3bf", fontFamily: "'DM Sans', sans-serif" }}>
                                Admin
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Content Area */}
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
                                    bgcolor: "#fff",
                                    borderRadius: "8px",
                                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#e0e4ef" },
                                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#00b39f" },
                                    fontSize: 13,
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
                            sx={{
                                bgcolor: "#00b39f",
                                color: "#fff",
                                borderRadius: "8px",
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: 13,
                                px: 2.5,
                                py: 0.85,
                                textTransform: "none",
                                boxShadow: "0 2px 10px rgba(0,179,159,0.25)",
                                "&:hover": { bgcolor: "#009e8e", boxShadow: "0 4px 14px rgba(0,179,159,0.35)" },
                                transition: "all 0.2s",
                            }}
                        >
                            New User
                        </Button>
                    </Box>

                    {/* User List */}
                    <Box
                        sx={{
                            bgcolor: "#fff",
                            borderRadius: "12px",
                            border: "1px solid #eef0f5",
                            overflow: "hidden",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                        }}
                    >
                        <List disablePadding>
                            {userList.map((user, index) => (
                                <Box key={user.id}>
                                    <ListItem
                                        sx={{
                                            px: 3,
                                            py: 1.4,
                                            "&:hover": { bgcolor: "#f9fafb" },
                                            transition: "background 0.12s",
                                        }}
                                        secondaryAction={
                                            <Tooltip title="Delete user" placement="left">
                                                <IconButton
                                                    edge="end"
                                                    size="small"
                                                    onClick={() => handleDelete(user.id)}
                                                    sx={{
                                                        color: "#cdd2e0",
                                                        "&:hover": { color: "#e05252", bgcolor: "#fff0f0" },
                                                        transition: "all 0.15s",
                                                    }}
                                                >
                                                    <Delete fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                        }
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    sx={{
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: "#1a2340",
                                                        fontFamily: "'DM Sans', sans-serif",
                                                    }}
                                                >
                                                    {user.name}
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography
                                                    sx={{
                                                        fontSize: 12.5,
                                                        color: "#9aa3bf",
                                                        fontFamily: "'DM Sans', sans-serif",
                                                    }}
                                                >
                                                    {user.email}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    {index < userList.length - 1 && (
                                        <Divider sx={{ mx: 3, borderColor: "#f0f2f7" }} />
                                    )}
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
            </Box>
        </Box>
    );
}