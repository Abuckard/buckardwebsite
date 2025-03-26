import React from "react";
import { useNavigate } from "react-router-dom";

const StartDesign: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col items-center justify-center h-50 rounded-2xl bg-gray-900 text-white px-4 text-center mt-20">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Börja designa ditt båtnamn</h2>
                <button
                    onClick={() => navigate("/signs")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition-all duration-200"
                >
                    Gå till designverktyget
                </button>
            </div>
        </>
    );
};

export default StartDesign;
