import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Card from "./Card";

test("should render Card content", () => {
  render(
    <Card>
      <p data-testid="card-content">Some text</p>
    </Card>
  );
  expect(screen.getAllByTestId("card-content")).toBeDefined();
});
