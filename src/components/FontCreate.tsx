import React, { useState, useEffect } from "react";
import BackgroundImage from "./BackgroundImage";
import PriceExample from "./priceExample";
import getTextStyle from "./TextStyle";
import EmailInput from "./EmailInput";
import OrderButton from "./OrderButton";

const fonts = [
    "Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Comic Sans MS",
    "Sui-generis", "Ethnocentric", "Rooney", "Tachyon", "Griffon", "Aviano-serif",
];

const colors = ["black", "red", "blue", "green", "chrome", "stainless"];

const glowEffects = ["none", "Röd", "Blå", "Grön", "Lila", "Vit"];

const priceOptions = {
    small: { dimensions: "30x20 cm", price: 100 },
    medium: { dimensions: "50x30 cm", price: 200 },
    large: { dimensions: "70x50 cm", price: 350 },
    xl: { dimensions: "100x70 cm", price: 500 }
};

const FontCreate = () => {
    const [selectedFont, setSelectedFont] = useState(() => localStorage.getItem("selectedFont") || fonts[0]);
    const [selectedColor, setSelectedColor] = useState(() => localStorage.getItem("selectedColor") || "black");
    const [selectedGlow, setSelectedGlow] = useState(() => localStorage.getItem("selectedGlow") || "none");
    const [text, setText] = useState(() => localStorage.getItem("text") || "");
    const [fontSize, setFontSize] = useState(() => Number(localStorage.getItem("fontSize")) || 16);
    const [bgScale, setBgScale] = useState(() => Number(localStorage.getItem("bgScale")) || 1);
    const [textPosition, setTextPosition] = useState(() => {
        return localStorage.getItem("textPosition")
            ? JSON.parse(localStorage.getItem("textPosition"))
            : { top: 50, left: 50 };
    });

    const [email, setEmail] = useState("");
    const [selectedSize, setSelectedSize] = useState("small");

    useEffect(() => {
        localStorage.setItem("selectedFont", selectedFont);
        localStorage.setItem("selectedColor", selectedColor);
        localStorage.setItem("selectedGlow", selectedGlow);
        localStorage.setItem("text", text);
        localStorage.setItem("fontSize", fontSize.toString());
        localStorage.setItem("bgScale", bgScale.toString());
        localStorage.setItem("textPosition", JSON.stringify(textPosition));
    }, [selectedFont, selectedColor, selectedGlow, text, fontSize, bgScale, textPosition]);

    const totalPrice = priceOptions[selectedSize].price;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white relative w-full">
            <h1 className="text-2xl font-bold mb-4 mt-10">Designa ditt båtnamn</h1>

            <label className="mb-1">Skriv din text:</label>
            <input
                type="text"
                placeholder="Skriv något..."
                className="p-2 border border-white rounded bg-transparent text-white mb-2 w-64 text-center placeholder-gray-300"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <label className="mb-2">Välj ett typsnitt:</label>
            <select
                className="p-2 border border-white rounded bg-transparent text-white mb-4"
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
            >
                {fonts.map((font) => (
                    <option key={font} value={font} style={{ fontFamily: font }} className="text-black">
                        {font}
                    </option>
                ))}
            </select>

            <div className="flex">
                <div className="flex flex-col">
                    <label className="mb-2">Välj textfärg:</label>
                    <select
                        className="p-2 border border-white rounded bg-transparent text-white mb-4"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                    >
                        {colors.map((color) => (
                            <option key={color} value={color} className="text-black">
                                {color}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col ml-4">
                    <label className="mb-2">Välj ljuseffekt:</label>
                    <select
                        className="p-2 border border-white rounded bg-transparent text-white mb-4"
                        value={selectedGlow}
                        onChange={(e) => setSelectedGlow(e.target.value)}
                    >
                        {glowEffects.map((glow) => (
                            <option key={glow} value={glow} className="text-black">
                                {glow.replace("-glow", "")}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <label className="mb-2">Välj textstorlek:</label>
            <input
                type="range"
                min="10"
                max="50"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-64 mb-4 accent-white"
            />

            <label className="mb-2">Justera textposition:</label>
            <input
                type="range"
                min="0"
                max="100"
                value={textPosition.top}
                onChange={(e) => setTextPosition({ ...textPosition, top: Number(e.target.value) })}
                className="w-64 mb-2 accent-white"
            />
            <input
                type="range"
                min="0"
                max="100"
                value={textPosition.left}
                onChange={(e) => setTextPosition({ ...textPosition, left: Number(e.target.value) })}
                className="w-64 mb-4 accent-white"
            />
            <div className="w-full max-w-[900px] mx-auto">
                <BackgroundImage bgScale={bgScale} text={text} textStyle={getTextStyle(selectedFont, fontSize, textPosition, selectedColor, selectedGlow)} />
            </div>
            <label className="mb-2 mt-4">Zooma bakgrund:</label>
            <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={bgScale}
                onChange={(e) => setBgScale(Number(e.target.value))}
                className="w-64 mb-4 accent-white"
            />

            <PriceExample />
            <EmailInput email={email} setEmail={setEmail} />

            <OrderButton
                text={text}
                font={selectedFont}
                color={selectedColor}
                glow={selectedGlow}
                email={email}
                size={selectedSize}
                price={totalPrice}
                dimensions={priceOptions[selectedSize].dimensions}
            />
        </div>
    );
};

export default FontCreate;
