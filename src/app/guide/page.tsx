import Link from "next/link";

export default function GuidePage() {
  return (
    <section className="max-w-3xl mx-auto mt-10 p-8 rounded-2xl bg-white/10 shadow-lg text-blue-100">
      <h1 className="text-4xl font-extrabold mb-6 text-center drop-shadow">SnowRSPS Guides</h1>
      <ul className="list-none space-y-4 text-center">
        <li>
          <Link
            href="/guide/starter"
            className="block py-2 px-6 bg-blue-600/70 hover:bg-blue-400 rounded-lg font-bold text-lg transition"
          >
            Starter Guide pt1
          </Link>
        </li>
        <li>
          <Link
            href="/guide/upgrade"
            className="block py-2 px-6 bg-blue-600/70 hover:bg-blue-400 rounded-lg font-bold text-lg transition"
          >
            Starter Guide pt2
          </Link>
        </li>
        <li> 
          <Link href="/guide/starter/pt1"
         className="block py-2 px-6 bg-blue-600/70 hover:bg-blue-400 rounded-lg font-bold text-lg transition">    
            Starter Guide pt3
          </Link>
            </li>
      </ul>
    </section>
  );
}
