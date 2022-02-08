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
    <main>
      <div>
        <h1>Categories</h1>
      </div>
      <div>
        <h3>Pick a category to browse reviewed boardgames</h3>
      </div>
      <div className="feedWrapper">
        <ul>
          {categories.map((category) => {
            return (
              <li className="categoryList" key={category.slug}>
                <div className="feedTop">
                  <h3>
                    <Link to={`/reviews?category=${category.slug}`}>
                      {category.slug}
                    </Link>
                  </h3>
                </div>
                <div className="feedBottom">
                  <p>{category.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Categories;
