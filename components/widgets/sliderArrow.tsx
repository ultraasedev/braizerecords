interface ArrowsProps {
    onClickPrev: () => void;
    onClickNext: () => void;

}

export const SliderArrows = ({onClickNext, onClickPrev}: ArrowsProps) => {
    return ( 
    <div className="relative bottom-[260px] right-14 z-10 flex items-center gap-1">
<button onClick={onClickPrev} className="bg-[#eee5] fill-white w-10 h-10 flex items-center justify-center rounded-tl-lg rounded-bl-lg transition duration-500 hover:bg-white hover:fill-black translate-y-[30px] blur-[20px] opacity-0 animate-show-content">
Next
</button>
<button onClick={onClickNext} className="bg-[#eee5] fill-white w-10 h-10 flex items-center justify-center rounded-tl-lg rounded-bl-lg transition duration-500 hover:bg-white hover:fill-black translate-y-[30px] blur-[20px] opacity-0 animate-show-content">Suivant</button>
   
    </div> );
}
 
