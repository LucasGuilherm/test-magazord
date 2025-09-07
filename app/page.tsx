"use client";

import ButtonSelect from "@/components/ButtonSelect";
import TabNavigation from "@/components/TabNavigation";
import UserProfile from "@/components/UserProfile";
import {
  BookmarkIcon,
  BookmarkSquareIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { FC, useState } from "react";

export default function Home() {
  const [tabSelected, setTabSelected] = useState(0);

  return (
    <div className="flex max-w-5xl flex-1 flex-col items-center gap-16 md:flex-row md:items-start">
      <UserProfile />

      <div className="flex flex-1 flex-col gap-12">
        <TabNavigation selected={tabSelected} setSelected={setTabSelected} />

        <div className="flex justify-between gap-16">
          <div className="flex w-full items-center border-b border-gray-300">
            <MagnifyingGlassIcon className="size-6" />
            <input
              type="text"
              placeholder="Search Here"
              className="px-4 py-2 focus:outline-none"
            />
          </div>

          <div className="flex gap-4">
            <ButtonSelect
              onChange={(values) => console.log(values)}
              options={["Lucas", "Bruna"]}
            >
              Type
            </ButtonSelect>
            <ButtonSelect
              onChange={(values) => console.log(values)}
              options={["Lucas", "Bruna"]}
            >
              Language
            </ButtonSelect>
          </div>
        </div>
      </div>
    </div>
  );
}
