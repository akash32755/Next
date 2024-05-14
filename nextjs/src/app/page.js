'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  console.log(route);
  return (
    <main className="flex min-h-screen flex-col items-center ">
      Hello Next js
      <Link href={'profile'}>Click</Link>
      <button onClick={() => route.push('profile')}>Route Link</button>
    </main>
  );
}
