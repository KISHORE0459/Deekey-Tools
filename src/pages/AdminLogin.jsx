import { useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import AppButton from "../components/AppButton";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getEndPoint } from "../components/functions/getEndPoint";
import { HOME_PAGE_ROUTE } from "../routes/url";

const AdminLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const endPoint = getEndPoint();

  const handleBack = () => {
    navigate(HOME_PAGE_ROUTE);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${endPoint}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_name: userName, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Login failed");

      sessionStorage.setItem("admin", JSON.stringify(data));
      toast.success("✅ Login successful!");
      navigate("/admin");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bg-gray-50"
      minHeight={"500px"}
      mt={"100px"}
    >
      <Box className="p-6 shadow-lg rounded-xl bg-white w-[300px] md:w-[550px] flex flex-col gap-[30px]">
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            borderBottom: "3px solid #A20F05",
            display: "inline-block",
            pb: "4px",
            width: "fit-content",
          }}
        >
          Admin Login
        </Typography>
        <Stack gap={2}>
          <TextField
            label="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box className="flex flex-row items-center gap-[20px] justify-end mt-[10px]">
            <AppButton
              BtnVariant="blackOutlined"
              BtnOnClick={handleBack}
              isDisabled={loading}
            >
              Cancel
            </AppButton>
            <AppButton
              BtnVariant="redContained"
              BtnOnClick={handleLogin}
              isLoading={loading}
            >
              Login
            </AppButton>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AdminLogin;
