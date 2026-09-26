import SavedBtn from "@/app/components/SavedBtn";
import TodayPlaneBtn from "@/app/components/TodayPlaneBtn";
import React from "react";

const DetailsPage = async ({
  params,
}: {
  params: Promise<{ plansId: string }>;
}) => {
  const { plansId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${plansId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workout details");
  }

  const plan = await res.json();

  return (
    <div className="min-h-screen bg-[#0d0f12] px-6 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* ================= IMAGE ================= */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={plan.image}
            alt={plan.name}
            className="h-full min-h-[400px] w-full object-cover lg:max-h-[650px]"
          />
        </div>

        {/* ================= DETAILS ================= */}
        <div className="flex flex-col justify-center">
          {/* Title */}
          <h1 className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            {plan.name}
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
            {plan.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex flex-wrap gap-2">
            {plan.muscleGroups?.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-[#b6ff00] px-4 py-1 text-xs font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= INFO CARD ================= */}
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-800 bg-[#15181e]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Equipment
              </span>

              <span className="text-sm text-gray-200">
                {plan.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Difficulty
              </span>

              <span className="text-sm text-gray-200">
                {plan.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Sets
              </span>

              <span className="text-sm text-gray-200">
                {plan.sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Reps
              </span>

              <span className="text-sm text-gray-200">
                {plan.reps}
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Duration
              </span>

              <span className="text-sm text-gray-200">
                {plan.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Calories
              </span>

              <span className="text-sm text-gray-200">
                {plan.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Rating
              </span>

              <span className="text-sm text-gray-200">
                {plan.rating}
              </span>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-7">
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {plan.instructions?.map(
                (instruction: string, index: number) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-gray-400"
                  >
                    <span className="text-white">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-7 flex flex-wrap gap-3">
            <TodayPlaneBtn plan={plan}></TodayPlaneBtn>
            <SavedBtn plan={plan}></SavedBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;