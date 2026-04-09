import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserList from "./components/UserList";

export default function App() {
    return (
        <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f6fa" }}>
            <Sidebar />
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <Header />
                <UserList />
            </Box>
        </Box>
    );
}