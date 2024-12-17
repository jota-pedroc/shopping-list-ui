import { ItemType } from "../models/Item";

const BASE_URL = "http://localhost:5118"

export async function fetchItems(): Promise<ItemType[]>{
    const response = await fetch(`${BASE_URL}/api/v1/items/`);
    
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json() as ItemType[]
}