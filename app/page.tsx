import UserProfile from "@/components/UserProfile";

export default function Home() {
  return (
    <div className="flex-1 max-w-5xl flex-col flex gap-16 md:flex-row items-center md:items-start">
      <UserProfile />

      <div className="flex-1 bg-amber-400">teste</div>
    </div>
  );
}
