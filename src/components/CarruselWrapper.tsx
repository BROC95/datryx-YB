"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CarruselProps = {
  imagenes: string[];
  autoPlay?: boolean;
  interval?: number;
};

export default function CarruselWrapper({
  imagenes = [],
  autoPlay = true,
  interval = 4000,
}: CarruselProps) {
  const [current, setCurrent] = useState(0);

  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const total = imagenes.length;

  // Evita errores si no hay imágenes
  if (!imagenes || total === 0) return null;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  // Reiniciar carrusel si cambian las imágenes
  useEffect(() => {
    setCurrent(0);
  }, [imagenes]);

  // Autoplay optimizado
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, total]);

  // Drag / Swipe start
  const handleStart = (clientX: number) => {
    startX.current = clientX;
    isDragging.current = true;
  };

  // Drag / Swipe end
  const handleEnd = (clientX: number) => {
    if (!isDragging.current || startX.current === null) return;

    const distance = startX.current - clientX;

    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();

    isDragging.current = false;
    startX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl select-none"
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {imagenes.map((img, index) => (
          <div key={img} className="min-w-full flex justify-center">
            <Image
              src={img}
              alt={`Imagen ${index + 1}`}
              width={600}
              height={600}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className="object-contain h-64 md:h-80"
            />
          </div>
        ))}
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full hover:bg-black/70 transition"
      >
        ‹
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full hover:bg-black/70 transition"
      >
        ›
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {imagenes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-cyan-400 w-6" : "bg-gray-400 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}