"use client";

import FilterBar from "@/components/FilterBar";
import TabNavigation from "@/components/TabNavigation";
import UserProfile from "@/components/UserProfile";

export default function Home() {
  return (
    <div className="flex max-w-5xl flex-1 flex-col items-center gap-16 md:flex-row md:items-start">
      <UserProfile />

      <div className="flex flex-1 flex-col gap-12">
        <TabNavigation />

        <FilterBar />
      </div>
    </div>
  );
}
