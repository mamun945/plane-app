
import Image from "next/image";
import React from "react";
import hero from "../../../public/banner.png";

const BannerPage = () => {
  return (
    <div className="my-3 flex flex-col items-center justify-between overflow-hidden rounded-xl bg-[#15171D] px-6 py-8 sm:px-10 md:flex-row md:px-12 lg:px-15">

      {/* Content */}
      <div className="w-full space-y-4 text-center md:w-1/2 md:text-left">

        <p className="text-sm font-semibold tracking-wider text-[#C2F800]">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
          TRAIN WITH INTENT. LOG
          <br className="hidden sm:block" />
          EVERY SET.
        </h1>

        <p className="max-w-xl text-sm leading-6 text-gray-300 sm:text-base">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today's plan, and watch the week's work add up.
        </p>

        <button
          className="
            rounded-lg bg-[#C2F800] px-5 py-3
            font-bold text-black
            transition-all duration-300
            hover:scale-105 hover:bg-[#d4ff3d]
            hover:shadow-lg hover:shadow-[#C2F800]/20
          "
        >
          BROWSE WORKOUTS
        </button>
      </div>

      {/* Image */}
      <div className="mt-6 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
        <Image
          src={hero}
          alt="Workout banner"
          width={400}
          height={500}
          priority
          className="
            w-[220px] object-cover
            sm:w-[280px]
            md:w-[320px]
            lg:w-[380px]
          "
        />
      </div>
    </div>
  );
};

export default BannerPage;
