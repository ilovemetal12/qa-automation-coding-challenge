import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  // --- App basic functional structure scenarios ---
  // ---Scenario 1: App is rendered without issues---
  it("Should render without issues", () => {
    render(<App />);
  });

  // ---Scenario 2: Should render an error response after introducing a none existing user ---
  // it("Should render a correct message after introducing a none existing user ", async () => {
  //   // --- Rendering App ---
  //   render(<App />);

  //   // --- Extracting DOM elements ---
  //   const usernameInput = screen.getByLabelText("Github Username");
  //   const submitButton = screen.getByText("Go");

  //   // ---Firing events---
  //   fireEvent.change(usernameInput, { target: { value: "nonexistentuser" } });
  //   fireEvent.click(submitButton);

  //   // --- Testing DOM elements ---
  //   let message = await screen.findByText("No repos", {
  //     timeout: 3000,
  //     exact: false,
  //   });
  //   expect(message).toBeInTheDocument();
  // });

  // ---Scenario 3: Should render an error response after introducing a none existing user ---
  // it("Should render an error message after introducing a none existing user", async () => {
  //   // --- Rendering App ---
  //   render(<App />);

  //   // --- Extracting DOM elements ---
  //   const usernameInput = screen.getByLabelText("Github Username");
  //   const submitButton = screen.getByText("Go");

  //   // ---Firing events---
  //   fireEvent.change(usernameInput, { target: { value: "nonexistentuser" } });
  //   fireEvent.click(submitButton);

  //   // --- Testing DOM elements ---
  //   const errorMessage = await screen.findByText("Github user not found");
  //   expect(errorMessage).toBeInTheDocument();
  // });

  // ---Scenario 4: Should render a repos list after introducing a existing user ---

  // it("Should render a repos list after introducing a existing user", async () => {

  //   // --- Rendering App ---
  //   render(<App />);

  //   // --- Extracting DOM elements ---
  //   const usernameInput = screen.getByLabelText("Github Username");
  //   const submitButton = screen.getByText("Go");

  //   // ---Firing events---
  //   fireEvent.change(usernameInput, { target: { value: "ilovemetal12" } });
  //   fireEvent.click(submitButton);

  //   // --- Testing DOM elements ---
  //   // const foundReposMessage = await screen.findByText(/Found \d+ Repos/i);

  //   // expect(foundMessages).toBeInTheDocument();
  // });
});
