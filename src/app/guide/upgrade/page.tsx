import Link from "next/link";

export default function UpgradeGuidePage() {
  return (
    <section className="max-w-2xl mx-auto mt-10 p-8 rounded-2xl bg-white/10 shadow-lg text-blue-100">
      <Link
        href="/guide"
        className="text-blue-300 hover:text-blue-100 underline text-sm block mb-6"
      >
        &larr; Back to Guide 
      </Link>
      <h2 className="text-3xl font-bold mb-4 text-center drop-shadow">Starter Guide pt2</h2>
      <div className="space-y-6 text-lg">
        <p>
          <span className="font-bold">After you've gotten yourself an Lrow, everything is going up from there!</span>{" "}
          (Have you been collecting those bones?)
        </p>

        <p>
          By this point, you've been collecting everything, upgrading, stacking some money, but it seems kind of slow right? <span className="font-bold">No worries!!</span> We all started out like this.
        </p>

        <div className="bg-blue-900/60 rounded-xl p-4 shadow-inner">
          <h3 className="font-bold mb-2 text-blue-200">Here's the challenge:</h3>
          <ol className="list-decimal ml-8 space-y-1">
            <li>
              Collect however many bones you get until you get <span className="font-bold">1000 Kill Count</span> (should be anywhere from 1000-5000, but never less than 1000).
            </li>
            <li>
              Do steps for donor rank to access vip bosses.
            </li>
            <li>
              Once you're done, you can ask a staff member to collect <span className="font-bold">100k tickets</span>! <span className="italic">(This challenge comes directly from me, and will only be around as long as I am!)</span>
            </li>
          </ol>
          <p className="mt-3">
            At the end of collecting these bones, you should be at around <span className="font-bold">2-4h playtime</span>, which means it's time to head over to <span className="font-mono text-blue-300">⁠ismeretlen</span> and start finishing up those steps! Once you finish, pm any <span className="font-bold">mod+</span> ranked player to get verified and to get your new donor rank.
          </p>
        </div>

        <p>
          Now that you've gotten <span className="font-bold">1000kc</span> and your <span className="font-bold">donor rank</span>, you can head over to the <span className="font-bold">vip boss Hulk</span>! That is where you will meet a member of staff to claim your reward for the bones!
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-200">
          This is to ensure that you actually killed the dragons and didn't just get the bones from someone. <span className="font-bold">ANY attempt to get the bones in any other way other than killing and collecting BY YOURSELF will forfeit your chance to claim!! We have eyes everywhere!</span>
        </blockquote>

        <div className="bg-red-800/70 rounded-xl p-4 shadow-inner">
          <p className="font-bold text-red-200 mb-1">UPDATE:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>With new events such as triple or double drops you will get way more bones!</li>
            <li>It's about the <span className="font-bold">1k kc</span> not the bones, that's important!!</li>
            <li>
              <span className="font-bold">IF ANY PLAYER MESSAGES ME WITH PROOF THAT YOU ASKED TO BUY THE BONES THEY WILL COLLECT YOUR 100k!!!</span> And you will be disqualified.
            </li>
          </ul>
        </div>
              <div className="space-y-6 text-lg mt-8">
        <h3 className="text-2xl font-bold mb-2 text-blue-200">What to do with your 100k?</h3>
        <p>
          So now you've got <span className="font-bold">100k</span>, but what to do with it??
        </p>
        <p>
          <span className="font-bold">I personally recommend getting a Dragonbone Cape and an Infernal Scythe.</span>  
          <span className="italic ml-1">Melee is the preferred method of combat at the moment, as Snow is still adding new gear including ranged gear!</span>
        </p>

        <p>
          With the last of what you have (will vary depending on whether you got the gear from another player, or bought from store) you should have about <span className="font-bold">10k-20k</span> left, on top of whatever you've been saving from the beginning. If you haven't gotten at least a decent set of gear either from other players or the keys from the dragons, then you need to start killing either <span className="font-bold">Cerberus</span>, or take on the task of spending a good amount of time at <span className="font-bold">Hulks</span>.
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Hulks WILL take 5-10 minutes at first depending on your gear.</li>
          <li>The hp bar is a little buggy and you'll feel like it's glitching out and never dying. This is not the case. Just keep on trucking!</li>
        </ul>

        <p>
          After you get some decent gear (You wanna be in at least gilded armor with the dbcape and Infernal Scythe) you should be killing hulks in a better time frame, now is when you start saving!
        </p>
        <p>
          After you've gotten your first <span className="font-bold">50-100k</span> you want to start asking around for a <span className="font-bold">collectors amulet</span>.
        </p>

        <h4 className="font-bold mt-6 mb-2 text-blue-300">You can get one by:</h4>
        <ul className="list-disc ml-8 space-y-1">
          <li>Voting</li>
          <li>Spending 4200 Boss Points</li>
          <li>Doing <span className="font-mono">::raids</span> (1/200 chance)</li>
          <li>Buying one from a player</li>
        </ul>

        <p>
          They're getting sparse in the server so finding one from a player is getting more rare and they go for <span className="font-bold">50-100k</span> depending on how nice that player is feeling.
        </p>
      </div>

      </div>
    </section>
  );
}
