import React from "react";
import Header from "../../components/Header";
import backgroundCity from "../../Images/background/backgroundCity.jpg";

const Faq = () => {
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
                <div className="flex flex-col items-left p-5 bg-gray-900 border rounded-lg min-screen mt-30">
                    <h2 className="text-3xl font-bold text-center text-white mb-6 ">Vanliga frågor</h2>
                    <h3 className="text-2xl text-left text-white ">Hur mycket ström drar min skylt? </h3>
                    <p className="text-l text-left text-white mb-5">Bokstäverna drar ca 2 watt/styck lite beroende på storlek. Det framgår av monteringsanvisningen som medföljer hur mycket hela din skylt drar. </p>

                    <h3 className="text-2xl text-left text-white">Hur lång är garantin? </h3>
                    <p className="text-l text-left text-white mb-5">Du får 2 års utbytesgaranti, Du skickar den gamla, vi skickar en ny. </p>

                    <h3 className="text-2xl text-left text-white">Kan ni hjälpa till med montering? </h3>
                    <p className="text-l text-left text-white mb-5">Ja, men det brukar inte behövas då det är väldigt enkelt att montera/ koppla in. </p>

                    <h3 className="text-2xl text-left text-white">Kan ni fakturera mitt företag? </h3>
                    <p className="text-l text-left text-white mb-5">Ja, och vi kan även göra företagsskyltar. </p>

                </div>
            </div>
        </>
    );
};

export default Faq;