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

const subcategories = {
  Featured: ["Haircut", "Styling", "Color"],
  Haircutting: ["Men's Cut", "Women's Cut", "Children's Cut"],
  Styling: ["Blowout", "Updo", "Braiding"],
  // Add subcategories for other categories as needed
};

const CategoryMenu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const categoryContainerRef = useRef(null);
  const sectionRefs = useRef({});
  const fixedNavRef = useRef(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const navHeight = fixedNavRef.current
      ? fixedNavRef.current.offsetHeight
      : 0;
    const targetPosition = sectionRefs.current[category].offsetTop - navHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const scrollCategoriesRight = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navHeight = fixedNavRef.current
        ? fixedNavRef.current.offsetHeight
        : 0;

      for (let category of categories) {
        const section = sectionRefs.current[category];
        if (section) {
          const sectionTop = section.offsetTop - navHeight;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveCategory(category);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="category-menu">
      <div className="fixed-navigation" ref={fixedNavRef}>
        <div className="top-items">
          <span className="top-item">Services &gt;</span>
          <span className="top-item">Professional &gt;</span>
          <span className="top-item">Time &gt;</span>
          <span className="top-item">Confirm &gt;</span>
        </div>

        <h2 className="select-services">Select Services</h2>

        <div className="category-container-wrapper">
          <div className="category-container" ref={categoryContainerRef}>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-item ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="scroll-arrow" onClick={scrollCategoriesRight}>
            ➔
          </button>
        </div>
      </div>

      <div className="content">
        {categories.map((category) => (
          <div
            key={category}
            ref={(el) => (sectionRefs.current[category] = el)}
            className="category-section"
          >
            <h2>{category}</h2>
            <div className="subcategories">
              {subcategories[category] &&
                subcategories[category].map((sub, idx) => (
                  <div key={idx} className="subcategory-item">
                    {sub}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
