import Image from "next/image";
import Link from "next/link";

const UserProfile = () => {
  return (
    <div className="flex flex-col gap-6 items-center w-64">
      <Image
        className="rounded-full"
        width={150}
        height={150}
        src={"https://github.com/LucasGuilherm.png"}
        alt="Profile Picture"
      />

      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-center">Lucas Guilherme de Moraes</h1>
        <h3 className="text-center text-[#989898]">Head development team Front-End Magazord - Tagged (#BZ)</h3>
      </div>

      <UserLinks />
    </div>
  );
};

const UserLinks = () => {
  return (
    <div>
      <UserLink href="https://www.youtube.com/watch?v=MuA2kmCkH1s" label="Youtube" />
    </div>
  );
};

const UserLink = ({ href, label }: { href: string; label: string }) => {
  return <Link href={href}>{label}</Link>;
};

export default UserProfile;
