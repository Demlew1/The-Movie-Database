import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";

import WatchList from "./components/WatchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/movies" element={<MovieDetails />} />
          <Route path="/movies/:id" element={<MovieStatus />} />
          <Route path="/watchList" element={<WatchList />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
