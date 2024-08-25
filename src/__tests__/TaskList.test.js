import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import TaskList from "../components/TaskList";

const TASKS = [
  { text: 'Buy rice', category: 'Food' },
  { text: 'Save a tenner', category: 'Money' },
  { text: 'Build a todo app', category: 'Code' },
  { text: 'Build todo API', category: 'Code' },
  { text: 'Get an ISA', category: 'Money' },
  { text: 'Cook rice', category: 'Food' },
  { text: 'Tidy house', category: 'Misc' }
];

test("displays all items when initially rendered", () => {
  render(<TaskList tasks={TASKS} />);
  
  TASKS.forEach(task => {
    expect(screen.getByText(task.text)).toBeInTheDocument();
  });
});
