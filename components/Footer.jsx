"use client";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Copyright {new Date().getFullYear()} ©</span>
          <span>Develop by Your Name</span>
        </div>
      </div>
    </footer>
  );
}