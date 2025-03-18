import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import Logos from "./components/Logos";
import ChooseUs from "./components/ChooseUs";
function App() {
  return (
    <div>
      <HomePage />
      <Logos />
      <ChooseUs />
    </div>
  );
  //  <SignUp />;
  // return <SignIn />;
}
export default App;
