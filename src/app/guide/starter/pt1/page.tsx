import Link from "next/link";

export default function StarterGuidePart3() {
  return (
    <section className="max-w-2xl mx-auto mt-10 p-8 rounded-2xl bg-white/10 shadow-lg text-blue-100">
      <Link
        href="/guide/starter"
        className="text-blue-300 hover:text-blue-100 underline text-sm block mb-6"
      >
        &larr; Back to Starter Guide main page
      </Link>
      <h2 className="text-3xl font-bold mb-4 text-center drop-shadow">Starter Guide – Part 3: Pets & Next Steps</h2>
      <div className="space-y-5 text-lg">
        <p>
          Okay, so now you've got a <span className="font-bold">Full Gilded set</span>, a <span className="font-bold">Collector's amulet</span>, an <span className="font-bold">infernal scythe</span>, and a <span className="font-bold">dbone cape</span>.
          <br />
          So what's next? <span className="font-bold">Next you want to focus on getting a pet!</span> By now you should have gotten 1-2 from drops, but if you haven't, it's no sweat!
        </p>
        <p>
          The <span className="font-bold">3 main pets</span> everyone is using right now are <span className="font-bold">Morty</span>, <span className="font-bold">Mayo</span>, and <span className="font-bold">Chilli</span>! <br />
          <span className="italic">Ahh the coveted Chilli, now there's a pet!</span> Mayo and Chilli are comparable, as they both give <span className="font-bold">9 dr</span> and a considerable str bonus, but that doesn't come cheap!
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Mayo is running anywhere from <span className="font-bold">50-150k</span> right now</li>
          <li>Chilli is running up to <span className="font-bold">250k(ish)</span></li>
          <li>Once you get one of those though your damage boost is insane!</li>
        </ul>
        <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-yellow-200 font-bold bg-yellow-900/30 py-2">
          REMEMBER TO ALWAYS PICK UP PETS BEFORE LOGGING OUT!! FAILURE TO DO SO CAN CAUSE YOUR PET TO DISSAPEAR!
        </blockquote>
        <p>
          If those are a bit too pricey for you right now, you can try to hunt for a pet <span className="font-bold">Morty</span>. Morty gives <span className="font-bold">5 dr</span> and also gives a str bonus, making him super good for the lower tiered players!! He's currently going for about <span className="font-bold">10-50k</span> depending on seller, although he's tough to find.
        </p>
        <p>
          After you've found yourself a pet, you're wondering what's next. Well, now it's time for <span className="font-bold">armor upgrades</span>! Charmeleon is the next boss after Hulk, requiring a <span className="font-bold">2500 kc</span>!
          If you were to kill Hulks, and only Hulks, until you hit 2500kc, that could make you up to a whopping <span className="font-bold">2.5m tickets</span>!!! During this time you should be focussing on getting <span className="font-bold">24k Torva armor</span>.
        </p>
        <div className="bg-blue-900/60 rounded-xl p-4 shadow-inner">
          <span className="font-bold text-blue-200">Side note:</span>
          <p>
            You can go from gilded to Carved or Sparta gear, but, it's hard to sell, and you might end up spending much more money and time on these upgrades rather than going straight to the 24k, where 1 piece could as much as double your total strength bonus right now!
            <span className="italic"> (end of side note, lol)</span>
          </p>
        </div>
        <p>
          All upgrades further on armor will be discussed in <span className="font-mono text-blue-200">gear-guide</span> as I feel like this is getting to be past the 'Beginner stage' of the game.
        </p>
      </div>
    </section>
  );
}
