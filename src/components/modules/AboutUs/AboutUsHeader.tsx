"use client";

import Image from "next/image";

export default function AboutUsHeader() {
  return (
    <section className="relative h-65 md:h-75 w-full flex items-center justify-center overflow-hidden text-center px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/mnaofficialbd/image/upload/v1774938515/mna-service-hub/pdfs/assets_img/aboutUs_lbygqm.jpg"
          alt="MNA ServiceHub - About Us"
          fill
          className="object-cover transition-transform duration-10000 hover:scale-105"
          priority
        />
        {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" /> */}
      </div>

      {/* <div className="container relative z-10 mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-1000">
          <h1 className="text-5xl md:text-6xl font-black mb-4 dark:text-white/90 text-violet-400 tracking-tight leading-tight">
            About <span className="text-white/90 dark:text-violet-400">Us</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed font-medium">
            Discover the vision behind MNA ServiceHub—Bangladesh&apos;s most
            trusted digital ecosystem connecting skilled professionals with
            high-demand opportunities through innovation and integrity.
          </p>
        </div>
      </div> */}
    </section>
  );
}
