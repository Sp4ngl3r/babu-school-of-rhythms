import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Gallery } from "./containers/gallery";
import { Homepage } from "./containers/homepage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
