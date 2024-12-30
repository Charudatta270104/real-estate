import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home1 from "./page/Home1";
import "../src/assets/css/style.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
      </Routes>
    </Router>
  );
}

export default App;
