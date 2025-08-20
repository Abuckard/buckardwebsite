// src/components/NavButton.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

type NavButtonProps = {
    to: string;
    label: string;
    color?: string; // valfritt för styling
};

const NavButton: React.FC<NavButtonProps> = ({ to, label, color = "blue" }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(to)}
            className={`px-4 py-2 rounded font-medium text-white bg-${color}-600 hover:bg-${color}-500 transition`}
        >
            {label}
        </button>
    );
};

export default NavButton;
