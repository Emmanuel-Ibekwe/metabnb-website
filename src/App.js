import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import PlacesToStay from "./pages/PlacesToStay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="places-to-stay" element={<PlacesToStay />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
