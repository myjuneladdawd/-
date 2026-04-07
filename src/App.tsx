import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col font-sans">
      <header className="bg-yellow-400 text-black p-3 md:p-4 shadow-[0_4px_20px_rgba(250,204,21,0.3)] flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-black shadow-md shrink-0">
            <img 
              src="https://i.postimg.cc/nL2SPPPb/S_51912724.png" 
              alt="School Logo" 
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/100x100/ffffff/000000?text=Logo";
              }}
            />
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">
            โรงเรียนบ้านบวกหมื้อ
          </h1>
        </div>
      </header>
      <main className="flex-grow p-4 md:p-6 lg:p-8 bg-zinc-950">
        <div className="bg-white rounded-2xl shadow-[0_0_15px_rgba(250,204,21,0.15)] border-2 border-yellow-400/50 overflow-hidden h-[calc(100vh-9rem)] w-full max-w-7xl mx-auto">
          <iframe 
            src="https://script.google.com/macros/s/AKfycbxQQAgMtJ8C4H06zvKSF_5vtz4pWLhcWxnIq_mojWoY_ryR0v51y_BppYxjH6ncIAbviA/exec" 
            className="w-full h-full border-0"
            title="School Information System"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}
