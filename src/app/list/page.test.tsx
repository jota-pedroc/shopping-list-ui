import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import ShoppingListPage from "./page";

test('should render page', () => {
    render(<ShoppingListPage/>)
    expect(screen.getByRole("heading", {level: 2, name: "my shopping list"}))
 })