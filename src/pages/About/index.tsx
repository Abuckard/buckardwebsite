import React from "react";
import Header from "../../components/header";
import MaterialTest from "../../components/MaterialTest";
import backgroundCity from "../../Images/background/backgroundCity.jpg";

const About = () => {
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
                    <h2 className="text-3xl font-bold text-center text-white mb-6 ">Om oss</h2>
                    <p className="text-l text-left text-white">Vi är ett familjeföretag som har verkat på båtmarknaden i över 20 år.<br></br> Vi har tidigare hållit på med import av större familjebåtar från medelhavet, men har nu valt att byta kurs. <br></br> I dag är vi en internationell tillverkare av belysta båtnamn.
                    </p>


                </div>
            </div>

        </>
    );
};

export default About;