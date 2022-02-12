import { getCategories } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <main className="main">
      <div className="titles">
        <h1>Categories</h1>
        <h3>Click on a category to refine your search</h3>
      </div>
      <div className="wholeFeed">
        <div className="feedWrapper">
          <ul>
            {categories.map((category) => {
              return (
                <li className="categoryList" key={category.slug}>
                  <button className="revButton">
                    <Link to={`/reviews?category=${category.slug}`}>
                      <div className="feedTop">
                        <h3>{category.slug}</h3>
                      </div>
                      <div className="feedBottom">
                        <p className="descrip">{category.description}</p>
                      </div>
                    </Link>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Categories;
