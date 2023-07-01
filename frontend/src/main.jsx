import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/main.scss";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      {/* <QueryClientProvider client={queryClient}> */}
        <AuthProvider>
          <App />
        </AuthProvider>
      {/* </QueryClientProvider> */}
  </React.StrictMode>
);
