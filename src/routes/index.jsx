import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import HomePage from "../pages/HomePage";
import {
  ABOUT_PAGE_ROUTE,
  ADMIN_LOGIN_PAGE,
  ADMIN_PAGE,
  APPLY_JOB_PAGE,
  CAREER_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  CREATE_JOB_ROUTE,
  HOME_PAGE_ROUTE,
  JOB_APPLICATION_PAGE,
  JOB_PAGE,
  LEGAL_PAGE,
  MANAGE_JOBS_PAGE,
  PRIVACY_POLICY_PAGE,
  PRODUCTS_PAGE_ROUTE,
  REFUND_PAGE,
  TERM_AND_CONDITIONS_PAGE,
  TOOL_AND_DIE_PRODUCT_PAGE,
  TOOL_AND_DIE_PRODUCT_PAGE_2,
  VOICE_OF_PRESIDENT_PAGE,
} from "./url";
import About from "../pages/About";
import Careers from "../pages/Careers";
// import Contact from "../pages/Contact";
import ToolAndDiePage from "../pages/ToolAndDiePage";
import ToolAndDiePage2 from "../pages/ToolAndDiePage2";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import CreateJobPage from "../pages/CreateJobPage";
import LegalSectionLayout from "../components/LegalSectionLayout";
import VoiceOfPresident from "../pages/VoiceOfPresident";
import JobPage from "../pages/JobPage";
import ApplyJob from "../pages/ApplyJob";
import JobApplicationsList from "../pages/JobApplicationsList";
import ManageJobs from "../pages/ManageJobs";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/Admin";
import ContactPage from "../pages/NewContactPage";

export const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: HOME_PAGE_ROUTE,
        element: <HomePage />,
      },
      {
        path: ABOUT_PAGE_ROUTE,
        element: <About />,
      },
      {
        path: PRODUCTS_PAGE_ROUTE,
        element: <ToolAndDiePage />,
      },
      {
        path: CAREER_PAGE_ROUTE,
        element: <Careers />,
      },
      {
        path: CONTACT_PAGE_ROUTE,
        element: <ContactPage />,
      },
      {
        path: TOOL_AND_DIE_PRODUCT_PAGE,
        element: <ToolAndDiePage />,
      },
      {
        path: TOOL_AND_DIE_PRODUCT_PAGE_2,
        element: <ToolAndDiePage2 />,
      },
      {
        path: REFUND_PAGE,
        element: <RefundPage />,
      },
      {
        path: TERM_AND_CONDITIONS_PAGE,
        element: <TermsPage />,
      },
      {
        path: PRIVACY_POLICY_PAGE,
        element: <PrivacyPolicyPage />,
      },
      {
        path: CREATE_JOB_ROUTE,
        element: <CreateJobPage />,
      },
      {
        path: JOB_PAGE,
        element: <JobPage />,
      },
      {
        path: APPLY_JOB_PAGE,
        element: <ApplyJob />,
      },
      {
        path: JOB_APPLICATION_PAGE,
        element: <JobApplicationsList />,
      },
      {
        path: MANAGE_JOBS_PAGE,
        element: <ManageJobs />,
      },
      {
        path: VOICE_OF_PRESIDENT_PAGE,
        element: <VoiceOfPresident />,
      },
      {
        path: ADMIN_LOGIN_PAGE,
        element: <AdminLogin />,
      },
      {
        path: ADMIN_PAGE,
        element: <AdminDashboard />,
      },
      {
        path: LEGAL_PAGE,
        element: <LegalSectionLayout />,
        children: [
          {
            path: PRIVACY_POLICY_PAGE,
            element: <PrivacyPolicyPage />,
          },
          {
            path: TERM_AND_CONDITIONS_PAGE,
            element: <TermsPage />,
          },
        ],
      },
    ],
  },
]);
