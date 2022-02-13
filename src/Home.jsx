import './Home.css'
import AllReviews from "./components/AllReviews/AllReviews";
import Categories from "./components/Categories/Categories";

const Home = () => {
  return (
    <>
    <div className="homeContainer">
      <div className='cat'>
      <Categories />
      </div>
      <div className='rev'>
        <AllReviews />
      </div>
    </div>
    </>
  );
};

export default Home
