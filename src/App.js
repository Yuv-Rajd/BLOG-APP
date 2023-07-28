import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/V1Home";

import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage2 from "./pages/V2Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home2" element={<HomePage2 />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
