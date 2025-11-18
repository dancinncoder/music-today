import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MoodPage from "./pages/MoodPage/MoodPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mood" element={<MoodPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
