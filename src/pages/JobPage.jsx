import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { getEndPoint } from "../components/functions/getEndPoint";
import { Box, Stack } from "@mui/system";
import JobCard from "../components/careers/JobCard";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsOpencollective } from "react-icons/bs";
import AppButton from "../components/AppButton";
import { APPLY_JOB_PAGE_NAV, CAREER_PAGE_ROUTE } from "../routes/url";
import { useEffect } from "react";
import toast from "react-hot-toast";

const JobPage = () => {
  const { id } = useParams();
  const endPoint = getEndPoint();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(CAREER_PAGE_ROUTE);
  };

  const handleApply = () => {
    const link = jobData?.application_link;

    if (!link) {
      toast.error(
        "No Application Link is Provided By The Admin Please Contact through the Contact Section"
      );
      return;
    }

    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.click();
  };

  const { data: jobData } = useQuery({
    queryKey: ["Job Detail API"],
    queryFn: async () => {
      const response = await fetch(`${endPoint}/api/jobs/${id}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      return response.json();
    },
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // remove "smooth" if you want instant jump
    });
  }, []);

  return (
    <Stack className="px-[20px] gap-[20px] py-[20px]">
      <Box className="flex justify-center items-center">
        <h2 className="text-[20px] font-[500] leading-[150%] text-[#1A1A1A]">
          Start Your Carrier in Deeky Tools
        </h2>
      </Box>
      <Stack className="border-[1px] border-[#b3b3b3] rounded-[16px] hover:cursor-pointer hover:shadow-md">
        <Box className="border-b-[1px] border-[#b3b3b3] p-[25px]">
          <Stack className="gap-[10px]">
            <h2 className="text-[18px] md:text-[20px] xl:text-[24px] font-[500] leading-[150%] text-[#1A1A1A]">
              {jobData?.job_title}
            </h2>
            <Box className="flex flex-col md:flex-row gap-[30px] flex-wrap">
              <Box className="flex flex-row gap-[10px] items-center">
                <MdOutlineLocationOn className="min-w-[20px] min-h-[20px] h-[20px] w-[20px]" />
                <h4 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                  {jobData?.job_location ?? "-"}
                </h4>
              </Box>
              <Box className="flex flex-row gap-[10px] items-center">
                <BiSolidBarChartAlt2 className="min-w-[20px] min-h-[20px] h-[20px] w-[20px]" />
                <h4 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                  {jobData?.experience ?? "-"}
                </h4>
              </Box>
              {jobData?.vacancies && (
                <Box className="flex flex-row gap-[10px] items-center">
                  <BsOpencollective className="min-w-[20px] min-h-[20px] h-[20px] w-[20px]" />
                  <h4 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                    {`${jobData?.vacancies} openings`}
                  </h4>
                </Box>
              )}
            </Box>
          </Stack>
        </Box>
        <Stack gap={"0px"}>
          <Stack className="py-[10px] px-[25px] gap-[10px]">
            <h3 className="text-[17px] font-[500] leading-[150%] text-[#1A1A1A]">
              Job Description
            </h3>
            <ul className="ml-[20px] md:ml-[30px] list-disc flex flex-col gap-[10px]">
              {jobData?.job_descriptions?.length > 0 ? (
                jobData?.job_descriptions?.map((val, index) => (
                  <li
                    key={index}
                    className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]"
                  >
                    {val}
                  </li>
                ))
              ) : (
                <Box className="flex justify-center items-center">
                  <h3 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                    No Job Descriptions Available
                  </h3>
                </Box>
              )}
            </ul>
          </Stack>
          <Stack className="p-[25px] gap-[10px]">
            <h3 className="text-[17px] font-[500] leading-[150%] text-[#1A1A1A]">
              Job Responsibilities
            </h3>
            <ul className="ml-[20px] md:ml-[30px] list-disc flex flex-col gap-[10px]">
              {jobData?.job_responsibilities?.length > 0 ? (
                jobData?.job_responsibilities?.map((val, index) => (
                  <li
                    key={index}
                    className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]"
                  >
                    {val}
                  </li>
                ))
              ) : (
                <Box>
                  <h3 className="text-[15px] font-[400] leading-[120%] text-[#2e2e2e]">
                    No Job Responsibilities Available
                  </h3>
                </Box>
              )}
            </ul>
          </Stack>
        </Stack>
        <Box className="p-[24px] flex flex-row gap-[20px] items-center">
          <AppButton BtnVariant="redContained" BtnOnClick={handleApply}>
            Apply
          </AppButton>
          <AppButton BtnVariant="blackOutlined" BtnOnClick={handleBack}>
            Go Back
          </AppButton>
        </Box>
      </Stack>
    </Stack>
  );
};

export default JobPage;
