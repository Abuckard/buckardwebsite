import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeText: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col items-center justify-center h-30 rounded-2xl bg-gray-900 text-white px-4 text-center mt-30">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Välkommen till Buckards Båtar</h2>

            </div>
        </>
    );
};

export default WelcomeText;
