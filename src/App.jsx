import { useState } from "react";
import List from "./components/List";
import AddInput from "./components/AddInput";

const SIN_COMPRAR = [
  { id: "item-1", name: "Manzana" },
  { id: "item-2", name: "Pera" },
  { id: "item-3", name: "Platano" },
];

function App() {
  const [listItems, setListItems] = useState(SIN_COMPRAR);
  const [addedItems, setAddedItems] = useState([]);

  const addItem = (item) => {
    setListItems([
      ...listItems,
      { id: `item-${listItems.length + 1}`, name: item },
    ]);
  };

  const buyItem = (item) => {
    const existItem = addedItems.some((value) => value.id === item.id);
    if (!existItem) {
      setAddedItems([...addedItems, item]);
    }
  };

  const removeItem = (item) => {
    const newItems = addedItems.filter((value) => value.id != item.id);
    setAddedItems(newItems);
  };

  return (
    <main className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-6xl mt-5">Tu lista de la compra</h1>
      <AddInput onAddClick={addItem} />
      <div className="flex justify-between min-w-50 gap-8">
        <List
          title={`Productos sin comprar: ${listItems.length}`}
          items={listItems}
          onBuyButtonClick={buyItem}
        />
        <List
          title={`Productos comprados: ${addedItems.length}`}
          items={addedItems}
          onRemove={removeItem}
        />
      </div>
    </main>
  );
}

export default App;
