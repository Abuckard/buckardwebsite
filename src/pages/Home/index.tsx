import React from "react";
import Header from "../../components/Header";
import backgroundCity from "../../Images/background/backgroundCity.jpg";
import StartDesign from "../../components/StartDesign"
import WelcomeText from "../../components/Welcome";
const Home = () => {
    return (
        <>
            <Header />
            <div
                className="flex flex-col items-center  min-h-screen p-6"
                style={{
                    backgroundImage: `url(${backgroundCity})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}

            >
                <WelcomeText />
                <StartDesign />
            </div>
        </>
    );
};

export default Home;
