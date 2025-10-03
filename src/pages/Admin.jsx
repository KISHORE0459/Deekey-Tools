import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { MdAddBusiness } from "react-icons/md";
import { FaRegFileCode, FaTasks } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  ADMIN_LOGIN_PAGE,
  CREATE_JOB_ROUTE,
  JOB_APPLICATION_PAGE,
  MANAGE_JOBS_PAGE,
} from "../routes/url";
import { useEffect } from "react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Create Job",
      description: "Add a new job posting with details",
      icon: <MdAddBusiness size={30} color="#b91c1c" />,
      path: CREATE_JOB_ROUTE,
    },
    {
      title: "Manage Jobs",
      description: "View, update, and delete existing jobs",
      icon: <FaTasks size={30} color="#b91c1c" />,
      path: MANAGE_JOBS_PAGE,
    },
  ];

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("admin");
    if (!isLoggedIn) {
      navigate(ADMIN_LOGIN_PAGE);
    }
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
        mt: "100px",
      }}
    >
      <Stack spacing={4} alignItems="center" width="100%">
        {/* Header */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            borderBottom: "3px solid #A20F05",
            display: "inline-block",
            pb: "4px",
          }}
        >
          Deeky Tools Admin Page
        </Typography>

        {/* Cards */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={"20px"}
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          {cards.map((card, idx) => (
            <Card
              key={idx}
              sx={{
                width: { base: "300px", md: "500px" },
                borderRadius: 3,
                boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box className="flex flex-row items-center gap-[30px] flex-wrap">
                  <Box mb={2}>{card.icon}</Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {card.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 3 }}
                >
                  {card.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#b91c1c",
                    "&:hover": { bgcolor: "#991b1b" },
                    textTransform: "none",
                    borderRadius: "10px",
                  }}
                  onClick={() => navigate(card.path)}
                >
                  Go →
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default AdminDashboard;
