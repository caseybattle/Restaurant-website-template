export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <span className="font-serif text-2xl font-bold text-white tracking-wider">
            TEXAS <span className="text-amber-500">TASTE</span>
          </span>
        </div>
        
        <div className="flex space-x-6 mb-6 md:mb-0">
          {['Facebook', 'Instagram', 'Twitter'].map((social) => (
            <a key={social} href="#" className="text-neutral-500 hover:text-amber-500 transition-colors uppercase tracking-widest text-xs">
              {social}
            </a>
          ))}
        </div>

        <div className="text-neutral-600 text-sm font-light">
          &copy; {new Date().getFullYear()} Texas Taste. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
