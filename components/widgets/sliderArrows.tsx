import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ArrowsProps {
    onClickPrev: () => void;
    onClickNext: () => void;
}

export const SliderArrows = ({ onClickNext, onClickPrev }: ArrowsProps) => {
    return (
        <div className="absolute inset-0 flex items-center justify-between px-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
                onClick={onClickPrev}
                className="bg-[#eee5] fill-white w-10 h-10 flex items-center justify-center rounded-full transition duration-500 hover:bg-white hover:fill-black"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={onClickNext}
                className="bg-[#eee5] fill-white w-10 h-10 flex items-center justify-center rounded-full transition duration-500 hover:bg-white hover:fill-black"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}
