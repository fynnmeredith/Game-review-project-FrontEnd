import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
import Games from "./components/Games";
import Comments from "./components/Comments";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/reviews" element={<Games />} />
        <Route path="/reviews/:review_id/comments" element={<Comments />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
