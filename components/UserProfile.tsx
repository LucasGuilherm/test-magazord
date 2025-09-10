"use client";

import useUserInfo from "@/hooks/githubApi/useUserInfo";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingOfficeIcon,
  CameraIcon,
  ChevronDownIcon,
  LinkIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FC, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const UserProfile = () => {
  const { userInfo, isPending, error } = useUserInfo();
  const [expandir, setExpandir] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    setExpandir(!isMobile);
  }, [isMobile]);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex w-full flex-col items-center md:w-64">
      {/* Avatar Usuário */}
      <div className="relative">
        <Image
          className="rounded-full"
          width={isMobile ? 104 : 150}
          height={isMobile ? 104 : 150}
          src={userInfo.avatar_url}
          alt="Profile Picture"
        />
        <span className="absolute right-0 bottom-0 rounded-full bg-white p-2 shadow">
          😎
        </span>
      </div>

      {/* Dados Usuário */}
      <div className="mt-4 flex flex-col gap-1 md:mt-6">
        <h1 className="text-center text-2xl font-bold">{userInfo.name}</h1>
        <h3 className="text-center leading-none whitespace-pre-line text-[#989898]">
          {userInfo.bio}
        </h3>
      </div>

      {/* Informações adicionais */}
      <div
        className={`text-link hover:text-link-hover mt-6 mb-2 flex flex-col items-center md:hidden`}
        onClick={() => setExpandir(!expandir)}
      >
        <span>Informações adicionais</span>

        <ChevronDownIcon
          className={`size-6 transition-all ${expandir ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {expandir && (
        <div
          className={`flex w-full flex-col gap-4 rounded-2xl bg-[#f8f8f8] p-4 text-sm font-normal md:mt-8 md:bg-transparent md:p-0`}
        >
          {userInfo.company && (
            <UserInfo Icon={BuildingOfficeIcon} label={userInfo.company} />
          )}
          {userInfo.location && (
            <UserInfo Icon={MapPinIcon} label={userInfo.location} />
          )}
          {userInfo.blog && <UserInfo Icon={LinkIcon} label={userInfo.blog} />}

          {/* Lista Links Sociais */}
          {userInfo.social_accounts?.map((link, index) => (
            <UserInfo
              key={index}
              label={link.url}
              Icon={
                link.provider === "instagram" ? CameraIcon : BuildingOfficeIcon
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

type UserInfoProps = {
  label: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
};

const UserInfo = ({ label, Icon }: UserInfoProps) => {
  return (
    <div className="text-link hover:text-link-hover flex w-full items-center gap-2">
      <Icon className="h-4 w-4" />
      <Link className="w-0 flex-1 break-words" href={label} target="_blank">
        {label}
      </Link>
    </div>
  );
};

export default UserProfile;
