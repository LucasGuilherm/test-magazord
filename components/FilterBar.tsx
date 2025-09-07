import { useIsMobile } from "@/hooks/useIsMobile";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import ButtonSelect from "./ButtonSelect";

const opcoesType = ["All", "Sources", "Forks", "Archived", "Mirrors"];
const opcoesLanguage = ["All", "Java", "TypeScript", "HTML", "CSS"];

const FilterBar = () => {
  const isMobile = useIsMobile();
  const [showInput, setShowInput] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchClick = () => {
    setShowInput(true);
  };

  useEffect(() => {
    if (showInput) inputRef.current?.focus();
  }, [showInput]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(Object.fromEntries(formData));
  };

  const [inputValue, setInputValue] = useState("");
  const mostrarInput = !isMobile || showInput;

  return (
    <div className="flex flex-col justify-between gap-8 md:flex-row">
      {mostrarInput && (
        <form
          onSubmit={onSubmit}
          className="flex w-full items-center border-b border-gray-300"
        >
          <MagnifyingGlassIcon className="size-6" />
          <input
            name="search"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Search Here"
            className="w-full px-4 py-2 focus:outline-none"
            onBlur={() => setShowInput(false)}
          />
        </form>
      )}

      {!showInput && (
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <ButtonSelect
              onChange={(values) => console.log(values)}
              options={opcoesType}
            >
              Type
            </ButtonSelect>
            <ButtonSelect
              onChange={(values) => console.log(values)}
              options={opcoesLanguage}
            >
              Language
            </ButtonSelect>
          </div>

          {isMobile && (
            <MagnifyingGlassIcon onClick={onSearchClick} className="size-6" />
          )}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
