import { useIsMobile } from "@/hooks/useIsMobile";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

type ButtonSelectProps = {
  children: React.ReactNode;
  options: string[];
  onChange: (value: string[]) => void;
};

const ButtonSelect = ({ children, options, onChange }: ButtonSelectProps) => {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const isMobile = useIsMobile();

  const handleChange = (option: string) => {
    let novaSelecao = [...selectedOptions];
    if (novaSelecao.includes(option)) {
      novaSelecao = novaSelecao.filter((opt) => opt !== option);
    } else {
      novaSelecao.push(option);
    }

    setSelectedOptions(novaSelecao);
    onChange(novaSelecao);
  };

  if (isMobile) {
    return (
      <Drawer open={open} onClose={() => setOpen(false)}>
        <DrawerTrigger asChild>
          <ButtonTrigger open={open} setOpen={setOpen}>
            {children}
          </ButtonTrigger>
        </DrawerTrigger>

        <DrawerContent className="h-full">
          <DrawerHeader className="flex-row justify-between">
            <DrawerTitle className="text-left">{children}</DrawerTitle>
            <XMarkIcon onClick={() => setOpen(false)} className="size-6" />
          </DrawerHeader>

          <div className="px-2">
            {open && (
              <ListForm
                handleChange={handleChange}
                options={options}
                selectedOptions={selectedOptions}
              />
            )}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <div className="relative">
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-10 bg-black/40"
        ></div>
      )}

      <ButtonTrigger open={open} setOpen={setOpen}>
        {children}
      </ButtonTrigger>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg bg-[#f2f8fe] p-2 shadow-lg ring-1 ring-black/5">
          <ListForm
            handleChange={handleChange}
            options={options}
            selectedOptions={selectedOptions}
          />
        </div>
      )}
    </div>
  );
};

type ButtonTriggerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
};

const ButtonTrigger = ({ setOpen, open, children }: ButtonTriggerProps) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="to-link flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[#0056A6] px-2 py-1 pr-4 text-white"
    >
      <ChevronDownIcon
        className={`size-5 transition-transform ${open ? "rotate-180" : ""}`}
      />
      {children}
    </button>
  );
};

type ListFormPropsType = Pick<ButtonSelectProps, "options"> & {
  selectedOptions: string[];
  handleChange: (option: string) => void;
};

const ListForm = ({
  options,
  selectedOptions,
  handleChange,
}: ListFormPropsType) => {
  return (
    <ul className="flex flex-col gap-2">
      {options.map((option, index) => {
        const selected = selectedOptions.includes(option);
        return (
          <li
            key={index}
            className={`${selected ? "text-link" : ""} flex cursor-pointer items-center gap-4 px-4 py-2 hover:bg-[#dbdfe5]`}
            onClick={() => handleChange(option)}
          >
            <input
              checked={selected}
              type="checkbox"
              className="size-4"
              onChange={() => handleChange(option)}
            />
            <span>{option}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ButtonSelect;
