"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  
  const navLinks = [
    { name: 'Courses', href: '#' },
    { name: 'Faculty Profile', href: '/faculty' },
    { name: 'Student Resource', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <Link href="/" className="font-bold text-2xl text-primary tracking-tight">The Sovereign Scholar</Link>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-sm transition-colors ${
                  isActive 
                    ? 'font-semibold text-primary border-b-2 border-primary pb-1' 
                    : 'font-medium text-secondary hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button className="bg-primary text-white px-5 py-2 rounded-md font-semibold text-sm shadow-sm hover:bg-blue-700 transition-colors">Enroll Now</button>
        </div>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
