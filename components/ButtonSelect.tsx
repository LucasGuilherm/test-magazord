import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type ButtonSelectProps = {
  children: React.ReactNode;
  options: string[];
  onChange: (value: string[]) => void;
};

const ButtonSelect = ({ children, options, onChange }: ButtonSelectProps) => {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="to-link flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[#0056A6] px-2 py-1 pr-4 text-white"
      >
        <ChevronDownIcon
          className={`size-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
        {children}
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-10 bg-black/40"
        ></div>
      )}

      {open && (
        <ul className="absolute right-0 z-20 mt-2 flex w-48 flex-col gap-2 overflow-hidden rounded-lg bg-[#f2f8fe] p-2 shadow-lg ring-1 ring-black/5">
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
      )}
    </div>
  );
};

export default ButtonSelect;
