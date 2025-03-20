import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WatchList from "./components/WatchList";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <MovieDetails /> */}
      <HomePage />
      {/* <WatchList /> */}
    </QueryClientProvider>
  );
  // return <HomePage />;
  //  <SignUp />;
  // return <SignIn />;
}
export default App;
