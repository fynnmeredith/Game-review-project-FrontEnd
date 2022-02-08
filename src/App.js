import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Categories from "./components/Categories/Categories";
import Games from "./components/Games/Games";
import Comments from "./components/Comments/Comments";
import Login from "./components/Login/Login";
import { UserProvider} from './contexts/User'
import Users from "./components/Users/Users";
import Navbar from "./components/NavBar/Navbar";

function App() {
  
  
  return (
    <UserProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/reviews" element={<Games />} />
        <Route path="/reviews/:review_id/comments" element={<Comments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />}> </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
