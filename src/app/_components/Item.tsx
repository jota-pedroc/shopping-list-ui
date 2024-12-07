import React from 'react'
import { ItemType } from '../_lib/models/Item'

type Props = {
    item: ItemType
}

export default function Item({item}: Props) {
  return (
    <ul>{item.name}</ul>
  )
}