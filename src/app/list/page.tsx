import React from "react";
import ShoppingList from "./_components/ShoppingList";
import { fetchItems } from "../_lib/api/items";

type Props = object;


export default async function ShoppingListPage({}: Props) {
  const items = await fetchItems();

  return (
    <>
      <h2 className="capitalize text-2xl">my shopping list</h2>
      <ShoppingList items={items} />
    </>
  );
}
