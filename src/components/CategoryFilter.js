import React from "react";
import PropTypes from "prop-types";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  if (!categories) return null; // Guard clause

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className="categories">
      <h5>Category Filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={category === selectedCategory ? "selected" : ""}
          aria-pressed={category === selectedCategory}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
