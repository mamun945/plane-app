
import { IWorkout } from "../type/type";
import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";

const PlaneCard = ({ plans }: { plans: IWorkout }) => {
  return (
    <Link href={`/allPlants/${plans.id}`}>
       <div
      className="
        group overflow-hidden rounded-2xl border
        shadow-2xl transition-all duration-300
        hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(194,248,0,0.15)]
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={plans.image}
          alt={plans.name}
          width={300}
          height={400}
          className="
            h-[260px] w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-3 px-5 py-3">

        {/* Muscle Groups */}
        <div className="flex flex-wrap items-center gap-2">
          {plans.muscleGroups.map((muscle: string, index: number) => (
            <span
              key={index}
              className="
                rounded-xl bg-[#C2F800] px-4 py-2
                text-sm font-bold text-black
                transition-all duration-300
                hover:scale-105
              "
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="
            text-3xl font-bold transition-colors duration-300
            group-hover:text-[#C2F800]
          "
        >
          {plans.name}
        </h1>

        {/* Equipment */}
        <p className="font-bold text-gray-500">
          {plans.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-b border-gray-700" />

        {/* Stats */}
        <div className="flex justify-between">

          {/* Duration */}
          <div
            className="
              flex items-center gap-2 font-bold text-gray-500
              transition-colors duration-300
              hover:text-[#C2F800]
            "
          >
            <CiClock2 />
            <p>{plans.duration} min</p>
          </div>

          {/* Calories */}
          <div
            className="
              flex items-center gap-2 font-bold text-gray-500
              transition-colors duration-300
              hover:text-[#C2F800]
            "
          >
            <p>{plans.caloriesBurned}</p>
            <p>kcal</p>
          </div>

          {/* Rating */}
          <div
            className="
              flex items-center gap-2 font-bold text-gray-500
              transition-colors duration-300
              hover:text-[#C2F800]
            "
          >
            <FaRegStar />
            <p>{plans.rating}</p>
          </div>

        </div>
      </div>
    </div>
    </Link>
  );
};

export default PlaneCard;
