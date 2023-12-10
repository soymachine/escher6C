import React, { useEffect, useState } from 'react';
import './ItemStyles.css';

export default function Item({ title, added, categories, video }) {
    
    const categoriesArray = categories.split(",")
    const youtubeURL = `https://www.youtube.com/embed/${video}`
    return (
        <>
        <div className="wrapper">
            <div className="header">
                <div className="title">{title}</div>{
                    added ? <a class="remove-button" href="#">REMOVE</a> : <a class="add-button" href="#">ADD</a>
                }
                    
            </div>
            <div class="video">
                <iframe className="video-frame" width="100%" height="215px" src={youtubeURL} allowfullscreen>
                </iframe>
            </div>
            <ul class="category-list">
                {
                    categoriesArray.map((category)=>{
                        return <li class="category-item">{category}</li>
                    })
                }
            </ul>
        </div>
        </>
      );
}