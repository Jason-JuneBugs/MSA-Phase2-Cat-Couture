// import { render, screen } from "@testing-library/react";
// import { createMemoryHistory } from "history";
// import { Router } from "react-router-dom";
// import Header from "./Header";

// beforeEach(() => {
//   const history = createMemoryHistory();
//   render(
//     <Router location={history.location} navigator={history}>
//       <Header />
//     </Router>
//   );
// });

// describe("Header", () => {
//   test("The header renders", () => {
//     expect(screen.getByText(/products/i)).toBeInTheDocument();
//     expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
//     expect(screen.getByText(/cat couture/i)).toBeInTheDocument();
//   });
// });

import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom"; // Make sure this import is correct
import Header from "./Header"; // Verify the path to your Header component

describe("Header", () => {
  test("The header renders", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/cat couture/i)).toBeInTheDocument();
  });
});
