import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Paper,
  IconButton,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";
import { MdDelete, MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { getEndPoint } from "../components/functions/getEndPoint";
import AppButton from "../components/AppButton";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsOpencollective } from "react-icons/bs";
import { ADMIN_LOGIN_PAGE, CREATE_JOB_ROUTE } from "../routes/url";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const ManageJobs = () => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);

  const endPoint = getEndPoint();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Fetch jobs
  const {
    data: jobs = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch(`${endPoint}/api/jobs`);
      if (!res.ok) throw new Error("Failed to fetch jobs");
      return res.json();
    },
  });

  // Delete job mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`${endPoint}/api/jobs/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete job");
      return res.json();
    },
    onSuccess: () => {
      toast.success("✅ Job deleted successfully");
      queryClient.invalidateQueries(["jobs"]);
      setOpenConfirm(false);
      setJobToDelete(null);
    },
    onError: () => {
      toast.error("❌ Failed to delete job");
    },
  });

  // Confirm delete dialog
  const confirmDelete = (job) => {
    setJobToDelete(job);
    setOpenConfirm(true);
  };

  // Session check
  if (typeof window !== "undefined") {
    const isLoggedIn = sessionStorage.getItem("admin");
    if (!isLoggedIn) {
      navigate(ADMIN_LOGIN_PAGE);
    }
  }

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
      sx={{
        backgroundColor: "#f8f9fb",
        minHeight: "100vh",
        py: 6,
        px: { xs: 2, md: 6 },
        mt: "100px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: "20px",
        }}
      >
        {/* Header */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              borderBottom: "3px solid #A20F05",
              display: "inline-block",
              pb: "4px",
            }}
          >
            Manage Jobs
          </Typography>

          <AppButton
            BtnVariant="redContained"
            BtnOnClick={() => navigate(CREATE_JOB_ROUTE)}
          >
            + Add Job
          </AppButton>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        {/* Job List */}
        {jobs.length === 0 ? (
          <Typography align="center" color="textSecondary">
            No jobs available.
          </Typography>
        ) : (
          <Stack gap={2}>
            {jobs.map((job) => (
              <Paper
                key={job._id}
                elevation={1}
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  "&:hover": {
                    cursor: "pointer",
                    boxShadow: 4,
                  },
                }}
              >
                <Box className="flex flex-col gap-[10px]">
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, color: "#1A1A1A" }}
                  >
                    {job.job_title}
                  </Typography>
                  <Box className="flex flex-row gap-[20px] flex-wrap items-center">
                    <Box className="flex flex-row gap-[10px] items-center">
                      <MdOutlineLocationOn className="min-w-[20px] min-h-[20px] h-[20px] w-[20px]" />
                      <h4 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                        {job?.job_location ?? "-"}
                      </h4>
                    </Box>
                    <Box className="flex flex-row gap-[10px] items-center">
                      <BiSolidBarChartAlt2 className="min-w-[20px] min-h-[20px] h-[20px] w-[20px]" />
                      <h4 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                        {job?.experience ?? "-"}
                      </h4>
                    </Box>
                    {job?.vacancies && (
                      <Box className="flex flex-row gap-[10px] items-center">
                        <BsOpencollective className="min-w-[20px] min-h-[20px] h-[20px] w-[20px]" />
                        <h4 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                          {`${job?.vacancies} openings`}
                        </h4>
                      </Box>
                    )}
                  </Box>
                </Box>

                <IconButton color="error" onClick={() => confirmDelete(job)}>
                  <MdDelete size={24} />
                </IconButton>
              </Paper>
            ))}
          </Stack>
        )}
      </Paper>

      {/* Delete Confirmation Modal */}
      <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete{" "}
            <strong>{jobToDelete?.job_title}</strong>? This action cannot be
            undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirm(false)} variant="blackOutlined">
            Cancel
          </Button>
          <Button
            color="error"
            onClick={() => deleteMutation.mutate(jobToDelete._id)}
            variant="redContained"
            disabled={deleteMutation.isLoading}
          >
            {deleteMutation.isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ManageJobs;
