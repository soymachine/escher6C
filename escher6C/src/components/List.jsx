import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../components/Item.jsx';
import './ListStyles.css';

export default function List({ initialItems }) {
    const [items, setItems] = useState(initialItems);
    
    function addItem(index) {
      const newItems = [...items];
      newItems[index].completed = !newItems[index].completed;
      setItems(newItems);
    }


    return (
        <ul className="todo-list list-wrapper">
          {items.map((item, index) => (
            <li className="item">
                <Item addItem={addItem} added={item.added} title={item.title} video={item.video} categories={item.categories} />
            </li>
          ))}
        </ul>
      );
}