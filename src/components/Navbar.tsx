import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-3 w-full \
            ${scrolled ? 'backdrop-blur-md bg-black/70' : 'backdrop-blur-sm'} \
            ${hidden ? '-translate-y-full' : 'translate-y-0'} \
            transition-all duration-300`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:justify-center md:space-x-6">
          {/* Left Side Navigation */}
          <div className="hidden md:flex space-x-6 ml-4 animate-fade-in">
            <NavLink href="#home">Anasayfa</NavLink>
            <NavLink href="#about">Hakkımda</NavLink>
            <NavLink href="#experience">Deneyim</NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Center Logo - Updated with new SG logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold flex items-center">
              <img src="/logo.png" alt="SG Logo" className="w-10 h-10 mr-2" />
              <span className="text-white">Sina Toprak &nbsp;</span>
              <span className="text-green-500">Güleç</span>
            </a>
          </div>
          
          {/* Right Side Navigation */}
          <div className="hidden md:flex space-x-6 animate-fade-in">
            <NavLink href="#technologies">Teknolojiler</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#contact">İletişim</NavLink>
          </div>
          
          {/* Empty div for spacing on mobile */}
          <div className="md:hidden w-6"></div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-6 space-y-8 text-xl text-white transition-opacity duration-300 animate-fade-in">
          <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col items-center space-y-6">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Anasayfa</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>Hakkımda</MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setIsOpen(false)}>Deneyim</MobileNavLink>
            <MobileNavLink href="#technologies" onClick={() => setIsOpen(false)}>Teknolojiler</MobileNavLink>
            <MobileNavLink href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>İletişim</MobileNavLink>
          </div>
        </div>
      )}
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode; }) => (
  <a href={href} className="text-white hover:text-green-500 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-green-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void; }) => (
  <a href={href} className="text-white hover:text-green-500 transition-colors duration-300" onClick={onClick}>
    {children}
  </a>
);

export default Navbar;
