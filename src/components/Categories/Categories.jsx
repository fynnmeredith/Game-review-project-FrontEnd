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
      <div className="wholefeed">
      <div className="titles">
        <h1>Categories</h1>
        <h3>Click on a category to refine your search</h3>
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
                  <p className="descrip"><Link to={`/reviews?category=${category.slug}`}>{category.description}</Link></p>
                </div>
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
