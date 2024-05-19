"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const HeroBanner = () => {
     const images = [
       "/banner/banner2.png",
       "/banner/chairvibrant.png",
       "/banner/mousevibrant.png",
       "/banner/tablevibrant.png",
       "/banner/vibrantkeyboard.png",
       "/banner/vibrantrtx.png",
     ];
     const [currentImageIndex, setCurrentImageIndex] = useState(0);
     const [isVisible, setIsVisible] = useState(true);
     useEffect(() => {
       const intervalId = setInterval(() => {
         setIsVisible(false);

         setTimeout(() => {
           setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
           setIsVisible(true);
         }, 500);
       }, 6000);

       return () => clearInterval(intervalId);
     }, [images.length]);
    return (
      <Image
        alt="Hero Image"
        className={`rounded-xl object-cover transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        height={600}
        src={images[currentImageIndex]}
        style={{
          aspectRatio: "800/600",
          objectFit: "cover",
        }}
        width={800}
        priority
        quality={100}
      />
    );
}