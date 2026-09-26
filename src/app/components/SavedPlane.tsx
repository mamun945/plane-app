"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { planeContext } from "../context/context";
import { IWorkout } from "../type/type";

import {
  FiClock,
  FiStar,
  FiX,
  FiEye,
} from "react-icons/fi";
import { toast } from "react-toastify";

const SavedPlane = () => {
  const { saved, setSaved } = useContext(planeContext) as {
    saved: IWorkout[];
    setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  // Remove from saved
  const handleRemove = (id: number) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
    toast.error('The item has removed')
  };

  return (
    <div className="container mx-auto">

      {saved.length > 0 ? (
        <div className="bg-black p-4 min-h-[450px] rounded-2xl">
            <div className="space-y-3">

          {saved.map((item: IWorkout) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#11151b] p-4 transition hover:border-gray-700 sm:flex-row sm:items-center sm:justify-between"
            >

              {/* ================= LEFT SIDE ================= */}
              <div className="flex min-w-0 items-center gap-3">

                {/* Image */}
                <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-28">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="min-w-0">

                  <h2 className="truncate text-sm font-extrabold uppercase text-white sm:text-base">
                    {item.name}
                  </h2>

                  <p className="mt-0.5 text-xs text-gray-400">
                    {item.equipment}
                  </p>

                  {/* Stats */}
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-gray-300">

                    {/* Duration */}
                    <span className="flex items-center gap-1">
                      <FiClock className="text-[#C2F800]" />
                      {item.duration} min
                    </span>

                    {/* Calories */}
                    <span className="flex items-center gap-1">
                      <span className="text-[#C2F800]">🔥</span>
                      {item.caloriesBurned} kcal
                    </span>

                    {/* Rating */}
                    <span className="flex items-center gap-1">
                      <FiStar className="fill-[#C2F800] text-[#C2F800]" />
                      {item.rating}
                    </span>

                  </div>
                </div>
              </div>

              {/* ================= RIGHT SIDE ================= */}
              <div className="flex items-center justify-end gap-2">

                {/* View Details */}
                <Link
                  href={`/plans/${item.id}`}
                  className="flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-300 transition hover:border-gray-500 hover:text-white"
                >
                  <FiEye />
                  <span>View Details</span>
                </Link>

                {/* Remove */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="p-2 text-gray-500 transition hover:text-white"
                  title="Remove from saved"
                >
                  <FiX />
                </button>

              </div>
            </div>
          ))}

        </div>
        </div>
      ) : (

        /* ================= EMPTY STATE ================= */
        <div className="flex min-h-[450px] bg-black flex-col items-center justify-center text-center rounded-2xl">

          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gray-800 bg-[#151a20]">
            <span className="text-3xl">🔖</span>
          </div>

          <h1 className="mt-5 text-2xl font-extrabold text-white">
            NOTHING HERE YET
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Browse the library and save a lift for later.
          </p>

          <Link
            href="/plans"
            className="mt-5 rounded-lg bg-[#C2F800] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#d2ff38]"
          >
            Go to workouts
          </Link>

        </div>
      )}
    </div>
  );
};

export default SavedPlane;