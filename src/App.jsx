import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { theme } from "./theme/theme";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
        <Toaster position="top-center" reverseOrder={true} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
