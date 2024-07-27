"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Carouselcomponent() {

  return (
    <div className="flex justify-center w-full  ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="lg:w-[50%] w-[75%] cursor-pointer hover:shadow-lg hover:scale-105 transition duration-200"
      >
        <CarouselContent>
          <CarouselItem>
            <img src="./banners/1.png" alt="Banner 1" />
          </CarouselItem>
          <CarouselItem>
            <img src="./banners/2.png" alt="Banner 2" />
          </CarouselItem>
          <CarouselItem>
            <img src="./banners/3.png" alt="Banner 3" />
          </CarouselItem>
          <CarouselItem>
            <img src="./banners/4.png" alt="Banner 4" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
