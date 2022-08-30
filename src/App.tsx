import "./App.css";
import { AppRoutes } from "./components/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <header></header>
        <AppRoutes />
      </QueryClientProvider>
    </div>
  );
}

export default App;
