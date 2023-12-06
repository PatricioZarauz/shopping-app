'use client'

import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import ItemCard from "../ItemCard";
import { cn } from "@/lib/utils";
import { textColorBasedOnBgColor } from "@/helpers";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { OneActionModal } from "../Modals";

const CategoryAccordion = ({ labelColor, name, displayFavDate = false, items }) => {
  const [showModal, setShowModal] = useState(false);
  const whiteText = '#FFFFFF' === textColorBasedOnBgColor(labelColor);
  const textColor = {
    "text-base-100": whiteText,
    "text-primary-content": !whiteText
  };

  return (
    <>
      <div className={cn("collapse collapse-arrow max-w-2xl mx-auto", textColor)} style={{ backgroundColor: labelColor }}>
        <input type="checkbox" />
        <div className="collapse-title">
          <div className="flex justify-between items-center">
            <h3 className={cn("text-2xl font-bold flex-1", textColor)}>
              {name}
            </h3>
            <button
              className={cn("btn btn-circle border-none bg-inherit shadow-none shrink-0 z-10 text-xl",
                {
                  "text-base-100 hover:bg-base-100 hover:bg-opacity-20": whiteText,
                  "text-primary-content hover:bg-primary-content hover:bg-opacity-20": !whiteText
                })}
              onClick={() => setShowModal(true)}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
        <div className="collapse-content">
          <Droppable droppableId={name} type={name} isDropDisabled={false}>
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {items.map((item, index) => (
                  <Draggable key={`${item.name}-${index}`} draggableId={item.name} index={index}>
                    {(provided) => (
                      <li
                        className="my-1 cursor-grab active:cursor-grabbing rounded-md"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <ItemCard {...item} displayFavDate={displayFavDate} />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </div >
      {showModal && (
        <OneActionModal
          title="Delete Category"
          mainActionText="Delete"
          content={<p className="py-4">{`Are you sure that you want to delete "${name}"?`}</p>}
          onCloseHandler={() => setShowModal(false)}
          mainActionHandler={() => { console.log('Se Borro Category correctamente') }}
        />
      )}
    </>
  );
};

export default CategoryAccordion;