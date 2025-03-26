import React from "react";
import { useNavigate } from "react-router-dom";

const ContactInfo: React.FC = () => {


    return (
        <>
            <div className="flex flex-col items-center p-5 bg-gray-900 border rounded-lg min-screen mt-10">
                <h2 className="text-3xl font-bold text-center text-white mb-6 ">Kontakta oss</h2>
                <p className="text-l text-left text-white">Johan Buckard
                </p>
                <p className="text-l text-left text-white">Tele:+4670 7251600
                </p>
                <p className="text-l text-left text-white">E-mail: Johan@buckard.com
                </p>


            </div>
        </>
    );
};

export default ContactInfo;
