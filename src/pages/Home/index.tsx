import React from "react";
import Header from "../../components/header";

const Home = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
                <h1 className="text-4xl font-bold text-blue-600">Välkommen till Buckard Båtar!</h1>
                <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">
                    Skyltar
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-700 transition">
                    Se våra båtar
                </button>
            </div>
        </>
    );
};

export default Home;
