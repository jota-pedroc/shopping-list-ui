import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import Item from "./Item"

const itemExample = {
    name: "Iogurte"
}

test('should render Item with name in a list', () => { 
    render(<Item item={itemExample}/>);
    const item = screen.getByRole("listitem");
    expect(item).toBeDefined();
    expect(item.textContent).toBe(itemExample.name)
 })

