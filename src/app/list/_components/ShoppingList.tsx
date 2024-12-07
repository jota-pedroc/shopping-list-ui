import Item from "@/app/_components/Item";
import { ItemType } from "@/app/_lib/models/Item";
import React from "react";

type Props = {
  items: ItemType[];
};

export default function ShoppingList({ items }: Props) {
  return (
    <ul className="list-disc list-inside grid grid-cols-1 gap-2">
      {items.map((item) => (
        <Item item={item} key={item.name} />
      ))}
    </ul>
  );
}
