import { Stack } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { getEndPoint } from "./functions/getEndPoint";
import { useQuery } from "@tanstack/react-query";

const AppLayout = () => {
  const endPoint = getEndPoint();

  const { data: JobList } = useQuery({
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
    refetchInterval: 50000,
  });

  console.log(JobList?.length);
  return (
    <Stack
      sx={{
        fontFamily: "Poppins, Arial, sans-serif",
      }}
      className="max-w-[1920px] mx-auto relative gap-[0px]"
    >
      <NavBar />
      <Outlet />
      <Footer />
    </Stack>
  );
};

export default AppLayout;
