import { renderWithProviders } from "../../test/renderWithProviders";
import VisitList from "./VisitList";
import { describe, it, expect } from "vitest";

/* 
  Implement the following acceptance criteria:
  - Add 1 test (filtering or error state) error state will likely require editing
    visitApi.ts
  */

describe("VisitList", () => {
  it("renders empty loading state initially", () => {
    const { getByText } = renderWithProviders(<VisitList />);
    expect(getByText(/loading/i)).toBeDefined();
  });
});
