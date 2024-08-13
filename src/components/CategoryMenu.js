import React, { useState, useRef, useEffect } from "react";
import "./CategoryMenu.css";

const categories = [
  "Featured",
  "Haircutting",
  "Styling",
  "Color Services",
  "Natural Hairstyling",
  "Relaxer/ Texturizer/ Keratin",
  "Extension, Installs and Wigs",
  "Treatments",
];

const subcategories = ["Subcategory 1", "Subcategory 2", "Subcategory 3"];

const CategoryMenu = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRefs = useRef([]);

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    sectionRefs.current.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        setActiveCategory(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollCategoriesRight = () => {
    const container = document.querySelector(".category-container");
    container.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div>
      {/* Top Items */}
      <div className="top-items">
        <span className="top-item active">
          Services <span className="arrow">&gt;</span>
        </span>
        <span className="top-item">
          Professional <span className="arrow">&gt;</span>
        </span>
        <span className="top-item">
          Time <span className="arrow">&gt;</span>
        </span>
        <span className="top-item">
          Confirm <span className="arrow">&gt;</span>
        </span>
      </div>

      {/* Bold "Select Services" Text */}
      <div className="select-services">
        <strong>Select Services</strong>
      </div>

      {/* Category Menu Section */}
      <div className="category-container">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-item ${
              activeCategory === index ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(index)}
          >
            {category}
          </button>
        ))}
        <div className="arrow-right" onClick={scrollCategoriesRight}>
          ➔
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        {categories.map((category, index) => (
          <section key={index} ref={(el) => (sectionRefs.current[index] = el)}>
            {/* <h2>{category}</h2>
            <p>Content for {category}</p> */}

            {/* Display subcategories for "Featured" */}
            {category === "Featured" && (
              <div className="featured-section">
                <div className="featured-title">Featured</div>
                <div className="subcategory-boxes">
                  {subcategories.map((sub, idx) => (
                    <div key={idx} className="subcategory-box">
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
