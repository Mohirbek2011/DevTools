import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Settings from "./Pages/settings";
import './i18n.jsx'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Settings" element={<Settings />} />
    </Routes>
    </>
  );
}

export default App;

