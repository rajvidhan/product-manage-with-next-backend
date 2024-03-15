import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <Link href="/addProducts" className="px-4 py-3 rounded-md text-white text-bold bg-teal-500 ">Add products</Link>
      <Link href="/products" className="px-4 py-3 rounded-md text-white text-bold bg-teal-500 ">Product List</Link>
    </div>

    </main>
  );
}
