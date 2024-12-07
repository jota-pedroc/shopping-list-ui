import React from "react";
import { ItemType } from "../_lib/models/Item";
import Card from "./Card";

type Props = {
  item: ItemType;
};

export default function Item({ item }: Props) {
  return (
    <Card>
      <li>{item.name}</li>
    </Card>
  );
}
