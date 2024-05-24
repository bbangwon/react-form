import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";
function ShoppingList(){
    const [items, setItems] = useState([
        {id: uuid(), product: "Milk", quantity: 2},
        {id: uuid(), product: "Eggs", quantity: 12},
    ]);

    const addItem = (item) => {
        setItems(currItems => {
            return [...currItems, {...item, id: 9}];
        });
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(item => {
                    return <li key={uuid()}>{item.product} - {item.quantity}</li>
                })}
            </ul>
            <ShoppingListForm addItem={addItem} />
        </div>
    )
}

export default ShoppingList;