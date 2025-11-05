import "./App.css";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
