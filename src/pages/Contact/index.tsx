import React from "react";
import Header from "../../components/header";
import backgroundCity from "../../Images/background/backgroundCity.jpg";

const Contact = () => {
    return (
        <>
            <Header />
            <div
                className="flex flex-col items-center justify-center min-h-screen p-6"
                style={{
                    backgroundImage: `url(${backgroundCity})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="flex flex-col items-center p-5 bg-gray-900 border rounded-lg min-screen mt-30">
                    <h2 className="text-3xl font-bold text-center text-white mb-6 ">Kontakta oss</h2>
                    <p className="text-l text-left text-white">Johan Buckard
                    </p>
                    <p className="text-l text-left text-white">Tele:+4670 7251600
                    </p>
                    <p className="text-l text-left text-white">E-mail: Johan@buckard.com
                    </p>


                </div>
            </div>
        </>
    );
};

export default Contact;