import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";
import MovieStatus from "./components/MovieStatus";
import WatchList from "./components/WatchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
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
    </div>
  );
}
export default App;
