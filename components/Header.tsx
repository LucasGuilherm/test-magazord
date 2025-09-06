import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-row bg-[#24292E] justify-center py-5 px-8">
      <div className="flex flex-row flex-1 max-w-5xl items-center gap-6 text-lg">
        <LogoGitHub />
        <span>/</span>
        <span>Profile</span>
      </div>
    </header>
  );
};

const LogoGitHub = () => {
  return (
    <Image width={124} height={30} src={"LogoGitHub.svg"} alt="Logo GitHub" />
  );
};

export default Header;
