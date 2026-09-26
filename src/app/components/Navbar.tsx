"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import { useContext, useState } from "react";
import Link from "next/link";
import { planeContext } from "../context/context";
import { IWorkout } from "../type/type";

const NavbarPage = () => {
  const [navSelected, setNavSelected] = useState("workouts");
  const { planes, saved} = useContext(planeContext) as {
       planes: IWorkout[],
       saved:IWorkout[],
     }

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-3 sm:px-4">
        <nav className="flex min-h-20 flex-wrap items-center justify-between gap-3 py-3 sm:flex-nowrap sm:py-0">

          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C2F800]/10 sm:h-11 sm:w-11">
              <Image
                src={logo}
                alt="FITLOG Logo"
                width={42}
                height={42}
                className="object-contain"
              />
            </div>

            <div>
              <h1 className="text-lg font-extrabold tracking-wide text-gray-900 sm:text-xl dark:text-white">
                FIT<span className="text-[#C2F800]">LOG</span>
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <div className="order-3 flex w-full items-center justify-center gap-1 rounded-xl bg-gray-100 p-1 sm:order-2 sm:w-auto dark:bg-gray-900">

            <Link href={'/'}>
            <button
              onClick={() => setNavSelected("workouts")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all sm:px-5 sm:py-2.5 ${
                navSelected === "workouts"
                  ? "bg-[#C2F800] text-black shadow-sm"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              Workouts
            </button>
            </Link>

            <Link href={'/myplane'}>
            <button
              onClick={() => setNavSelected("plan")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all sm:px-5 sm:py-2.5 ${
                navSelected === "plan"
                  ? "bg-[#C2F800] text-black shadow-sm"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              My Plan
            </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="order-2 flex shrink-0 items-center gap-3 sm:order-3 sm:gap-6">

            {/* Plan */}
            <Link href={`/myplane`}>
              <div className="flex items-center gap-1.5 sm:gap-2">
              <p className="text-sm text-gray-400 sm:text-md">
                Plan
              </p>

              <p className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C2F800] p-1.5 font-bold text-gray-900 sm:h-8 sm:w-8 sm:p-2">
                <span>{planes.length}</span>
              </p>
            </div>
            </Link>

            {/* Saved */}
          <Link href={`/myplane`}>
             <div className="flex items-center gap-1.5 sm:gap-2">
              <p className="text-sm text-gray-400 sm:text-md">
                Saved
              </p>

              <p className="font-bold text-gray-900 dark:text-white">
                {saved.length}
              </p>
            </div>
          </Link>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavbarPage;