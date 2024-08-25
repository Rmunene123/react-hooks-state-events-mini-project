import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import CategoryFilter from "../components/CategoryFilter";

const categories = ['All', 'Code', 'Food', 'Money', 'Misc'];

test("clicking the category button adds a class of 'selected' to the button", () => {
  const onCategoryChange = jest.fn();
  const selectedCategory = 'Code';

  render(
    <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onCategoryChange={onCategoryChange}
    />
  );

  const button = screen.getByText('Code');
  expect(button).toHaveClass('selected');

  fireEvent.click(button);
  expect(onCategoryChange).toHaveBeenCalledWith('Code');
});
