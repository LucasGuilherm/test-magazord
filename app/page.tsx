"use client";

import FilterBar from "@/components/FilterBar";
import ListaRepositorios from "@/components/ListaRepositorios";
import TabNavigation from "@/components/TabNavigation";
import UserProfile from "@/components/UserProfile";

export default function Home() {
  return (
    <div className="flex max-w-5xl flex-1 flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
      <UserProfile />

      <div className="flex w-full flex-1 flex-col gap-7 md:gap-12">
        <TabNavigation />

        <FilterBar />

        <ListaRepositorios />
      </div>
    </div>
  );
}
