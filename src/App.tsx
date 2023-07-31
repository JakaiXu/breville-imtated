import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
