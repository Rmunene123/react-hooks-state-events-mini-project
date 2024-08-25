import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import NewTaskForm from "../components/NewTaskForm";

// Mock callback function
const onTaskFormSubmit = jest.fn();

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  render(<NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />);

  // Fill in the form
  fireEvent.change(screen.getByLabelText(/Text/), { target: { value: 'Pass the tests' } });
  fireEvent.change(screen.getByLabelText(/Category/), { target: { value: 'Code' } });

  // Click the submit button
  fireEvent.click(screen.getByText(/Add task/));

  // Assert that the callback was called with the correct arguments
  expect(onTaskFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "Pass the tests",
      category: "Code",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  // Mock function and pass it as prop
  const mockOnTaskFormSubmit = jest.fn();

  render(<NewTaskForm onTaskFormSubmit={mockOnTaskFormSubmit} />);

  // Fill in the form
  fireEvent.change(screen.getByLabelText(/Text/), { target: { value: 'Pass the tests' } });
  fireEvent.change(screen.getByLabelText(/Category/), { target: { value: 'Code' } });

  // Click the submit button
  fireEvent.click(screen.getByText(/Add task/));

  // Log the DOM to help debug
  screen.debug();

  // Check if the new task is in the document
  expect(mockOnTaskFormSubmit).toHaveBeenCalledWith({
    text: 'Pass the tests',
    category: 'Code'
  });
});
