export default function Home() {
  return (
    <section className="flex flex-col items-center gap-8 mt-12">
      <h1 className="text-4xl font-bold text-yellow-300 drop-shadow">Üdvözöl a SnowRSPS!</h1>
      <p className="max-w-2xl text-lg text-gray-200 text-center">
        Csatlakozz a legújabb privát RuneScape szerverhez! Folyamatos fejlesztések, aktív közösség, barátságos staff és rengeteg kaland vár rád.
      </p>
      <a href="/download" className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg transition">
        Kliens Letöltése
      </a>
    </section>
  )
}
