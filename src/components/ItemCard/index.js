import Image from "next/image";
import { RiStarFill, RiStarLine, RiDeleteBin6Line } from "react-icons/ri";

const ItemCard = ({ name = "Esto es un ejemplo", image = "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg", favorite = false, favDate = "31/12/2023" }) => {
  return (
    <div className="card card-side bg-base-300 shadow-xl h-32">
      <figure className="h-full w-32 relative">
        <Image
          src={image}
          alt={`${name} - image`}
          style={{ objectFit: 'fill' }}
          sizes='100%, 100%'
          fill
        />
      </figure>
      <div className="flex-1 flex items-center">
        <h4 className="flex-1 text-3xl font-bold">
          {name}
        </h4>
        <button className="btn btn-circle shadow-none shrink-0 z-10 text-yellow-500 text-2xl" onClick={() => console.log('Se Hizo Click en Favoritos')}>
          {favorite ? <RiStarFill /> : <RiStarLine />}
        </button>
        <div className="shrink-0 text-gray-100 text-lg">
          {favDate}
        </div>
        <button className="btn btn-circle shadow-none shrink-0 z-10 text-red-600 text-2xl" onClick={() => console.log('Se Hizo Click en Eliminar')}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;