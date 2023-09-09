export default function Home() {
  return (
    <main className="flex h-screen bg-amber-400">
      <aside className="bg-slate-500 grow text-center">Left</aside>
      <section className="grow-[2] text-center">Center</section>
      <aside className="bg-slate-500 grow text-center">Right</aside>
    </main>
  );
}
