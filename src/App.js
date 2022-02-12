import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./components/Games/Games";
import Comments from "./components/Comments/Comments";
import Login from "./components/Login/Login";
import { UserProvider} from './contexts/User'
import Users from "./components/Users/Users";
import Navbar from "./components/NavBar/Navbar";
import Review from "./components/Review/Review";
import PostComment from "./components/Comments/Comments"
import Home from "./Home";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Games />} />
        <Route path="/reviews/:review_id/comments" element={<Comments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />}> </Route>
        <Route path="/reviews/:review_id" element={<Review />} />
        <Route path="reviews/:review_id/comments" element={<PostComment />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
