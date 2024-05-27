import { cn } from "@/lib/utils";
import Image from "next/image";

interface SliderItemPropos {
  itemActive: number;
  id: number;
  images: string;
  altimages: string;
  buttonTypeTitle: string;
  title: string;
  description: string;
  buttonActionTitle: string;
  buttonActionIcon: string;
  buttonActionLink: string;
}

export const SliderItem = ({
  itemActive,
  id,
  images,
  altimages,
  buttonTypeTitle,
  title,
  description,
  buttonActionTitle,
  buttonActionIcon,
}: SliderItemPropos) => {
  return (
    <li
      className={cn(
        "absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-slider",
        itemActive === id ? "opacity-100 z-10" : "opacity-0"
      )}
    >
      <div className="relative w-full h-full transition-all duration-300">
        <Image src={images} alt={altimages} fill className="object-cover" />
      </div>
      {/* Button */}
      <div className="space-y-2 absolute left-[10%] top-[23%] w-[400px] max-w-[80%] z-10">
        <button
          className={cn(
            "bg-white text-black text-center min-w-[50%] h-[40%] align-center rounded-sm font-semibold tracking-[2.5px] opacity-0 text-sm sm:text-sm md:text-sm lg:text-base xl:text-lg",
            itemActive === id && "animate-show-content"
          )}
        >
          {buttonTypeTitle}
        </button>
      </div>
      {/* Title */}
      <div
        className={cn(
          "space-y-2 absolute left-[10%] top-[30%] w-[1000px] max-w-[80%] z-10 text-white opacity-0",
          itemActive === id && "animate-show-content animation-delay-4"
        )}
      >
        <h3 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl font-bold line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
      </div>
      {/* Description */}
      <div
        className={cn(
          "space-y-2 absolute left-[10%] top-[42%] w-[850px] max-w-[80%] z-10 text-white opacity-0",
          itemActive === id && "animate-show-content animation-delay-5"
        )}
      >
        <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-normal mb-6 sm:mb-4 md:mb-2 lg:mb-2 line-clamp-3 overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
      {/* Link */}
      <div
        className={cn(
          "space-y-2 absolute left-[10%] top-[54%] z-10 text-red-500 hover:text-white opacity-0",
          itemActive === id && "animate-show-content animation-delay-6"
        )}
      >
        <button className="text-md sm:text-lg md:text-xl lg:text-xl xl:text-xl flex items-center focus:outline-none cta-button font-bold bottom-5">
          <i className={buttonActionIcon}></i>&nbsp;&nbsp;<span className="uppercase">{buttonActionTitle}</span>
        </button>
      </div>
    </li>
  );
};
