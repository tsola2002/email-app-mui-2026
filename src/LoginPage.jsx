import { Box, Button, TextField, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgPattern1 from "/src/assets/Group1.png";
import bgPattern2 from "/src/assets/Group2.png";
import logo from "/src/assets/Logo.png";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/EmailPage");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>

      {/* LEFT SIDE */}
      <Box
        sx={{
          flex: 1,
          background: "linear-gradient(135deg, #2dd4bf, #14b8a6)",
          color: "#fff",
          p: 6,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <img
          src={bgPattern1}
          alt="bg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            opacity: 0.2
          }}
        />

        <img
          src={bgPattern2}
          alt="bg2"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            opacity: 0.2
          }}
        />

        <Typography variant="h3" sx={{ fontWeight: 700, mt: 20 }}>
          Welcome!
        </Typography>

        <Typography sx={{ mt: 2, opacity: 0.9 }}>
          Log in to unlock AI-powered personalization of E-Mails.
        </Typography>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          p: 4
        }}
      >
        <img src={logo} alt="logo" style={{ width: 120, marginBottom: 20 }} />

        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Log In
        </Typography>

        <TextField
          fullWidth
          placeholder="Type Your User ID Here"
          sx={{ mb: 2, maxWidth: 320 }}
        />

        <TextField
          fullWidth
          type="password"
          placeholder="Type Your Password Here"
          sx={{ mb: 1, maxWidth: 320 }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", width: 320, mb: 2 }}>
          <FormControlLabel control={<Checkbox />} label="Keep me logged in" />
          <Typography sx={{ fontSize: 12, color: "#14b8a6", cursor: "pointer" }}>
            Forgot your password?
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            maxWidth: 320,
            bgcolor: "#14b8a6",
            "&:hover": { bgcolor: "#0f766e" },
            textTransform: "none",
            py: 1.2
          }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
}
