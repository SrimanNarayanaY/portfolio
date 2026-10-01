"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Auto-close mobile drawer when window resized to desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const handleLinkClick = () => {
        setMobileOpen(false);
    };

    return (
        <header
            className="sticky top-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-200"
            style={{
                boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
            }}
        >
            <nav className="max-w-[1024px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3">
                <a
                    href="#top"
                    onClick={handleLinkClick}
                    className="text-gray-900 font-bold text-sm tracking-tight hover:text-blue-700 transition-colors"
                >
                    Sriman Narayana
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="px-3 py-1.5 text-xs text-gray-500 hover:text-gray-900 rounded-md transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <a
                        href="mailto:sriman793@gmail.com"
                        className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 text-xs font-semibold transition-colors"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Hamburger Toggle Button */}
                <button
                    type="button"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                    aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Navigation Drawer */}
            {mobileOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-5 space-y-2 shadow-lg animate-slide-down">
                    <div className="flex flex-col space-y-1">
                        {links.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={handleLinkClick}
                                className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                        <a
                            href="mailto:sriman793@gmail.com"
                            onClick={handleLinkClick}
                            className="w-full flex items-center justify-center bg-blue-700 text-white rounded-md py-2.5 text-xs font-semibold hover:bg-blue-800 transition-colors"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
