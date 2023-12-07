'use client'

import Image from "next/image";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { RiStarFill, RiStarLine, RiDeleteBin6Line } from "react-icons/ri";
import { OneActionModal } from "../Modals";
import { setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";
import dayjs from 'dayjs';
import { useRouter } from "next/navigation";

const ItemCard = ({ id: itemId, name, image, favorite = false, favDate, displayFavDate = false }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleFavoriteAction = async (e) => {
    e.preventDefault();
    try {
      const newState = !isFavorite;
      const favDate = newState ? dayjs().format('DD/MM/YYYY') : null;
      await setDoc(doc(db, "items", itemId), { favorite: newState, favDate }, { merge: true });
      const toastMessage = !isFavorite ? 'Item successfully added to favorites!' : 'Item removed from favorites!';
      toast(toastMessage, { position: "bottom-right" });
      setIsFavorite(newState);
    } catch (e) {
      toast.error('Sorry an error ocurred, please try again later');
      console.error("Error changing the favorite the item: ", e);
    }
  }

  return (
    <Fragment>
      <div className="card card-side bg-base-300 shadow-xl h-24 md:h-32">
        <figure className="h-full w-20 md:w-32 relative">
          <Image
            src={image}
            alt={`${name} - image`}
            style={{ objectFit: 'fill' }}
            sizes='100%, 100%'
            fill
          />
        </figure>
        <div className="flex-1 flex items-center px-1 md:px-4">
          <h4 className="flex-1 text-base-content text-base md:text-3xl font-bold">
            {name}
          </h4>
          <div className="flex flex-col items-center gap-0.5">
            <button className="btn btn-circle border-none bg-inherit shadow-none shrink-0 z-10 text-orange-400 text-xl md:text-2xl" onClick={handleFavoriteAction}>
              {isFavorite ? <RiStarFill /> : <RiStarLine />}
            </button>
            {favDate && displayFavDate && (
              <div className="shrink-0 text-gray-500 text-xs md:text-lg">
                {favDate}
              </div>
            )}
          </div>
          <button className="btn btn-circle border-none bg-inherit shadow-none shrink-0 z-10 text-red-600 text-lg md:text-2xl" onClick={() => setShowModal(true)}>
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
      {showModal && (
        <OneActionModal
          title="Delete Item"
          mainActionText="Delete"
          content={<p className="py-4">{`Are you sure that you want to delete "${name}"?`}</p>}
          onCloseHandler={() => setShowModal(false)}
          isLoading={isLoading}
          mainActionHandler={async () => {
            try {
              setIsLoading(true);
              await deleteDoc(doc(db, "items", itemId));
              toast.success(`Successfully deleted "${name}" item!`);
              router.refresh();
            } catch (e) {
              toast.error('Sorry an error ocurred, please try again later');
              console.error("Error deleting the item: ", e);
            } finally {
              setIsLoading(false);
            }
          }}
        />
      )}
    </Fragment>
  );
};

export default ItemCard;