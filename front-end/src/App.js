import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar.js";
import HeartHealth from "./Components/HeartHealth.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/snacks" element = {<HeartHealth/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
