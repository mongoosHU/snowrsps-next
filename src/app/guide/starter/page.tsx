import Link from "next/link";

export default function StarterGuidePage() {
  return (
    <section className="max-w-2xl mx-auto mt-10 p-8 rounded-2xl bg-white/10 shadow-lg text-blue-100">

<Link href="/guide" className="text-blue-300 hover:text-blue-100 underline text-sm">&larr; Back to Guide </Link>

      <h2 className="text-3xl font-bold mb-6 text-center drop-shadow">Starter Guide</h2>
      <div className="space-y-5 text-lg">
        <p>
          <span className="font-bold">Here's what you'll want to do as far as gear in the beginning of the game:</span> 
          You'll find all the gear in beginner armory is in order from worst to greatest. <span className="font-bold">Upgrade armor over weapons</span>, as armor gives more str bonus down the line! <span className="italic">(That doesn't mean to forget about weapons though!)</span>
        </p>

        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <span className="font-bold">Start at the water dragons</span>, and get yourself a <span className="font-bold">10 kill count</span>, to move on to grass dragons.
          </li>
          <li>
            <span className="font-bold">Grass dragons (also known as Zirconis or Green dragons)</span> are good for kc and getting:
            <ul className="list-disc ml-8 mt-2">
              <li>Ring of Wealth's</li>
              <li>Scrolls of efficiency (used to upgrade)</li>
              <li>Boss/crystal keys (used on the chests near the north bank at home)</li>
            </ul>
            <p className="mt-2">
              Collect everything these green dragons drop! Including <span className="font-bold">monster frags</span>! Those are used to upgrade items. If you pick up equipment that is better than what you're wearing (right click &quot;examine&quot;), put it on! If not, sell it back to the store located at the dragon spawn.
            </p>
            <p>
              Pick up all the bones because you'll need them for prayer, and a special challenge (explained at the end).
            </p>
          </li>
          <li>
            <span className="font-bold">Pick up the boss keys and crystal keys!</span> These are good money for newbies! They award up to <span className="font-bold">tok tzaar gear</span> (500-550b in shops per piece) and up to <span className="font-bold">razor whip</span> (6250b in shop).
          </li>
        </ol>

        <p>
          By this point, you should be racking up <span className="font-bold">Ring of Wealth's (ROW)</span> and <span className="font-bold">Scrolls of Efficiency (SOE)</span>. Use the SOEs to upgrade your ROWs.
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>Keep <span className="font-bold">1</span> of whatever your highest tier is (Row [1], Row [2], and Row [3]) until you reach the coveted <span className="font-bold">Lucky Ring of Wealth</span>!</li>
          <li>
            You have a <span className="font-bold">60% chance to fail the upgrade</span> and you will lose the ring. So always keep your best one aside!
          </li>
        </ul>

        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-200">
          Upgrade armor over weapons, as armor gives more strength bonus down the line!
        </blockquote>
      </div>
    </section>
  );
}
