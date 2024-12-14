import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[95%] mx-auto">
      <h2 className="text-4xl font-bold">Pokemon</h2>
      <Link href={"/pokemon-list"}>Pokemon list</Link>
    </div>
  );
}
