import "./App.css";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:q" element={<Home />} />
        <Route path="/:type/:id" element={<singleMovie />} />
      </Routes>
    </>
  );
}

export default App;
