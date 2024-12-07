import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import Item from "./Item"

const item = {
    name: "Iogurte"
}

test('should render Item with name in a list', () => { 
    render(<Item item={item}/>);
    expect(screen.getByRole("listitem")).toBeDefined();
 })

