import UserProfile from "@/components/UserProfile";

export default function Home() {
  return (
    <div className="flex-1 max-w-5xl flex-row flex gap-16">
      <UserProfile />

      <div className="flex-1 bg-amber-400"></div>
    </div>
  );
}
