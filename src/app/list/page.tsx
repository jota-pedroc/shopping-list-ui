import React from "react";
import ShoppingList from "./_components/ShoppingList";

type Props = object;

const mockedData = [
  {
    name: "Iogurte",
  },
  {
    name: "Aveia",
  },
];

export default function ShoppingListPage({}: Props) {
  return (
    <>
      <h2 className="capitalize text-2xl">my shopping list</h2>
      <ShoppingList items={mockedData} />
    </>
  );
}
