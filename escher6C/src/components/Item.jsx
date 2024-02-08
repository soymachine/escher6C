import React, { useEffect, useState } from 'react';
import {RemoveIcon, AddIcon} from './icons/Icons.jsx';
import './ItemStyles.css';

export default function Item({ id, addItem, removeItem, title, added, categories, video }) {
    
    const categoriesArray = categories.split(",")
    const youtubeURL = `https://www.youtube.com/embed/${video}`
    const color = "#5A4EE0"
    const colorRemove = "#FF3300"

    const handleRemove = (e) => {
        e.preventDefault()
        removeItem(id)
    }

    const handleAdd = (e) => {
        e.preventDefault();
        console.log("handleAdd")
        addItem(id)
    }

    return (
        <>
        <div className="wrapper">
            <div className="header">
                <div className="title">{title}</div>{
                    added ? 
                    <a className="action-button remove-button" href="#" onClick={handleRemove}>
                        <div className="item-icon">
                            <RemoveIcon color={colorRemove} />
                        </div>
                        remove
                    </a> 
                    
                    : 
                    <a className="action-button add-button" href="#" onClick={handleAdd}>
                        <div className="item-icon">
                            <AddIcon color={color} />
                        </div>
                        add
                    </a>
                }
                    
            </div>
            <div className="video">
                <iframe className="video-frame" width="100%" height="215px" src={youtubeURL} allowFullScreen>
                </iframe>
            </div>
            <ul className="category-list">
                {
                    categoriesArray.map((category)=>{
                        return <li key={category} className="category-item">{category}</li>
                    })
                }
            </ul>
        </div>
        </>
      );
}