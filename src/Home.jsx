import './Home.css'
import AllReviews from "./components/AllReviews/AllReviews";
import Categories from "./components/Categories/Categories";

const Home = () => {
  return (
    <>
    <div className="homeContainer">
      <Categories />
      <AllReviews />
    </div>
    </>
  );
};

export default Home
