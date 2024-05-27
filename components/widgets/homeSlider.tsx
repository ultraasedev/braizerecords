'use client';
import { useState, useEffect } from "react";
import { SliderItem } from "@/components/widgets/slider-item";
import { SliderArrows } from '@/components/widgets/sliderArrows';
import { ThumbnailsItems } from "./thumbnails-items";

export const HomeSlider = () => {
    const [itemActive, setItemActive] = useState<number>(1);
    const countItems = 5;

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
                <SliderItem
                    itemActive={itemActive}
                    id={1}
                    images="/slide_01.png"
                    buttonTypeTitle="Nouveau Single"
                    title="Lashka - Burn Out"
                    description="Apres la tournée des Zenith en 2023 , Lashka reviens avec son nouveau single , un titre engage ou il denonce le dure monde du travail..."
                    buttonActionTitle="Ecouter Maintenant"
                    buttonActionIcon="fa-solid fa-circle-play"
                    buttonActionLink="/"
                    altimages="Lashka - Burn Out"
                />
                <SliderItem
                    itemActive={itemActive}
                    id={2}
                    images="/slide_02.png"
                    buttonTypeTitle="Nouvelle Date "
                    title="Shakaoui - Olympia Nantes"
                    description="Apres la tournée des Zenith en 2023 , Shakaoui reviens avec de nouvelles dates partout en France dont au Zenith de Nantes le 15.03.26 ..."
                    buttonActionTitle="Reserver Maintenant"
                    buttonActionIcon="fa-solid fa-ticket"
                    buttonActionLink="/"
                    altimages="Shakaoui - Olympia Nantes"
                />
                <SliderItem
                    itemActive={itemActive}
                    id={3}
                    images="/slide_03.png"
                    buttonTypeTitle="Nouveau Single"
                    title="Makadam - Fly Air"
                    description="Etoile Montante du rap US sur la scene Francaise , c'est apres le succes de Maskaoff et Feu que Makadam ,debute l'annee 2024 avec le titre explosif Fly Air . . . "
                    buttonActionTitle="Ecouter Maintenant"
                    buttonActionIcon="fa-solid fa-circle-play"
                    buttonActionLink="/"
                    altimages="Makadam - Fly Air"
                />
                <SliderItem
                    itemActive={itemActive}
                    id={4}
                    images="/slide_05.png"
                    buttonTypeTitle="Nouveau Single"
                    title="Nephi - Seul"
                    description="Etoile Montante du rap US sur la scene Francaise , c'est apres le succes de Maskaoff et Feu que Makadam ,debute l'annee 2024 avec le titre explosif Fly Air . . . "
                    buttonActionTitle="Ecouter Maintenant"
                    buttonActionIcon="fa-solid fa-circle-play"
                    buttonActionLink="/"
                    altimages="Nephi - Seul"
                />
                <SliderItem
                    itemActive={itemActive}
                    id={5}
                    images="/slide_04.png"
                    buttonTypeTitle="Evenements"
                    title="Underground Fest"
                    description="Etoile Montante du rap US sur la scene Francaise , c'est apres le succes de Maskaoff et Feu que Makadam ,debute l'annee 2024 avec le titre explosif Fly Air . . . "
                    buttonActionTitle="Ecouter Maintenant"
                    buttonActionIcon="fa-solid fa-circle-play"
                    buttonActionLink="/"
                    altimages="Underground Fest"
                />
            </ul>
            <ul className="absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full px-10 overflow-y-hidden overflow-x-auto">
            <ThumbnailsItems itemActive={itemActive} image="/slide_01.png" id={1} name="Lashka - Burn Out" description="Apres la tournée des Zenith en 2023 , Lashka reviens.." onClick={() => setItemActive(1)} />
                <ThumbnailsItems itemActive={itemActive} image="/slide_02.png" id={2} name="Shakaoui - Olympia Nantes" description="Apres la tournée des Zenith en 2023 , Lashka reviens.." onClick={() => setItemActive(2)} />
                <ThumbnailsItems itemActive={itemActive} image="/slide_03.png" id={3} name="Makadam - Fly Air" description="Apres la tournée des Zenith en 2023 , Lashka reviens.." onClick={() => setItemActive(3)} />
                <ThumbnailsItems itemActive={itemActive} image="/slide_05.png" id={4} name="Nephi - Seul " description="Apres la tournée des Zenith en 2023 , Lashka reviens.." onClick={() => setItemActive(4)} />
                <ThumbnailsItems itemActive={itemActive} image="/slide_04.png" id={5} name="Underground Fest" description="Apres la tournée des Zenith en 2023 , Lashka reviens.." onClick={() => setItemActive(5)} />
            </ul>
        </div>
    );
}