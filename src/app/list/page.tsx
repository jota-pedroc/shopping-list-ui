import React from "react";
import ShoppingList from "./_components/ShoppingList";
import { fetchItems } from "../_lib/api/items";

type Props = object;


export default async function ShoppingListPage({}: Props) {
  const items = await fetchItems();

  return (
    <>
      <h1 className="capitalize text-2xl mb-2">my shopping list</h1>
      <ShoppingList items={items} />
    </>
  );
}
