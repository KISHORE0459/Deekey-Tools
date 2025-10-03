import { useQuery } from "@tanstack/react-query";
import { getEndPoint } from "./functions/getEndPoint";
import { CircularProgress, Stack, Typography } from "@mui/material";
import JobCard from "./careers/JobCard";
import NoJobCard from "./careers/NoJobCard";

const JobListingComp = () => {
  const endPoint = getEndPoint();

  const {
    data: JobList,
    isLoading: isJobListloading,
    isError,
  } = useQuery({
    queryKey: ["Job Listing"],
    queryFn: async () => {
      const response = await fetch(`${endPoint}/api/jobs`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      return response.json();
    },
  });

  if (isJobListloading) {
    return (
      <Stack alignItems="center" justifyContent="center" height="60vh">
        <CircularProgress size={50} />
        <Typography mt={2}>Loading Jobs...</Typography>
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

  if (!isJobListloading && JobList?.length <= 0) {
    return <NoJobCard />;
  }

  return (
    <Stack gap={"20px"} className="items-center justify-center">
      <h2 className="text-[20px] md:text-[32px] text-[#1A1A1A] font-[600] leading-[150%]">
        Some opportunities for you to explore
      </h2>
      <Stack className="px-[20px] gap-[20px] w-full">
        {JobList?.map((val) => (
          <JobCard
            jobTitle={val?.job_title}
            jobLocation={val?.job_location}
            jobExperience={val?.experience}
            jobDescription={val?.job_descriptions}
            noOfVacancies={val?.vacancies}
            job={val}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default JobListingComp;
