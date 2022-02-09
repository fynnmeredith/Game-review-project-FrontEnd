import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import './Home.css'

const Home = () => {
  return (
    <>
    <div className="homeContainer">
      <Sidebar />
      <Feed />
    </div>
    </>
  );
};

export default Home
