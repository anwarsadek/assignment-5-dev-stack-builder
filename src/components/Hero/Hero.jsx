import React from 'react';
import heroStack from '../../assets/hero-stack.png';

function Hero() {
  return (
    <section id="home" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 px-5 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Build Your Ideal
            <br />
            <span className="gradient-text">Development Stack</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="primary-btn"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroStack}
            alt="Development technology stack illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;