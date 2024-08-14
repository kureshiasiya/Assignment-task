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
  Featured: {
    heading: "",
    items: [
      {
        heading: "Haircut",
        description1: "1 hr, 30 mins - 2 hrs",
        description:
          "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
        price: "from $90",
      },
      {
        heading: "Deep Condition (Standard)",
        description1: "15 mins",
        description:
          "This is an add on deep conditioning treatment service for clients who need to restore moisture back into their hair. MUST book styling or haircut service to follow. Appointments made without a styling service will be cancelled.",
        price: "$25",
      },
      {
        heading: "Blow Dry/Silk Press",
        description1: " 1hr-2hrs",
        description:
          "Please do NOT apply castor oil or coconut oil to hair before service.If you have NOT had a professional trim/haircut in the last 3 months, you must book a haircut service.",
        price: "$85",
      },
      {
        heading: "Root Touch-Up (Single Process)",
        description1: "1 hr",
        description:
          "For RETURNING client, and anyone needing a root touch up. With less that 2 inches of root.MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service).",
        price: "$125",
      },
      {
        heading: "Wash & Go - Curly Style",
        description1: "1 hr,25 mins",
        price: "$60",
      },
      {
        heading: "Haircut Short Tapered",
        description1: "1 hr- 2hrs",
        description:
          "A taper is a cut that leaves your hair long at the top and short on the sides. Hair gradually gets shorter as you move down the back and sides of your head. THIS IS NOT A BARBER HAIRCUT. We do not do low fades or tight fades. This is a soft short haircut.",
        price: "$130",
      },
    ],
  },
  Haircutting: {
    heading:
      "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
    items: [
      {
        heading: "A Bob Haircut",
        description1: "1 hr - 2 hrs",
        description:
          "A bob cut, is a short to medium length haircut, in which the hair is typically cut straight around the head at approximately jaw level, and no longer than shoulder-length.A bob cut is typically done on straight hair, but can be worn curly.",
        price: "from $110",
      },
      {
        heading: "Haircut",
        description1: "1 hr, 30 mins - 2 hrs",
        description:
          "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
        price: "from $90",
      },
      {
        heading: "Haircut Short Tapered",
        description1: "1 hr, 30 mins - 2 hrs",
        description:
          "A taper is a cut that leaves your hair long at the top and short on the sides. Hair gradually gets shorter as you move down the back and sides of your head. THIS IS NOT A BARBER HAIRCUT. We do not do low fades or tight fades. This is a soft short haircut.The inished style is a wash-and-go This is NOT for wearing your hair straight.",
        price: "from $130",
      },
    ],
  },
  Styling: {
    heading: "",
    items: [
      {
        heading: "Blow Dry/Silk Press",
        description1: "1hr-2hrs",
        description:
          "Please do NOT apply castor oil or coconut oil to hair before service.If you have NOT had a professional trim/haircut in the last 3 months, you must book a haircut service.If you would like a trim/haircut, please book our hair cut service with a stylist. ",
        price: "$85",
      },
      {
        heading: "Half Up Half Down Ponytail",
        description1: "2 hrs",
        description: "Hair is not included. ",
        price: "$225",
      },
      {
        heading: "Shampoo/Wrap (Relaxed Hair)",
        description1: "1 hr, 50 mins",
        price: "$85",
      },
      {
        heading: "Pony Tail",
        description1: "2 hrs  •  Ponytail",
        description: "Hair is NOT provided. ",
        price: "$150",
      },
    ],
  },

  "Color Services": {
    heading: "",
    items: [
      {
        heading: "NEW SINGLE PROCESS WITH FULL HEAD HIGHLIGHTS",
        description1: "2 hrs, 30 mins",
        description:
          "This process completely changes your hair color to a brown, with a full head of blonde highlights added to create dimension. MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service)",
        price: "$495",
      },
      {
        heading: "NEW FULL HEAD HIGHLIGHTS",
        description1: "2 hrs, 30 mins",
        description:
          "A full head of highlights to make hair blonde, golden, or soft browns. Natural hair base color stays the same. MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service).",
        price: "$410",
      },
      {
        heading: "BLONDE HIGHLIGHTS (Half Head Highlights)",
        description1: "1hr,30 mins",
        description:
          "A half head of highlights to make hair blonde, golden, or softs browns. Natural hair base color stays the same. MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service).",
        price: "$175",
      },
      {
        heading:
          "LIGHT BROWN/ SOFT GOLDEN BROWN/ LIGHT ASH BROWN (Virgin Single Process w/ Few Highlights)",
        description1: "2 hrs, 15 mins",
        description:
          "MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service).",
        price: "$185",
      },
    ],
  },
  "Natural Hairstyling": {
    heading: "",
    items: [
      {
        heading: "Flexi Rod Set",
        description1: "3 hrs",

        price: "$125",
      },
      {
        heading: "Wash & Go - Curly Style",
        description1: "1 hr, 25 mins",

        price: "$60",
      },
    ],
  },
  "Relaxer/ Texturizer/ Keratin": {
    heading: "",
    items: [
      {
        heading: "Relaxer",
        description1: "1 hr, 25 mins",

        price: "$110",
      },
      {
        heading: "Relaxer and Haircut",
        description1: "1 hr, 40 mins",

        price: "$160",
      },
    ],
  },
  "Extension, Installs and Wigs": {
    heading: "",
    items: [
      {
        heading: "Install Removal",
        description1: "1 hr, 30 mins",
        description:
          "ervice includes safe removal of extension hair, take down of braided foundation from weave install performed at H2 Salon. . A detox shampoo, deep conditioning treatment. Afterwards hair will be blow dried. Additional styling service must be booked if seeking any styling.",
        price: "$100",
      },
      {
        heading: "Intricate Weave Install",
        description1: "3 hrs, 30 mins",

        price: "$350",
      },
    ],
  },
  Treatments: {
    heading: "",
    items: [
      {
        heading: "Detox Shampoo",
        description1: "20 mins",
        description:
          "This is an add on treatment for clients who have taken out braids or a protective style and have scalp build-up. MUST book styling or haircut service to follow. Appointments made without a styling service will be cancelled. ",
        price: "$40",
      },
      {
        heading: "Deep Condition (Standard)",
        description1: "15 mins",
        description:
          "This is an add on deep conditioning treatment service for clients who need to restore moisture back into their hair. MUST book styling or haircut service to follow. Appointments made without a styling service will be cancelled. ",
        price: "$25",
      },
    ],
  },
};

const CategoryMenu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [expandedSubcategory, setExpandedSubcategory] = useState(null);
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

  const scrollCategories = (direction) => {
    if (categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const scrollAmount = container.offsetWidth;

      if (direction === "right") {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  const toggleDescription = (index) => {
    setExpandedSubcategory(expandedSubcategory === index ? null : index);
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
          <span className="top-item service-active">Services &gt;</span>
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
          <button
            className="scroll-arrow scroll-left"
            onClick={() => scrollCategories("left")}
          >
            &lt;
          </button>
          <button
            className="scroll-arrow scroll-right"
            onClick={() => scrollCategories("right")}
          >
            &gt;
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
            {/* Display the category heading here */}
            <h2 className="category-heading">{category}</h2>
            <p className="category-description">
              {subcategories[category]?.heading}
            </p>

            <div className="subcategories">
              {subcategories[category]?.items &&
                subcategories[category]?.items.map((sub, idx) => (
                  <div key={idx} className="subcategory-item">
                    <div
                      className="subcategory-content"
                      onClick={() => toggleDescription(idx)}
                    >
                      <h3 className="subcategory-heading">{sub.heading}</h3>
                      <p className="subcategory-description1">
                        {sub.description1}
                      </p>

                      {expandedSubcategory === idx ? (
                        <p className="subcategory-description">
                          {sub.description || "No description available."}
                        </p>
                      ) : (
                        <p className="subcategory-description truncated">
                          {sub.description
                            ? sub.description
                                .split(" ")
                                .slice(0, 10)
                                .join(" ") + "..."
                            : "No description available."}
                        </p>
                      )}
                      <p className="subcategory-price">{sub.price}</p>
                    </div>
                    <button className="add-button">+</button>
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
