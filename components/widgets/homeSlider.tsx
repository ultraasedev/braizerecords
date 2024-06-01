'use client';
import { useState, useEffect } from "react";
import { SliderItem } from "@/components/widgets/slider-item";
import { ThumbnailsItems } from "./thumbnails-items";

interface SliderItemData {
  _id: string;
  title: string;
  date: Date;
  description: string;
  category: string;
  imageUrl: string;
  slug: string;
  buttonTypeTitle: string;
  buttonActionTitle: string;
  buttonActionIcon: string;
  buttonActionLink: string;
}

export const HomeSlider = () => {
    const [itemActive, setItemActive] = useState<number>(1);
    const [sliderItems, setSliderItems] = useState<SliderItemData[]>([]);
    const countItems = 5;

    useEffect(() => {
        const fetchSliderItems = async () => {
            const response = await fetch('/api/slider-items');
            const data = await response.json();
            // Convertir les dates de chaîne en objets Date
            const formattedData = data.map((item: SliderItemData) => ({
                ...item,
                date: new Date(item.date),
            }));
            setSliderItems(formattedData);
        };

        fetchSliderItems();
    }, []);

    const onNext = () => {
        setItemActive((prevItemActive) => prevItemActive % countItems + 1);
    };

    const onPrev = () => {
        setItemActive((prevItemActive) => {
            if (prevItemActive === 1) {
                return countItems;
            } else {
                return prevItemActive - 1;
            }
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            onNext();
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-dvh relative pb-5 group">
            <ul>
                {sliderItems.map((item, index) => (
                    <SliderItem
                        key={item._id}
                        itemActive={itemActive}
                        id={index + 1}
                        images={item.imageUrl}
                        buttonTypeTitle={item.buttonTypeTitle}
                        title={item.title}
                        description={item.description}
                        buttonActionTitle={item.buttonActionTitle}
                        buttonActionIcon={item.buttonActionIcon}
                        buttonActionLink={item.buttonActionLink}
                        altimages={item.title}
                    />
                ))}
            </ul>
            <ul className="absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full px-10 overflow-y-hidden overflow-x-auto">
                {sliderItems.map((item, index) => (
                    <ThumbnailsItems
                        key={item._id}
                        itemActive={itemActive}
                        image={item.imageUrl}
                        id={index + 1}
                        name={item.title}
                        description={item.description}
                        onClick={() => setItemActive(index + 1)}
                    />
                ))}
            </ul>
        </div>
    );
}