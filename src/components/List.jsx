import React from "react";
import Div from "./Div";

// this is a component that will display a list of items
// the list will have a checkbox next to each item
// the list will have a button to remove all checked items
// the list will have a button to add a new item
// the list will have a button to remove all items
// the list will have a button to remove all checked items
// the list will have a button to check all items
// the list will have a button to uncheck all items
// the list will have a button to reverse the order of the items
// the list will have a button to sort the items alphabetically
// the list will have a button to shuffle the items
// the list will have a button to filter the items
// the list will have a button to clear the filter
// the list will have a button to toggle the filter
// the list will have a button to reset the list

export default function List() {
  const [items, setItems] = React.useState([]);
  const [newItem, setNewItem] = React.useState("");
  const [filter, setFilter] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [checkedItems, setCheckedItems] = React.useState([]);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { id: items.length, value: newItem, checked: false }]);
      setNewItem("");
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const removeAllItems = () => {
    setItems([]);
  };

  const removeCheckedItems = () => {
    setItems(items.filter((item) => !item.checked));
  };

  const checkAllItems = () => {
    setItems(items.map((item) => ({ ...item, checked: true })));
  };

  const uncheckAllItems = () => {
    setItems(items.map((item) => ({ ...item, checked: false })));
  };

  const reverseItems = () => {
    setItems([...items].reverse());
  };

  const sortItems = () => {
    setItems([...items].sort((a, b) => a.value.localeCompare(b.value)));
  };

  const shuffleItems = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  const resetList = () => {
    setItems([]);
    setNewItem("");
    setFilter("");
    setCheckedItems([]);
  };

  const applyFilter = () => {
    setFilter(searchTerm);
  };

  return (
    <Div style={{ width: "100%", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Task Manager Component</h2>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ padding: "5px 10px", marginRight: "10px" }}>☰</button>
          {menuOpen && (
            <div style={{ position: "absolute", top: "100%", left: 0, backgroundColor: "white", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", zIndex: 1, width: "200px", padding: "10px", borderRadius: "5px", maxHeight: "200px", overflowY: "auto" }}>
              <button style={{ width: "100%", marginBottom: "5px" }} onClick={removeAllItems}>Remove All Items</button>
              <button style={{ width: "100%", marginBottom: "5px" }} onClick={removeCheckedItems}>Remove Checked Items</button>
              <button style={{ width: "100%", marginBottom: "5px" }} onClick={checkAllItems}>Check All Items</button>
              <button style={{ width: "100%", marginBottom: "5px" }} onClick={uncheckAllItems}>Uncheck All Items</button>
              <button style={{ width: "100%", marginBottom: "5px" }} onClick={reverseItems}>Reverse Items</button>
              <button style={{ width: "100%", marginBottom: "5px" }} onClick={sortItems}>Sort Items</button>
              <button style={{ width: "100%", marginBottom: "5px" }} onClick={shuffleItems}>Shuffle Items</button>
              <button style={{ width: "100%", marginBottom: "5px" }} onClick={resetList}>Reset List</button>
            </div>
          )}
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: "5px", marginRight: "10px" }}
          />
          <button onClick={applyFilter} style={{ padding: "5px 10px" }}>
            <span role="img" aria-label="search">🔍</span>
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New task"
          style={{ flex: "2", marginRight: "10px", padding: "5px" }}
        />
        <button onClick={addItem} style={{ padding: "5px 10px" }}>Add Item</button>
      </div>
      <div>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {items
            .filter((item) => item.value.includes(filter))
            .map((item) => (
              <li key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() =>
                    setItems(
                      items.map((i) =>
                        i.id === item.id ? { ...i, checked: !i.checked } : i
                      )
                    )
                  }
                  style={{ marginRight: "10px" }}
                />
                <span style={{ flex: "1" }}>{item.value}</span>
                <button onClick={() => removeItem(item.id)} style={{ padding: "5px 10px" }}>Remove</button>
              </li>
            ))}
        </ul>
      </div>
    </Div>
  );
}