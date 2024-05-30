"use client";
import React from "react";
import { PinContainer } from "./PinContainer";

export function AnimatedPinDemo({
    title,
    link,
    description,
    img,
    className,
    containerClassName,
  }: {
    title?: string;
    link?: string;
    description: string;
    className?: string;
    containerClassName?: string;
    img: string;
  }) {
  return (
    <div className="w-full flex items-center justify-center ">
      <PinContainer
        title={link}
        href={link}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[25rem] ">
        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 mb-10">
            <img src={img} alt={img} className="w-[90%]"/>
        </div>
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description}
            </span>
          </div>

        </div>
      </PinContainer>
    </div>
  );
}
