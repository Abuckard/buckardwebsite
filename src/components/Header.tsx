import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false); // 👈 För dropdown
    const [signsOpen, setSignsOpen] = useState(false)

    return (
        <header className="bg-gray-900 text-white p-4 shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Buckards Båtar</h1>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    ☰
                </button>
                <nav
                    className={`${isOpen ? "block" : "hidden"
                        } md:flex space-x-4 absolute md:static bg-gray-900 w-full md:w-auto top-full left-0 p-4 md:p-0`}
                >
                    <Link to="/" className="block py-2 md:inline-block">Hem</Link>
                    <div className="relative">
                        <button
                            onClick={() => setSignsOpen(!signsOpen)}
                            className="block py-2 md:inline-block focus:outline-none"
                        >
                            Skyltar &#9662;
                        </button>
                        {signsOpen && (
                            <div className="absolute bg-gray-800 shadow-md rounded-lg mt-2 py-2 w-40">
                                <Link to="/signs" className="block px-4 py-2 hover:bg-gray-700">Skyltar</Link>
                                <Link to="/galleri" className="block px-4 py-2 hover:bg-gray-700">Bildgalleri</Link>
                                <Link to="/montering" className="block px-4 py-2 hover:bg-gray-700">Montering</Link>
                                <Link to="/faq" className="block px-4 py-2 hover:bg-gray-700">Vanliga frågor</Link>
                            </div>
                        )}
                    </div>



                    <Link to="/about" className="block py-2 md:inline-block">Om oss</Link>
                    <Link to="/contact" className="block py-2 md:inline-block">Kontakt</Link>
                    <div className="relative">
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="block py-2 md:inline-block focus:outline-none"
                        >
                            Tjänster &#9662;
                        </button>
                        {servicesOpen && (
                            <div className="absolute bg-gray-800 shadow-md rounded-lg mt-2 py-2 w-40">
                                <Link to="/inplastning" className="block px-4 py-2 hover:bg-gray-700">Inplastning</Link>
                                <Link to="/polering" className="block px-4 py-2 hover:bg-gray-700">Polering</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/login" className="block py-2 md:inline-block">Logga in</Link>




                    {/* 🔹 Dropdown-meny för "Tjänster" */}

                </nav>
            </div>
        </header>
    );
};

export default Header;
