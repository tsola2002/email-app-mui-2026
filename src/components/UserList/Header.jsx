import { Box, Typography, Avatar } from "@mui/material";

export default function Header({ title = "User List", userName = "Tarik Abaza", role = "Admin", initials = "TA" }) {
    return (
        <Box
            sx={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                px: 4, py: 2, bgcolor: "#fff", borderBottom: "1px solid #eef0f5",
            }}
        >
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 22, color: "#1a2340", letterSpacing: -0.3 }}>
                {title}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar sx={{ width: 34, height: 34, bgcolor: "#3d3d3d", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
                    {initials}
                </Avatar>
                <Box>
                    <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#1a2340", lineHeight: 1.2, fontFamily: "'DM Sans', sans-serif" }}>
                        {userName}
                    </Typography>
                    <Typography sx={{ fontSize: 11, color: "#9aa3bf", fontFamily: "'DM Sans', sans-serif" }}>
                        {role}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}