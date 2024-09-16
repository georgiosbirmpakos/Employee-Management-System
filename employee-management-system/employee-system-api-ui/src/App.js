import Navbar from "./components/Navbar";
import "./App.css";
import AddEmployee from "./components/AddEmployee";

// tutorial followed https://www.youtube.com/watch?v=J3iiiLrT1ic&t=0s ---> 01:06:32 fetch
function App() {
  return (
    <>
      <Navbar />
      <AddEmployee />
    </>
  );
}

export default App;
