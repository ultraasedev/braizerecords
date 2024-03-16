import { cn } from "@/lib/utils";
import Image from 'next/image';

interface ThumbnailsItemProps {
    itemActive: number;
    id: number;
    image: string;
    name: string;
    onClick: () => void;
}

export const ThumbnailsItems = ({itemActive, id, image, name, description ,onClick}: ThumbnailsItemsProps) => {
    return ( 
        <li role="button" onClick={onClick} className={cn("h-[250px]  shrink-0 transition-all duration-300 overflow-hidden relative after:absolute after:w-full after-h-full after:h-full after:left-0 after:bottom-0 after:bg-thumbnails hover:brightness-150", itemActive === id ? "w-[200px] brightness-150" : "w-[50px] brightness-50")}>
        <div className="relative w-full h-full rounded-lg ">
        <Image src={image} alt="image" fill className="object-cover rounded-lg"/>
        </div>
        <div className={cn("absolute top-auto right-[10px] bottom-[20px] left-[10px] z-10 translate-y-[30px] blur-[20px] opacity-0 animation-delay-3", itemActive === id && "animate-show-content")}>
            <h3 className="line.-clamp-1 font-semibold text-base">{name}</h3>
            <p className="text-ellipsis text-sm">{description}</p>
        </div>
        </li>
     );
}