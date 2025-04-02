import SignIn from "./components/pages/sign-in/SignIn";
import SignUp from "./components/pages/sign-up/SignUp";
import HomePage from "./components/pages/Home-page/HomePage";
import MovieDetails from "./components/pages/Movies/MovieDetails";
import MovieStatus from "./components/pages/Movies/MovieStatus";
import WatchList from "./components/WatchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/watchList" element={<WatchList />} />
          <Route path="/movies" element={<MovieDetails />} />
          <Route path="/movies/:id" element={<MovieStatus />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App;
