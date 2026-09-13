
import React from 'react';

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-2.5 font-bold text-slate-900">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-extrabold text-white shadow-md shadow-cyan-200">
        DS
      </span>
      <span className="text-[15px] tracking-tight">
        Dev <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Stack</span>
      </span>
    </a>
  );
}

export default Brand;