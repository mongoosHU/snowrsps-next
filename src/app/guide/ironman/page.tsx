import Link from "next/link";

export default function IronmanGuidePart1() {
  return (
    <section className="max-w-2xl mx-auto mt-10 p-8 rounded-2xl bg-white/10 shadow-lg text-blue-100">
      <Link
        href="/guide"
        className="text-blue-300 hover:text-blue-100 underline text-sm block mb-6"
      >
        &larr; Back to Guide main page
      </Link>
      <h2 className="text-3xl font-bold mb-4 text-center drop-shadow">Ironman Guide (Part 1)</h2>
      <div className="space-y-5 text-lg">
        <p>
          The first part of this guide is exactly like the standard <span className="italic">“normal” account</span> guide.
          This guide can be found under the <span className="font-mono text-blue-200">“Beginner-Guide”</span> topic in Discord.
        </p>
        <div className="bg-blue-900/60 rounded-xl p-4 shadow-inner">
          <span className="font-bold text-blue-200">Quick Recap:</span>
          <ol className="list-decimal ml-8 space-y-1 mt-2">
            <li>
              <span className="font-bold">Start at water dragons.</span> Kill <span className="font-bold">10 water dragons</span>, then head over to grass dragons.
            </li>
            <li>
              Collect these important drops:
              <ul className="list-disc ml-8 mt-1">
                <li>Ring of Wealth’s</li>
                <li>Scrolls of Efficiency</li>
                <li>Boss Keys</li>
                <li>Crystal Keys</li>
                <li>Dragon Bones</li>
                <li>Any gear/weapons piece drops</li>
              </ul>
            </li>
            <li>
              Sell the extra gear/weapons pieces to the shops in the zone (or at <span className="font-mono">::home</span>), and equip any weapon/gear piece that has a higher <span className="font-bold">strength bonus</span>.
            </li>
          </ol>
        </div>
        <div className="bg-yellow-800/70 rounded-xl p-4 shadow-inner">
          <span className="font-bold text-yellow-200">Tip:</span>
          <p>
            Additionally, you’ll want to claim your <span className="font-bold">free donator status</span> by following the <span className="font-mono text-yellow-200">“free-donator-rank”</span> topic on Discord. Obtaining this status is incredibly important for improving your ironman down the road.
          </p>
        </div>
      </div>
    </section>
  );
}
