import { Link } from 'react-router-dom';
import React from 'react';

function CoverPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-rose-700 text-white">
      <header className="px-6 py-5">
        <div className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">♫</div>
          <span className="font-semibold tracking-wide">MAXX Player</span>
        </div>
      </header>

      <main className="px-6 md:px-12 lg:px-20">
        <div className="mt-8 md:mt-16 lg:mt-24 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            MAXX <br className="hidden md:block" /> PLAYER
          </h1>

          <p className="mt-6 max-w-xl text-zinc-200/80">
            A sleek web music player. Search, play previews, and enjoy your collection.
          </p>

          <div className="mt-10">
            <Link
                to="/home"
                className="inline-block rounded-xl bg-white text-black px-5 py-3 font-medium hover:bg-zinc-100"
            >
                Enter App
            </Link>

          </div>
        </div>
      </main>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-10%] h-[60vmax] w-[60vmax] rotate-12 bg-gradient-to-b from-white/10 to-transparent blur-3xl" />
      </div>
    </div>
  );
}

export default CoverPage;