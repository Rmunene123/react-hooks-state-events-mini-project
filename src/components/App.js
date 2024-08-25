import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import NewTaskForm from "../components/NewTaskForm";

// Mock callback function
const onTaskFormSubmit = jest.fn();

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  render(<NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />);

  fireEvent.change(screen.getByLabelText(/Text/), { target: { value: 'Pass the tests' } });
  fireEvent.change(screen.getByLabelText(/Category/), { target: { value: 'Code' } });

  // Click the submit button to trigger form submission
  fireEvent.click(screen.getByText(/Add task/));

  expect(onTaskFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "Pass the tests",
      category: "Code",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  render(<NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />);

  fireEvent.change(screen.getByLabelText(/Text/), { target: { value: 'Pass the tests' } });
  fireEvent.change(screen.getByLabelText(/Category/), { target: { value: 'Code' } });

  // Click the submit button to trigger form submission
  fireEvent.click(screen.getByText(/Add task/));

  // Log the DOM to debug
  screen.debug();

  // Ensure the new task is displayed
  expect(screen.queryByText(/Pass the tests/)).toBeInTheDocument();
});
