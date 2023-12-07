'use client'

import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import ItemCard from "../ItemCard";
import { cn } from "@/lib/utils";
import { textColorBasedOnBgColor } from "@/helpers";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { OneActionModal } from "../Modals";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CategoryAccordion = ({ id: categoryId, labelColor, name, displayFavDate = false, items }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
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
          <Droppable droppableId={categoryId} type={categoryId} isDropDisabled={false}>
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {items ? (
                  items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
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
                  ))
                ) : (
                  <p className={cn("text-xl text-center", { "text-base-100": whiteText, "text-primary-content": !whiteText })}>No items yet</p>
                )}
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
          isLoading={isLoading}
          mainActionHandler={async () => {
            try {
              setIsLoading(true);
              await deleteDoc(doc(db, "categories", categoryId));
              toast.success(`Successfully deleted "${name}" category!`);
              router.reload();
            } catch (e) {
              toast.error('Sorry an error ocurred, please try again later');
              console.error("Error deleting category: ", e);
            } finally {
              setIsLoading(false);
            }
          }}
        />
      )
      }
    </>
  );
};

export default CategoryAccordion;