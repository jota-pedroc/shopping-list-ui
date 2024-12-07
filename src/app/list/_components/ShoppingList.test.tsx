import { afterEach, expect, test } from "vitest";
import ShoppingList from "./ShoppingList";
import { cleanup, render, screen } from "@testing-library/react";
import { ItemType } from "@/app/_lib/models/Item";

const itemsExamples: ItemType[] = [
  {
    name: "Iogurte",
  },
  {
    name: "Aveia",
  },
];

afterEach(cleanup);

test("should render shopping list with items", () => {
  render(<ShoppingList items={itemsExamples} />);
  expect(screen.getByRole("list")).toBeDefined();
  expect(screen.getAllByRole("listitem").length).toBe(2);
});

test("should render empty shopping list when input is empty", () => {
  render(<ShoppingList items={[]} />);
  expect(screen.getByRole("list")).toBeDefined();
  expect(screen.queryAllByRole("listitem").length).toBe(0);
});