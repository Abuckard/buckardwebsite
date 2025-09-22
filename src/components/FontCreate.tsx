import React, { useState, useEffect } from "react";
import BackgroundImage from "./BackgroundImage";
import PriceExample from "./priceExample";
import getTextStyle from "./TextStyle";
import EmailInput from "./EmailInput";
import OrderButton from "./OrderButton";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import NavButton from "./NavButton";
import { FONT_MAP } from "./FONT_MAP";

// const fonts = [
//     "Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Comic Sans MS",
//     "Sui-generis", "Ethnocentric", "Rooney", "Tachyon", "Griffon", "Aviano-serif",
// ];

const fonts = Object.keys(FONT_MAP);

const colors = ["black", "chrome",];
const colorLabels: Record<string, string> = {
    black: "Svart",
    red: "Röd",
    blue: "Blå",
    green: "Grön",
    chrome: "Krom",
    stainless: "Rostfritt",
};
const glowEffects = ["none", "Röd", "Blå", "Grön", "Lila", "Vit", "Isblå", "Varmvit"];

const priceOptions = {
    small: { dimensions: "50x10 cm", price: 8800 },
    medium: { dimensions: "70x14 cm", price: 12800 },
    large: { dimensions: "100x18 cm", price: 16000 },
    xl: { dimensions: "160x30 cm", price: 22000 }
};

const FontCreate = () => {
    // Primär text
    const [selectedFont, setSelectedFont] = useState(() => localStorage.getItem("selectedFont") || fonts[0]);
    const [selectedColor, setSelectedColor] = useState(() => localStorage.getItem("selectedColor") || "black");
    const [selectedGlow, setSelectedGlow] = useState(() => localStorage.getItem("selectedGlow") || "none");
    const [text, setText] = useState(() => localStorage.getItem("text") || "");
    const [fontSize, setFontSize] = useState(() => Number(localStorage.getItem("fontSize")) || 16);
    const [rotation, setRotation] = useState<number>(() => Number(localStorage.getItem("rotation")) || 0);
    const [textPosition, setTextPosition] = useState(() => {
        return localStorage.getItem("textPosition")
            ? JSON.parse(localStorage.getItem("textPosition") as string)
            : { top: 50, left: 50 };
    });

    // Bakgrund
    const [bgScale, setBgScale] = useState(() => Number(localStorage.getItem("bgScale")) || 1);

    // Extra text – AV/PÅ + egna inställningar
    const [showExtra, setShowExtra] = useState(() => localStorage.getItem("showExtra") === "true");
    const [text2, setText2] = useState(() => localStorage.getItem("text2") || "");
    const [selectedFont2, setSelectedFont2] = useState(() => localStorage.getItem("selectedFont2") || fonts[0]);
    const [selectedColor2, setSelectedColor2] = useState(() => localStorage.getItem("selectedColor2") || "black");
    const [selectedGlow2, setSelectedGlow2] = useState(() => localStorage.getItem("selectedGlow2") || "none");
    const [fontSize2, setFontSize2] = useState(() => Number(localStorage.getItem("fontSize2")) || 14);
    const [rotation2, setRotation2] = useState<number>(() => Number(localStorage.getItem("rotation2")) || 0);
    const [textPosition2, setTextPosition2] = useState(() => {
        return localStorage.getItem("textPosition2")
            ? JSON.parse(localStorage.getItem("textPosition2") as string)
            : { top: 65, left: 50 };
    });

    const [email, setEmail] = useState("");
    const [selectedSize, setSelectedSize] = useState("small");
    const totalPrice = priceOptions[selectedSize as keyof typeof priceOptions].price;

    useEffect(() => {
        // primär
        localStorage.setItem("selectedFont", selectedFont);
        localStorage.setItem("selectedColor", selectedColor);
        localStorage.setItem("selectedGlow", selectedGlow);
        localStorage.setItem("text", text);
        localStorage.setItem("fontSize", fontSize.toString());
        localStorage.setItem("rotation", rotation.toString());
        localStorage.setItem("textPosition", JSON.stringify(textPosition));

        // bakgrund
        localStorage.setItem("bgScale", bgScale.toString());

        // extra
        localStorage.setItem("showExtra", String(showExtra));
        localStorage.setItem("text2", text2);
        localStorage.setItem("selectedFont2", selectedFont2);
        localStorage.setItem("selectedColor2", selectedColor2);
        localStorage.setItem("selectedGlow2", selectedGlow2);
        localStorage.setItem("fontSize2", fontSize2.toString());
        localStorage.setItem("rotation2", rotation2.toString());
        localStorage.setItem("textPosition2", JSON.stringify(textPosition2));
    }, [
        selectedFont, selectedColor, selectedGlow, text, fontSize, rotation, textPosition,
        bgScale,
        showExtra, text2, selectedFont2, selectedColor2, selectedGlow2, fontSize2, rotation2, textPosition2
    ]);

    const designData = {
        // Primär text
        text,
        selectedFont,
        selectedColor,
        selectedGlow,
        fontSize,
        rotation,
        textPosition,

        // Extra text
        showExtra,
        text2,
        selectedFont2,
        selectedColor2,
        selectedGlow2,
        fontSize2,
        rotation2,
        textPosition2,

        // Bakgrund
        bgScale,

        // Pris
        selectedSize,
        dimensions: priceOptions[selectedSize as keyof typeof priceOptions].dimensions,
        totalPrice: priceOptions[selectedSize as keyof typeof priceOptions].price,
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white relative w-full">
            <h1 className="text-2xl font-bold mb-4 mt-10">Designa ditt båtnamn</h1>

            {/* Primär text */}
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
                                {colorLabels[color]} {/* <-- Visas på svenska */}
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

            <label className="mb-2">Rotera text:</label>
            <input
                type="range"
                min={-10}
                max={10}
                step={1}
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
                className="w-64 mb-4 accent-white"
            />
            <div className="mb-4">Rotation: {rotation}°</div>

            {/* <label className="mb-2">Justera textposition:</label> */}
            <input
                type="hidden"
                min="0"
                max="100"
                value={textPosition.top}
                onChange={(e) => setTextPosition({ ...textPosition, top: Number(e.target.value) })}
                className="w-64 mb-2 accent-white"
            />
            <input
                type="hidden"
                min="0"
                max="100"
                value={textPosition.left}
                onChange={(e) => setTextPosition({ ...textPosition, left: Number(e.target.value) })}
                className="w-64 mb-4 accent-white"
            />

            {/* Extra text – toggle + kontroller */}
            {/* <button
                type="button"
                onClick={() => setShowExtra((v) => !v)}
                className="px-4 py-2 border border-white rounded mb-4"
            >
                {showExtra ? "Ta bort extra text" : "Lägg till extra text"}
            </button>

            {showExtra && (
                <div className="w-full max-w-[700px] border border-white/40 rounded p-4 mb-4">
                    <h2 className="font-semibold mb-3">Extra text</h2>

                    <label className="mb-1">Text:</label>
                    <input
                        type="text"
                        placeholder="Skriv extra text..."
                        className="p-2 border border-white rounded bg-transparent text-white mb-3 w-64 text-center placeholder-gray-300"
                        value={text2}
                        onChange={(e) => setText2(e.target.value)}
                    />

                    <div className="flex">
                        <div className="flex flex-col">
                            <label className="mb-2">Typsnitt:</label>
                            <select
                                className="p-2 border border-white rounded bg-transparent text-white mb-4"
                                value={selectedFont2}
                                onChange={(e) => setSelectedFont2(e.target.value)}
                            >
                                {fonts.map((font) => (
                                    <option key={font} value={font} style={{ fontFamily: font }} className="text-black">
                                        {font}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col ml-4">
                            <label className="mb-2">Färg:</label>
                            <select
                                className="p-2 border border-white rounded bg-transparent text-white mb-4"
                                value={selectedColor2}
                                onChange={(e) => setSelectedColor2(e.target.value)}
                            >
                                {colors.map((color) => (
                                    <option key={color} value={color} className="text-black">
                                        {color}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col ml-4">
                            <label className="mb-2">Glow:</label>
                            <select
                                className="p-2 border border-white rounded bg-transparent text-white mb-4"
                                value={selectedGlow2}
                                onChange={(e) => setSelectedGlow2(e.target.value)}
                            >
                                {glowEffects.map((glow) => (
                                    <option key={glow} value={glow} className="text-black">
                                        {glow.replace("-glow", "")}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <label className="mb-2">Storlek:</label>
                    <input
                        type="range"
                        min="8"
                        max="48"
                        value={fontSize2}
                        onChange={(e) => setFontSize2(Number(e.target.value))}
                        className="w-64 mb-4 accent-white"
                    />

                    <label className="mb-2">Rotation:</label>
                    <input
                        type="range"
                        min={-10}
                        max={10}
                        step={1}
                        value={rotation2}
                        onChange={(e) => setRotation2(Number(e.target.value))}
                        className="w-64 mb-2 accent-white"
                    />
                    <div className="mb-3">Rotation: {rotation2}°</div>

                    <label className="mb-2">Position:</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={textPosition2.top}
                        onChange={(e) => setTextPosition2({ ...textPosition2, top: Number(e.target.value) })}
                        className="w-64 mb-2 accent-white"
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={textPosition2.left}
                        onChange={(e) => setTextPosition2({ ...textPosition2, left: Number(e.target.value) })}
                        className="w-64 mb-2 accent-white"
                    />
                </div>
            )} */}

            <button
                type="button"
                onClick={() => setShowExtra((v) => !v)}
                className="mt-2 mb-4 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-colors"
            >
                {showExtra ? "Ta bort extra text" : "Lägg till hemmahamn"}
            </button>

            {showExtra && (
                <div className="w-full max-w-[700px] border  border-white/40 rounded p-4 mb-4">
                    <h2 className="font-semibold mb-3 ">Lägg till hemmahamn</h2>

                    <label className="mb-1">Text:</label>
                    <input
                        type="text"
                        placeholder="Skriv extra text..."
                        className="p-2 border border-white rounded bg-transparent text-white mb-3 w-full sm:w-64 text-center placeholder-gray-300"
                        value={text2}
                        onChange={(e) => setText2(e.target.value)}
                    />

                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div className="flex flex-col flex-1">
                            <label className="mb-2">Typsnitt:</label>
                            <select
                                className="p-2 border border-white rounded bg-transparent text-white mb-4"
                                value={selectedFont2}
                                onChange={(e) => setSelectedFont2(e.target.value)}
                            >
                                {fonts.map((font) => (
                                    <option key={font} value={font} style={{ fontFamily: font }} className="text-black">
                                        {font}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col flex-1">
                            <label className="mb-2">Färg:</label>
                            <select
                                className="p-2 border border-white rounded bg-transparent text-white mb-4"
                                value={selectedColor2}
                                onChange={(e) => setSelectedColor2(e.target.value)}
                            >
                                {colors.map((color) => (
                                    <option key={color} value={color} className="text-black">
                                        {color}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col flex-1">
                            <label className="mb-2">Glow:</label>
                            <select
                                className="p-2 border border-white rounded bg-transparent text-white mb-4"
                                value={selectedGlow2}
                                onChange={(e) => setSelectedGlow2(e.target.value)}
                            >
                                {glowEffects.map((glow) => (
                                    <option key={glow} value={glow} className="text-black">
                                        {glow.replace("-glow", "")}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <label className="mb-2">Storlek:</label>
                    <input
                        type="range"
                        min="8"
                        max="48"
                        value={fontSize2}
                        onChange={(e) => setFontSize2(Number(e.target.value))}
                        className="w-full sm:w-64 mb-4 accent-white"
                    />

                    <label className="mb-2">Rotation:</label>
                    <input
                        type="range"
                        min={-10}
                        max={10}
                        step={1}
                        value={rotation2}
                        onChange={(e) => setRotation2(Number(e.target.value))}
                        className="w-full sm:w-64 mb-2 accent-white"
                    />
                    <div className="mb-3">Rotation: {rotation2}°</div>
                    {/* 
                    <label className="mb-2">Position:</label> */}
                    <input
                        type="hidden"
                        min="0"
                        max="100"
                        value={textPosition2.top}
                        onChange={(e) => setTextPosition2({ ...textPosition2, top: Number(e.target.value) })}
                        className="w-full sm:w-64 mb-2 accent-white"
                    />
                    <input
                        type="hidden"
                        min="0"
                        max="100"
                        value={textPosition2.left}
                        onChange={(e) => setTextPosition2({ ...textPosition2, left: Number(e.target.value) })}
                        className="w-full sm:w-64 mb-2 accent-white"
                    />
                </div>
            )}


            {/* Förhandsvisning */}
            <div className="w-full max-w-[900px] mx-auto">

                <BackgroundImage
                    bgScale={bgScale}
                    text={text}
                    textStyle={getTextStyle(
                        selectedFont,
                        fontSize,
                        textPosition,
                        selectedColor,
                        selectedGlow,
                        rotation
                    )}
                    secondaryText={showExtra ? text2 : undefined}
                    secondaryTextStyle={
                        showExtra
                            ? getTextStyle(
                                selectedFont2,
                                fontSize2,
                                textPosition2,
                                selectedColor2,
                                selectedGlow2,
                                rotation2
                            )
                            : undefined
                    }
                    // NYTT: dra för att flytta — uppdaterar state i FontCreate
                    onPrimaryPositionChange={(pos) => setTextPosition(pos)}
                    onSecondaryPositionChange={(pos) => setTextPosition2(pos)}
                />

            </div>

            {/* Zooma bakgrund */}
            <label className="mb-2 mt-4">Zooma bakgrund:</label>
            <input
                type="range"
                min="0.3"
                max="3"
                step="0.1"
                value={bgScale}
                onChange={(e) => setBgScale(Number(e.target.value))}
                className="w-64 mb-4 accent-white"
            />
            <PriceExample />
            <div className="flex space-x-4 mb-6 mt-6">
                <NavButton to="/galleri" label="Galleri" color="blue" />
                <NavButton to="/faq" label="Vanliga frågor" color="green" />
                <NavButton to="/montering" label="Montering" color="blue" />

            </div>

            <ContactForm designData={designData} />

        </div>
    );
};

export default FontCreate;
