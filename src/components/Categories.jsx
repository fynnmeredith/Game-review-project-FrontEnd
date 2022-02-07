import { getCategories } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <main>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <h3>
                <Link to={`/reviews?category=${category.slug}`}>{category.slug}</Link>
              </h3>
              <p>{category.description}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Categories;
