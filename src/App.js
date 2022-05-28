import Home from "./Components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Email from "./Components/Email";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/email" element={<Email/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
