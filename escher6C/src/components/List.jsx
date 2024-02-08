import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../components/Item.jsx';
import './ListStyles.css';


export default function List({data}) {
    //console.error(data)
    const [items, setItems] = useState(data.list);

    useEffect(() => {
      console.log("se modificó la lista")
    
      return () => {
        
      }
    }, [data.list])
    
    function toggleItem(id, value) {
        const newList = items.map((item, i) => {
            if (item.id === id) {
              return {
                ...item,
                added: value
              };
            }
            return item;
          })
        return newList  
    }

    function findItemByID(id){
        return items.find(item => item.id === id)
    }
    
    function addItem(index) {
        // console.log("addRoutine")
        const newList = toggleItem(index, true);
        setItems(newList);      
        
        data.addRoutine(findItemByID(index))
    }

    function removeItem(index) {
        const newList = toggleItem(index, false);
        setItems(newList);

        data.removeRoutine(findItemByID(index))
    }


    return (
        <ul className="todo-list list-wrapper">
          {items.map((item, index) => (
            <li key={item.id} className="item">
                <Item id={item.id} addItem={addItem} removeItem={removeItem} added={item.added} title={item.title} video={item.video} categories={item.categories} />
            </li>
          ))}
        </ul>
      );
}