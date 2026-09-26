"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { planeContext } from "../context/context";
import { IWorkout } from "../type/type";

import {
  FiClock,
  FiStar,
  FiCheck,
  FiX,
  FiEye,
  FiSearch,
} from "react-icons/fi";
import { toast } from "react-toastify";

const TodayPlane = () => {
  const { planes, setPlanes } = useContext(planeContext) as {
    planes: IWorkout[];
    setPlanes: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  // Remove workout from today's plan
  const handleRemove = (id: number) => {
    setPlanes((prev) => prev.filter((plane) => plane.id !== id));
    toast.error('The item has removed')
  };

  // Mark workout as done
  const handleDone = (id: number) => {
    setPlanes((prev) => prev.filter((plane) => plane.id !== id));
  };

  return (
    <div className="container mx-auto">

      <div className="rounded-2xl border border-gray-800 bg-[#10141a]">

        {/* ================= CONTENT ================= */}
        <div className="space-y-4 min-h-[450px] p-4 sm:p-5">

          {planes.length > 0 ? (
            planes.map((plane: IWorkout) => (
              <div
                key={plane.id}
                className="rounded-xl border border-gray-800 bg-[#11161d] p-3 transition hover:border-gray-700 sm:p-4"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                  {/* ================= LEFT ================= */}
                  <div className="flex min-w-0 flex-1 gap-4">

                    {/* Image */}
                    <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-40">
                      <Image
                        src={plane.image}
                        alt={plane.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Workout Info */}
                    <div className="min-w-0">

                      <h2 className="truncate text-base font-extrabold uppercase sm:text-lg">
                        {plane.name}
                      </h2>

                      <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                        {plane.equipment}
                      </p>

                      {/* Stats */}
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-300">

                        <span className="flex items-center gap-1">
                          <FiClock className="text-[#C2F800]" />
                          {plane.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                          <span className="text-[#C2F800]">🔥</span>
                          {plane.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                          <FiStar className="fill-[#C2F800] text-[#C2F800]" />
                          {plane.rating}
                        </span>

                      </div>

                      {/* Muscle Groups */}
                      <div className="mt-2 flex flex-wrap gap-2">

                        {plane.muscleGroups?.map((muscle: string) => (
                          <span
                            key={muscle}
                            className="rounded-full border border-[#C2F800]/50 bg-[#C2F800]/10 px-3 py-1 text-[11px] font-medium text-[#C2F800]"
                          >
                            {muscle}
                          </span>
                        ))}

                        <span className="rounded-full border border-[#C2F800]/50 bg-[#C2F800]/10 px-3 py-1 text-[11px] font-medium text-[#C2F800]">
                          {plane.difficulty}
                        </span>

                      </div>
                    </div>
                  </div>

                  {/* ================= ACTIONS ================= */}
                  <div className="flex items-center justify-end gap-2 lg:shrink-0">

                    {/* View Details */}
                    <Link
                      href={`/plans/${plane.id}`}
                      className="flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-xs font-medium text-gray-300 transition hover:border-gray-500 hover:text-white"
                    >
                      <FiEye />
                      <span>View Details</span>
                    </Link>

                    {/* Done */}
                    <button
                      onClick={() => handleDone(plane.id)}
                      className="flex items-center gap-2 rounded-full bg-[#C2F800] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#d0ff35]"
                    >
                      <FiCheck />
                      <span>Mark as Done</span>
                    </button>

                    {/* Remove */}
                    <button
                      onClick={() => handleRemove(plane.id)}
                      className="p-2 text-gray-500 transition hover:text-white"
                    >
                      <FiX />
                    </button>

                  </div>
                </div>
              </div>
            ))
          ) : (

            /* ================= EMPTY STATE ================= */
            <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

              {/* Icon */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gray-800 bg-[#151a20]">
                <span className="text-3xl">🏋️</span>
              </div>

              <h2 className="mt-6 text-2xl font-extrabold">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 max-w-md text-sm text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/plans"
                className="mt-6 flex items-center gap-2 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d0ff35]"
              >
                <FiSearch />
                Go to Workouts
              </Link>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default TodayPlane;