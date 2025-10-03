import { Box, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import AppButton from "../components/AppButton";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getEndPoint } from "../components/functions/getEndPoint";
import { CAREER_PAGE_ROUTE } from "../routes/url";
import { useQuery } from "@tanstack/react-query";
import AppFileUploader from "../components/AppFileUploader";

const ApplyJob = () => {
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm();

  const endPoint = getEndPoint();
  const navigate = useNavigate();

  const [resumeFile, setResumeFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { data: jobData } = useQuery({
    queryKey: ["Job Detail API", id],
    queryFn: async () => {
      const response = await fetch(`${endPoint}/api/jobs/${id}`);
      if (!response.ok) throw new Error("Failed to fetch jobs");
      return response.json();
    },
  });

  const onSubmit = async (val) => {
    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("name", val.name);
      formData.append("email", val.email);
      formData.append("phone", val.phone);
      formData.append("education", val.education);
      formData.append("job_id", id);
      formData.append("job_title", jobData?.job_title || "N/A");
      formData.append("job_location", jobData?.job_location || "N/A");

      if (resumeFile) {
        formData.append("resume", resumeFile); // ✅ actual file, not base64
      }

      const response = await fetch(`${endPoint}/api/applications`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit application");

      toast.success("✅ Application submitted successfully!");
      reset();
      setResumeFile(null);
      navigate(CAREER_PAGE_ROUTE);
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to submit application");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack gap="30px" px="20px" alignItems="center" maxWidth="100vw">
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 600,
          color: "#1A1A1A",
          mb: 2,
          borderBottom: "3px solid #ff6b6b",
          display: "inline-block",
          pb: "4px",
        }}
      >
        Apply for {jobData?.job_title || "Job"} Role
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          gap="20px"
          className="min-w-[300px] md:min-w-[500px] xl:min-w-[700px]"
        >
          {/* Full Name */}
          <TextField
            label="Full Name"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
            InputProps={{ sx: { borderRadius: "6px" } }}
          />

          {/* Email */}
          <TextField
            label="Email"
            type="email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{ sx: { borderRadius: "6px" } }}
          />

          {/* Phone */}
          <TextField
            label="Phone Number"
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            InputProps={{ sx: { borderRadius: "6px" } }}
          />

          {/* Education */}
          <TextField
            label="Education"
            multiline
            rows={1}
            {...register("education")}
            InputProps={{ sx: { borderRadius: "6px" } }}
          />

          {/* Resume Upload */}
          <AppFileUploader
            file={resumeFile}
            onFileSelect={(file) => {
              setResumeFile(file);
              setValue("resume", file, { shouldValidate: true });
            }}
            onRemove={() => {
              setResumeFile(null);
              setValue("resume", null);
            }}
            error={errors.resume?.message}
          />
          <input
            type="hidden"
            {...register("resume", { required: "Resume is required" })}
          />

          {/* Buttons */}
          <Box display="flex" justifyContent="flex-end" gap="20px">
            <AppButton
              BtnVariant="blackOutlined"
              BtnOnClick={() => {
                reset();
                setResumeFile(null);
              }}
              isDisabled={isLoading}
            >
              Clear
            </AppButton>

            <AppButton
              btnType="submit"
              BtnVariant="redContained"
              isLoading={isLoading}
            >
              Submit Application
            </AppButton>
          </Box>
        </Stack>
      </form>
    </Stack>
  );
};

export default ApplyJob;
