import { cn } from "@/lib/utils";
import Image from 'next/image';

interface ThumbnailsItemsProps {
  itemActive: number;
  id: number;
  image: string;
  name: string;
  description: string;
  onClick: () => void;
}

export const ThumbnailsItems = ({ itemActive, id, image, name, description, onClick }: ThumbnailsItemsProps) => {
  return (
    <li
      role="button"
      onClick={onClick}
      className={cn(
        "h-[200px] w-[100px] sm:h-[200px] sm:w-[100px] md:h-[200px] md:w-[100px] lg:h-[300px] lg:w-[150px] flex flex-col justify-center items-center transition-all duration-200 overflow-hidden relative after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-thumbnails hover:brightness-150",
        itemActive === id ? "brightness-150" : "brightness-50"
      )}
    >
      <div className="relative w-full h-full rounded-lg">
        <Image src={image} alt="image" fill className="object-cover rounded-lg" />
      </div>
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 z-10 p-2 text-center transition-all duration-300 transform translate-y-[20px] opacity-0",
          itemActive === id && "translate-y-0 opacity-100"
        )}
      >
        <h3 className="line-clamp-1 font-semibold text-sm sm:text-base">{name}</h3>
        <p className="line-clamp-2 text-xs sm:text-sm">{description}</p>
      </div>
    </li>
  );
}
