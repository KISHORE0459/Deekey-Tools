import {
  Box,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import AppButton from "../components/AppButton";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getEndPoint } from "../components/functions/getEndPoint";
import { useEffect } from "react";
import { ADMIN_LOGIN_PAGE, ADMIN_PAGE } from "../routes/url";
import { useNavigate } from "react-router";

const CreateJobPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
    watch,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const endPoint = getEndPoint();

  const { mutateAsync: createJob, isPending: isLoading } = useMutation({
    mutationKey: ["POST JOBS"],
    mutationFn: async (body) => {
      const res = await fetch(`${endPoint}/api/jobs`, {
        method: ["POST"],
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res?.ok) {
        const errMsg = await res?.json();
        throw new Error(errMsg?.error || "Error in Job Creation");
      }

      return res?.json();
    },
    onSuccess: () => {
      toast.success("Job created successfully!");
      navigate(ADMIN_PAGE);
      reset();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create job");
    },
  });

  const jobTypes = [
    {
      label: "Full Time",
      value: "Full Time",
    },
    {
      label: "Part Time",
      value: "Part Time",
    },
    {
      label: "Contract",
      value: "Contract",
    },
  ];

  const JobDescriptions = watch("job_descriptions");

  const JobResponsibilities = watch("job_responsibilities");

  const handleJobDescSubmit = () => {
    const val = getValues("job_desc");

    const job_descriptions = getValues("job_descriptions") ?? [];

    if (!val || val == "" || val == null || val == undefined)
      return toast.error("Please Enter a Valid Value");

    setValue("job_descriptions", [
      ...(job_descriptions ? job_descriptions : []),
      val,
    ]);

    setValue("job_desc", null);

    toast.success("Job Description Added!");
  };

  const handleJobResponseSubmit = () => {
    const val = getValues("job_responses");

    const job_descriptions = getValues("job_responsibilities") ?? [];

    if (!val || val == "" || val == null || val == undefined)
      return toast.error("Please Enter a Valid Value");

    setValue("job_responsibilities", [
      ...(job_descriptions ? job_descriptions : []),
      val,
    ]);

    setValue("job_responses", null);

    toast.success("Job Responsibility Added!");
  };

  const onSubmit = (val) => {
    createJob(val);
  };

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("admin");
    if (!isLoggedIn) {
      navigate(ADMIN_LOGIN_PAGE);
    }
  }, [navigate]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // remove "smooth" if you want instant jump
    });
  }, []);

  return (
    <Stack
      gap={"30px"}
      px={"20px"}
      alignItems={"center"}
      maxWidth={"100vw"}
      mt={"100px"}
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
        Create Job Opening
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          gap={"20px"}
          className="min-w-[300px] md:min-w-[500px] xl:min-w-[700px]"
        >
          {/* job position */}
          <TextField
            label="Job Title"
            type="text"
            {...register("job_title", {
              required: "job title is required",
            })}
            error={!!errors.jon_title}
            helperText={errors.job_title?.message}
            InputProps={{
              sx: {
                borderRadius: "6px",
              },
            }}
          />
          {/* job experience */}
          <TextField
            label="Experience"
            type="text"
            {...register("experience", {
              required: "job experience is required",
            })}
            error={!!errors.job_location}
            helperText={errors.job_location?.message}
            InputProps={{
              sx: {
                borderRadius: "6px",
              },
            }}
          />
          {/* job location */}
          <TextField
            label="Job Location"
            type="text"
            {...register("job_location", {
              required: "job location is required",
            })}
            error={!!errors.job_location}
            helperText={errors.job_location?.message}
            InputProps={{
              sx: {
                borderRadius: "6px",
              },
            }}
          />
          {/* no of vacancies */}
          <TextField
            label="No Of Vacancies"
            type="text"
            {...register("vacancies", {
              required: "Vacancies is required",
            })}
            error={!!errors.job_location}
            helperText={errors.job_location?.message}
            InputProps={{
              sx: {
                borderRadius: "6px",
              },
            }}
          />
          {/* job type */}
          <TextField
            select
            type="select"
            label="Job Type"
            {...register("job_type", {
              required: "job type is required",
            })}
            error={!!errors.job_type}
            helperText={errors.job_type?.message}
            InputProps={{
              sx: {
                borderRadius: "6px",
              },
            }}
          >
            {jobTypes.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </TextField>
          {/* job description */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <TextField
              label="Job Description"
              type="text"
              {...register("job_desc")}
              required={false}
              error={!!errors.job_desc}
              helperText={errors.job_desc?.message}
              InputProps={{
                sx: {
                  borderRadius: "6px",
                },
              }}
              className="flex-1"
            />
            <AppButton
              BtnOnClick={() => handleJobDescSubmit()}
              BtnVariant="blackOutlined"
            >
              Add
            </AppButton>
          </Box>
          <Stack className="ml-[10px] w-[90%]">
            <ol className="list-disc list-inside !gap-[15px]">
              {JobDescriptions?.map((val, i) => (
                <li
                  key={i}
                  className="text-[14px] md:text-[16px] xl:text-[18px] text-[#1A1A1A] font-[400] leading-[140%]  whitespace-normal break-words w-full"
                >
                  {val}
                </li>
              ))}
            </ol>
          </Stack>
          {/* Key Responsibilities */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <TextField
              label="Job Responsibilities"
              type="text"
              {...register("job_responses")}
              required={false}
              error={!!errors.job_desc}
              helperText={errors.job_desc?.message}
              InputProps={{
                sx: {
                  borderRadius: "6px",
                },
              }}
              className="flex-1"
            />
            <AppButton
              BtnOnClick={() => handleJobResponseSubmit()}
              BtnVariant="blackOutlined"
            >
              Add
            </AppButton>
          </Box>
          <Stack className="ml-[10px] w-[90%]">
            <ol className="list-disc list-inside !gap-[15px]">
              {JobResponsibilities?.map((val, i) => (
                <li
                  key={i}
                  className="text-[14px] md:text-[16px] xl:text-[18px] text-[#1A1A1A] font-[400] leading-[140%]  whitespace-normal break-words w-full"
                >
                  {val}
                </li>
              ))}
            </ol>
          </Stack>
          {/* application form link */}
          <TextField
            label="Application Link"
            type="text"
            {...register("application_link", {
              required: "Application Link is required",
            })}
            required={true}
            error={!!errors.job_location}
            helperText={errors.job_location?.message}
            InputProps={{
              sx: {
                borderRadius: "6px",
              },
            }}
          />
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"right"}
            alignItems={"center"}
            gap={"20px"}
          >
            <AppButton
              BtnVariant="blackOutlined"
              isDisabled={isLoading}
              BtnOnClick={() => {
                reset();
              }}
            >
              Clear
            </AppButton>
            <AppButton
              btnType="submit"
              BtnVariant="redContained"
              isLoading={isLoading}
            >
              Create Job
            </AppButton>
          </Box>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreateJobPage;
