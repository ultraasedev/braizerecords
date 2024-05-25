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
        <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
          {title}
        </h3>
      </div>
      {/* Description */}
      <div
        className={cn(
          "space-y-2 absolute left-[10%] top-[43%] w-[850px] max-w-[80%] z-10 text-white opacity-0",
          itemActive === id && "animate-show-content animation-delay-5"
        )}
      >
        <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-normal mb-6 sm:mb-4 md:mb-2 lg:mb-2">
          {description}
        </p>
      </div>
      {/* Link */}
      <div
        className={cn(
          "space-y-2 absolute left-[10%] top-[58%] w-[800px] max-w-[80%] sm:mb-8 md:mb-4 lg:mb-4 z-10 mb-4 text-red-500 hover:text-white opacity-0",
          itemActive === id && "animate-show-content animation-delay-6"
        )}
      >
        <button className="text-md sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl flex items-center focus:outline-none cta-button font-bold">
        <i className={buttonActionIcon}></i>&nbsp;&nbsp;<span className="uppercase">{buttonActionTitle}</span>
        </button>
      </div>
    </li>
  );
};