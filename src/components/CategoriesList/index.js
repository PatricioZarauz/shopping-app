'use client'

import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import CategoryAccordion from "../CategoryAccordion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EmptyPlaceholder = ({ pathname }) => {
  if (pathname == '/favorites') {
    return (
      <p className="text-lg mt-10 text-primary-content text-center">
        No items were added as favorite yet.
      </p>
    );
  }

  return (
    <p className="text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-content text-center">
      No categories created yet. {<Link className="link" href="/categories/create">Create one</Link>}
    </p>
  );
};

const CategoriesList = ({ categories, displayFavDate = false }) => {
  const [categoriesStore, setCategoriesStore] = useState(categories);
  const pathname = usePathname();

  useEffect(() => {
    setCategoriesStore(categories)
  }, [categories])

  const handleDragEnd = ({ destination, source }) => {
    if (destination?.droppableId != source?.droppableId) {
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
        {Object.keys(categoriesStore).map((categoryId, index) => (
          <CategoryAccordion key={`category-${index}`} {...categoriesStore[categoryId]} id={categoryId} displayFavDate={displayFavDate} />
        ))}
        {!Object.keys(categoriesStore).length && (<EmptyPlaceholder pathname={pathname} />)}
      </div>
    </DragDropContext>
  );
};

export default CategoriesList;