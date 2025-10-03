import { useQuery } from "@tanstack/react-query";
import {
  Box,
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Chip,
  Button,
} from "@mui/material";
import { getEndPoint } from "../components/functions/getEndPoint";
import { useEffect } from "react";
import { ADMIN_LOGIN_PAGE } from "../routes/url";
import { useNavigate } from "react-router";

const JobApplicationsList = () => {
  const endPoint = getEndPoint();
  const navigate = useNavigate();

  // 🔒 Protect page
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("admin");
    if (!isLoggedIn) {
      navigate(ADMIN_LOGIN_PAGE);
    }
  }, [navigate]);

  // 📦 Fetch applications
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Job Applications"],
    queryFn: async () => {
      const res = await fetch(`${endPoint}/api/applications`);
      if (!res.ok) throw new Error("Failed to fetch applications");
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <Stack alignItems="center" justifyContent="center" height="60vh">
        <CircularProgress size={50} />
        <Typography mt={2}>Loading applications...</Typography>
      </Stack>
    );
  }

  if (isError) {
    return (
      <Stack alignItems="center" justifyContent="center" height="60vh">
        <Typography color="error" fontWeight={600}>
          ❌ Failed to load job applications
        </Typography>
      </Stack>
    );
  }

  return (
    <Box
      px="20px"
      py="30px"
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
    >
      {/* Page Header */}
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
        Job Applications
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "15px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
        }}
      >
        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f3f4f6" }}>
              {[
                "Name",
                "Email",
                "Phone",
                "Education",
                "Job Title",
                "Location",
                "Submitted At",
                "Resume",
              ].map((head, idx) => (
                <TableCell key={idx} sx={{ fontWeight: 700 }}>
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {data?.map((app, index) => {
              const resumeUrl = app.resume_id
                ? `${endPoint}/api/applications/${app._id}/resume`
                : null;

              return (
                <TableRow
                  key={app._id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#fff" : "#f9fafb",
                    "&:hover": { backgroundColor: "#f1f5f9" },
                  }}
                >
                  <TableCell>
                    <Typography fontWeight={600}>{app.name}</Typography>
                  </TableCell>
                  <TableCell>{app.email}</TableCell>
                  <TableCell>{app.phone}</TableCell>
                  <TableCell>
                    <Chip
                      label={app.education}
                      color="info"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={app.job_title || "N/A"}
                      color="primary"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>{app.job_location || "N/A"}</TableCell>
                  <TableCell>
                    {app.createdAt
                      ? new Date(app.createdAt).toLocaleDateString()
                      : "N/A"}
                  </TableCell>
                  <TableCell>
                    {resumeUrl ? (
                      <Button variant="redContained">📎 Download</Button>
                    ) : (
                      <Typography color="text.secondary">N/A</Typography>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default JobApplicationsList;
