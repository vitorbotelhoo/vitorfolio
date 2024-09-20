"use client";

import Anchor from "./socialsanchor";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function AboutCard({
  Tagline,
  Headline,
  Date,
  Desc,
  ImagemUm,
  ImagemDois,
  LinkCase
}) {
  const dragRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState({ left: 0, top: 0 });
  
  // Estado para o pop-up
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    const ele = dragRef.current;
    if (!ele) return;

    const mouseDownHandler = (e) => {
      setIsDragging(true);
      setStartPos({
        x: e.clientX,
        y: e.clientY,
      });
      setScrollPos({
        left: ele.scrollLeft,
        top: ele.scrollTop,
      });
    };

    const mouseMoveHandler = (e) => {
      if (!isDragging) return;

      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;

      ele.scrollLeft = scrollPos.left - dx;
      ele.scrollTop = scrollPos.top - dy;
    };

    const mouseUpHandler = () => {
      setIsDragging(false);
    };

    ele.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    return () => {
      ele.removeEventListener("mousedown", mouseDownHandler);
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [isDragging, startPos, scrollPos]);

  // Função para abrir o pop-up com a imagem selecionada
  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  // Função para fechar o pop-up
  const closePopup = () => {
    setPopupImage(null);
  };

  return (

    <div
    id="card"
    className="flex min-w-[280px] max-w-xs md:max-w-xs sm:max-w-[360px] flex-col items-start gap-[8px] flex-[1_0_0]
              rounded-[24px] bg-[rgba(227,235,242,0.48)] hover:bg-[rgba(178,217,252,0.24)]
              shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] hover:shadow-[0px_80px_120px_0px_rgba(0,0,0,0.08)]
              z-0 hover:z-5 hover:scale-[100.5%]
              p-[20px] transition-all duration-500">
      <p
        className=" text-[var(--vtr-neutral-30)] font-bold">
          { Tagline }
      </p>
      <div
        id="content"
        className="pt-[32px] w-full flex flex-col gap-[16px]">
        <div
          id="heading"
          className="flex flex-col w-full gap-[8px]">
            <h1 
              className="vtr-heading">
                { Headline }
            </h1>
            <p
              className="line-clamp-2 hover:line-clamp-none
                h-[40px] lg:h-[40px] hover:h-fit md:h-fit w-full
                transition-all duration-500 ease-in-out">
              { Desc }
            </p>
          </div>
          {/* Área de imagens */}
        <div
          id="draggimage"
          ref={dragRef}
          className="flex mx-[-20px] px-4 flex-row gap-[8px] h-fit overflow-x-auto cursor-grab"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
          <img
            className="rounded-[12px] bg-slate-500/50 h-[200px] w-full object-cover"
            src={ImagemUm}
            draggable="false"
            onClick={() => openPopup(ImagemUm)} // Abre o pop-up com a primeira imagem
          />
        </div>


        <div
          className="w-full flex flex-row justify-end">
          {LinkCase && (
            <Anchor
              Link={ LinkCase }
              Content="About"
            />
          )}
      </div>


      </div>
    </div>
  );
}