import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieDetails />
    </QueryClientProvider>
  );
  // return <HomePage />;
  //  <SignUp />;
  // return <SignIn />;
}
export default App;
