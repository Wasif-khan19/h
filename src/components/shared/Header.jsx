import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="p-4 w-full flex justify-between items-center">
        <div className="font-bold">
        <h1
            className="font-black tracking-tight text-3xl text-[#f3ede4]"
            style={{ textShadow: "7px 7px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Troll<span className='text-[#219ebc]'>Talk</span>
          </h1>
        </div>
        <button onClick={toggleMenu} className="text-white py-2 px-2 rounded-full bg-[#ff8e00] focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col bg-[#003f7d]  items-center justify-center h-full">
          <button onClick={toggleMenu} className="absolute top-4 right-4 py-2 px-2 rounded-full text-white bg-[#ff8e00] focus:outline-none">
            <X size={24} />
          </button>
          <ul className="text-center space-y-8">
            {['Home', 'Join A Event', 'Our DJs', 'Terms & Conditions', 'Our Privacy', 'Refunds & Cancellation'].map(
              (item) => (
                <li key={item} className="text-indigo-400 hover:text-indigo-300 text-3xl font-bold cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;