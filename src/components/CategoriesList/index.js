'use client'

import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import CategoryAccordion from "../CategoryAccordion";

const CategoriesList = ({ categories }) => {
  const [categoriesStore, setCategoriesStore] = useState(categories);

  const handleDragEnd = ({ destination, source }) => {
    if (destination.droppableId != source.droppableId) {
      return;
    }

    const oldIndex = source.index;
    const newIndex = destination.index;
    let updatedList = [...categoriesStore[destination.droppableId].items]
    updatedList.splice(newIndex, 0, updatedList.splice(oldIndex, 1)[0])
    setCategoriesStore({
      ...categoriesStore,
      [destination.droppableId]: {
        ...categoriesStore[destination.droppableId], items: updatedList
      }
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col gap-2">
        {Object.keys(categoriesStore).map((category, index) => (
          <CategoryAccordion key={`category-${index}`} {...categoriesStore[category]} />
        ))}
      </div>
    </DragDropContext>

  );
};

export default CategoriesList;