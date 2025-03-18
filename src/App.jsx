import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import Logos from "./components/Logos";
import ChooseUs from "./components/ChooseUs";
import Membership from "./components/Membership";
function App() {
  return (
    <div>
      <HomePage />
      <Logos />
      <ChooseUs />
      <Membership />
    </div>
  );
  //  <SignUp />;
  // return <SignIn />;
}
export default App;
