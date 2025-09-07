import { BookmarkSquareIcon, StarIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";

type TabNavigationProps = {
  selected: number;
  setSelected: (index: number) => void;
};

const TabNavigation = ({ selected, setSelected }: TabNavigationProps) => {
  return (
    <div className="flex gap-11">
      <TabItem
        onClick={() => setSelected(0)}
        selected={selected === 0}
        Icon={BookmarkSquareIcon}
        title="Repositories"
        number={32}
      />
      <TabItem
        onClick={() => setSelected(1)}
        selected={selected === 1}
        Icon={StarIcon}
        title="Starred"
        number={32}
      />
    </div>
  );
};

type TabItemProps = {
  title: string;
  number: number;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  selected?: boolean;
  onClick: () => void;
};

const TabItem = ({ title, number, Icon, selected, onClick }: TabItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-3 pb-2 ${selected ? "border-b-2 border-orange-400" : "border-b-2 border-transparent text-gray-400 hover:text-gray-600"}`}
    >
      <Icon className="size-6" />

      {title}

      <span className="rounded-full border border-gray-300 bg-gray-100 px-2 py-0.5 text-sm">
        {number}
      </span>
    </div>
  );
};

export default TabNavigation;
