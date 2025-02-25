import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-600 text-white p-4 shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Buckard Båtar</h1>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    ☰
                </button>
                <nav
                    className={`${isOpen ? "block" : "hidden"
                        } md:flex space-x-4 absolute md:static bg-blue-600 w-full md:w-auto top-full left-0 p-4 md:p-0`}
                >
                    <Link to="/" className="block py-2 md:inline-block">Hem</Link>
                    <Link to="/about" className="block py-2 md:inline-block">Om oss</Link>
                    <Link to="/contact" className="block py-2 md:inline-block">Kontakt</Link>
                    <Link to="/login" className="block py-2 md:inline-block">Logga in</Link>
                    <Link to="/signs" className="block py-2 md:inline-block">Skyltar</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;