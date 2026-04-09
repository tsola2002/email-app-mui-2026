import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import UserList from "./UserList";

export default function App() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f6fa", fontFamily: "'DM Sans', sans-serif" }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header title="User List" userName="Tarik Abaza" role="Admin" initials="TA" />
        <UserList />
      </Box>
    </Box>
  );
}