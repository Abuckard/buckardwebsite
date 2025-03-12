import React from "react";
import Header from "../../components/header";
import MaterialTest from "../../components/MaterialTest";

const About = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-6">
                <MaterialTest />
            </div>
        </>
    );
};

export default About;