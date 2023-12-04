'use client'

import { useEffect, useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import ItemCard from "../ItemCard";

const aux = ['Ejemplo 1', 'Ejemplo 2', 'Ejemplo 3', 'Ejemplo 4'];

const CategoryAccordion = () => {
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const [items, setItems] = useState(aux);

  const handleDragStart = (e, index) => {
    // e.preventDefault();
    // e.stopPropagation();
    dragItem.current = index;
    console.log('Start', index);
  }
  const handleDragEnter = (e, index) => {
    // e.preventDefault();
    // e.stopPropagation();
    dragOverItem.current = index;
    console.log('Enter', index);
  }
  const handleDragEnd = (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    console.log('End');
    //duplicate items
    let newItems = [...items];

    //remove and save the dragged item content
    const [draggedItemContent] = newItems.splice(dragItem.current, 1);

    //switch the position
    newItems.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setItems(newItems);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    console.log('Over');
  }


  return (
    <div className="collapse collapse-arrow bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium flex-1">
            Este es el Titulo
          </h3>
          <button className="btn btn-circle shadow-none shrink-0 z-10 text-red-600 text-2xl" onClick={() => console.log('Se Hizo Click')}>
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
      <div className="collapse-content">
        <ul>
          {items.map((name, index) => (
            <li
              key={`${name}-${index}`}
              className="my-1 rounded-md cursor-move"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
            >
              <ItemCard name={name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryAccordion;