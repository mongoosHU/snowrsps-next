export default function Home() {
  return (
    <section className="flex flex-col items-center gap-8 mt-12">
      <h1 className="text-4xl font-bold text-blue-200 drop-shadow mb-2">SnowRSPS!</h1>
      
      <div className="w-full max-w-2xl bg-gradient-to-br from-blue-900/80 to-blue-700/90 border-2 border-blue-400 rounded-2xl shadow-xl p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span className="text-lg font-semibold text-blue-200">
            Snow317™ is our <span className="text-yellow-300 font-bold">EASY server ECO/PVM 317 BASED</span>, known for its <span className="text-yellow-300 font-bold">300% INCREASED Droprate</span> & <span className="text-yellow-300 font-bold">Fast Weapon Speeds!</span>
          </span>
        </div>
        <div className="text-gray-200 text-base leading-relaxed">
          Compared to our <span className="font-semibold text-yellow-300">OLDER</span> server, we ve now moved all accounts of <span className="text-blue-300 font-bold">SnowHD</span>, <span className="text-blue-300 font-bold">SnowOS</span> & <span className="text-blue-300 font-bold">SnowHARD</span> here!
          <br />
          <span className="font-semibold">Lost/OLD accounts?</span> Recover them on Discord: <span className="bg-blue-600 text-white px-2 py-1 rounded">#make-a-ticket</span> and wait patiently (we answer within <span className="font-semibold text-yellow-300">24 hours</span>).
        </div>
        <div className="bg-yellow-100/10 rounded-lg p-3 border border-yellow-400 flex items-center gap-2">
          <span className="text-2xl">🎁</span>
          <span className="text-yellow-200 font-medium">
            NEW PLAYERS get <span className="font-bold">FREE INFINITY PRAYER RANK</span> & <span className="font-bold">AUTO COLLECT LOOT AMULET</span> – Just ask in Discord!
            <br />
            <span className="italic text-sm text-yellow-300">These are just some of our MANY HIDDEN prizes – look closely for more! 😉</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-4 mt-2">
          <span className="bg-blue-600 text-white font-semibold rounded-full px-4 py-1 flex items-center gap-2 shadow">
            🎉 X10-20 Drops <span className="text-green-300">ENABLED</span> Automatic
          </span>
          <span className="bg-pink-600 text-white font-semibold rounded-full px-4 py-1 flex items-center gap-2 shadow">
            💯 <span>Friday-Sunday ONLY</span> 💯
          </span>
          <span className="bg-gray-800 text-yellow-300 font-semibold rounded-full px-4 py-1 flex items-center gap-2 shadow">
            NEVER ECO WIPE
          </span>
        </div>
      </div>

      <a
        href="https://snowrsps.com/SnowEASY.jar"
        className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-lg transition mt-6 animate-pulse"
      >
        Download
      </a>
    </section>
  );
}
