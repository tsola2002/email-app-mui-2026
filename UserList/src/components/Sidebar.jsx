import { useState } from "react";
import {
    Box, Typography, List, ListItem, ListItemText,
    Drawer, Divider, Collapse,
} from "@mui/material";
import {
    Email, ExpandMore, ExpandLess, Business, Inbox,
    Block, Logout, PersonOutline, SmartToy,
} from "@mui/icons-material";

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

export default function Sidebar() {
    const [emailExpanded, setEmailExpanded] = useState(false);

    return (
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
                            width: 34, height: 34, borderRadius: "50%",
                            background: "linear-gradient(135deg, #00c9b1 0%, #0097a7 100%)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                    >
                        <SmartToy sx={{ color: "#fff", fontSize: 18 }} />
                    </Box>
                    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#1a2340", letterSpacing: 0.2 }}>
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
                                    borderRadius: "8px", mb: 0.3, px: 1.5, py: 0.8,
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
                                    primaryTypographyProps={{ fontSize: 13, fontWeight: item.active ? 600 : 500, fontFamily: "'DM Sans', sans-serif" }}
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
                                                sx={{ borderRadius: "8px", px: 1.5, py: 0.5, color: "#5a6480", "&:hover": { bgcolor: "#f5f6fa" } }}
                                            >
                                                <ListItemText
                                                    primary={child}
                                                    primaryTypographyProps={{ fontSize: 12.5, fontFamily: "'DM Sans', sans-serif" }}
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
                        borderRadius: "8px", px: 1.5, py: 0.8, color: "#5a6480",
                        "&:hover": { bgcolor: "#fff0f0", color: "#e05252" },
                        transition: "all 0.15s",
                    }}
                >
                    <Box sx={{ mr: 1.2, display: "flex" }}><Logout fontSize="small" /></Box>
                    <ListItemText
                        primary="Log Out"
                        primaryTypographyProps={{ fontSize: 13, fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}
                    />
                </ListItem>
            </Box>
        </Drawer>
    );
}