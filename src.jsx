import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Tree, TreeItem, TreeItemContent, ListBox, ListBoxItem} from 'react-aria-components';
import './style.css';
const rows = [{id: 'one', name: 'Item 1'}, {id: 'two', name: 'Item 2'}, {id: 'three', name: 'Item 3'}];
function App() {
  const [treeItems, setTreeItems] = useState([]);
  const [listItems, setListItems] = useState([]);
  function populate(event, items, setItems) {
    if (event.key === 'Enter' && items.length === 0) {
      setItems(rows);
    }
  }
  return <main>
    <h1>Keyboard focus after populating an empty Tree</h1>
    <p>React Aria Components 1.21.1. Tab into an empty collection, press Enter to add rows, then ArrowDown. Expected: focus moves to Item 1. The Tree remains stuck; the ListBox control moves to Item 1.</p>
    <button onClick={() => {setTreeItems([]); setListItems([]);}}>Reset both collections</button>
    <h2>Tree reproduction</h2>
    <section onKeyDownCapture={event => populate(event, treeItems, setTreeItems)}>
    <Tree aria-label="Tree reproduction" items={treeItems} renderEmptyState={() => 'Empty. Press Enter to add rows.'}>
      {item => <TreeItem id={item.id} textValue={item.name}><TreeItemContent>{item.name}</TreeItemContent></TreeItem>}
    </Tree>
    </section>
    <h2>ListBox control</h2>
    <section onKeyDownCapture={event => populate(event, listItems, setListItems)}>
    <ListBox aria-label="ListBox control" items={listItems} selectionMode="single" renderEmptyState={() => 'Empty. Press Enter to add rows.'}>
      {item => <ListBoxItem id={item.id} textValue={item.name}>{item.name}</ListBoxItem>}
    </ListBox>
    </section>
    <button>After collections</button>
  </main>;
}
createRoot(document.getElementById('root')).render(<App />);
