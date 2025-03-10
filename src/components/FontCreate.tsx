
import React, { useState } from "react";
import PrincessTest from "../Images/PrincessTest.png";

const fonts = [
    "Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Comic Sans MS",
    "sui-generis, sans-serif", "ethnocentric, sans-serif", "rooney-sans, sans-serif", "tachyon, sans-serif", "griffon, sans-serif", "aviano-serif, serif",
];

const colors = [
    "black", "red", "blue", "green", "chrome", "stainless",
];

const glowEffects = [
    "none", "red-glow", "blue-glow", "green-glow", "purple-glow"
];

const FontCreate = () => {
    const [selectedFont, setSelectedFont] = useState(fonts[0]);
    const [selectedColor, setSelectedColor] = useState("black");
    const [selectedGlow, setSelectedGlow] = useState("none");
    const [text, setText] = useState("");
    const [fontSize, setFontSize] = useState(16);
    const [bgScale, setBgScale] = useState(1);
    const [textPosition, setTextPosition] = useState({ top: 50, left: 50 });
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    const getTextStyle = () => {
        let style = {
            fontFamily: selectedFont,
            fontSize: `${fontSize}px`,
            position: "absolute",
            top: `${textPosition.top}%`,
            left: `${textPosition.left}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            display: "inline-block"
        };

        if (selectedFont === "griffon, sans-serif") {
            style.fontWeight = 200;
            style.fontStyle = "normal";
        }
        if (selectedFont === "rooney-sans, sans-serif") {
            style.fontWeight = 700;
            style.fontStyle = "italic";
        }
        if (selectedFont === "ethnocentric, sans-serif") {
            style.fontWeight = "normal";
            style.fontStyle = "italic";
        }
        if (selectedFont === "tachyon, sans-serif") {
            style.fontWeight = "normal";
            style.fontStyle = "normal";
        }
        if (selectedFont === "sui-generis, sans-serif") {
            style.fontWeight = "normal";
            style.fontStyle = "normal";
        }
        if (selectedFont === "aviano-serif, serif") {
            style.fontWeight = 900;
            style.fontStyle = "normal";
        }

        if (selectedColor === "chrome") {
            style.backgroundImage = "linear-gradient(45deg, #e0e0e0, #ffffff, #b0b0b0, #808080)";
            style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
        } else if (selectedColor === "stainless") {
            style.backgroundImage = "linear-gradient(45deg, #c0c0c0, #e0e0e0, #d0d0d0, #a0a0a0)";
            style.textShadow = "1px 1px 4px rgba(0, 0, 0, 0.3)";
        } else if (["black", "red", "blue", "green"].includes(selectedColor)) {
            style.color = selectedColor;
            style.WebkitTextFillColor = selectedColor;
            style.WebkitBackgroundClip = "unset";
        } else {
            style.color = selectedColor;
        }

        if (selectedGlow !== "none") {
            const glowMap = {
                "red-glow": "0 0 15px red",
                "blue-glow": "0 0 15px blue",
                "green-glow": "0 0 15px green",
                "purple-glow": "0 0 15px purple",
            };
            style.textShadow = `${glowMap[selectedGlow]}, 0 0 30px rgba(255, 255, 255, 0.2)`;
        }

        return style;
    };
    const handleMouseDown = (e) => {
        setDragging(true);
        setStartPos({ x: e.clientX - bgPosition.x, y: e.clientY - bgPosition.y });
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;
        setBgPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 relative">
            <h1 className="text-2xl font-bold mb-4">Testa Typsnitt</h1>

            <label className="mb-2">Skriv din text:</label>
            <input
                type="text"
                placeholder="Skriv något..."
                className="p-2 border rounded mb-4 w-64 text-center"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <label className="mb-2">Välj ett typsnitt:</label>
            <select
                className="p-2 border rounded mb-4"
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
            >
                {fonts.map((font) => (
                    <option key={font} value={font} style={{ fontFamily: font }}>
                        {font}
                    </option>
                ))}
            </select>

            <label className="mb-2">Välj textfärg:</label>
            <select
                className="p-2 border rounded mb-4"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
            >
                {colors.map((color) => (
                    <option key={color} value={color} style={{ color: color }}>
                        {color}
                    </option>
                ))}
            </select>

            <label className="mb-2">Välj ljuseffekt:</label>
            <select
                className="p-2 border rounded mb-4"
                value={selectedGlow}
                onChange={(e) => setSelectedGlow(e.target.value)}
            >
                {glowEffects.map((glow) => (
                    <option key={glow} value={glow}>{glow.replace("-glow", " Glow")}</option>
                ))}
            </select>

            <label className="mb-2">Välj textstorlek:</label>
            <input
                type="range"
                min="10"
                max="50"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-64 mb-4"
            />
            <label className="mb-2 mt-4">Zooma bakgrund:</label>
            <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={bgScale}
                onChange={(e) => setBgScale(Number(e.target.value))}
                className="w-64 mb-4"
            />

            <label className="mb-2">Justera textposition:</label>
            <input
                type="range"
                min="0"
                max="100"
                value={textPosition.top}
                onChange={(e) => setTextPosition({ ...textPosition, top: Number(e.target.value) })}
                className="w-64 mb-2"
            />
            <input
                type="range"
                min="0"
                max="100"
                value={textPosition.left}
                onChange={(e) => setTextPosition({ ...textPosition, left: Number(e.target.value) })}
                className="w-64 mb-4"
            />

            <div
                className="relative w-[600px] h-[400px] overflow-hidden border border-gray-300 rounded-lg"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <img
                    src={PrincessTest}
                    alt="Background"
                    className="absolute"
                    style={{ transform: `scale(${bgScale}) translate(${bgPosition.x}px, ${bgPosition.y}px)`, transformOrigin: "center" }}
                />
                <div style={getTextStyle()}>{text || "Din text kommer att visas här..."}</div>
                console.log("Selected Font:", selectedFont);


            </div>
        </div>
    );
};

export default FontCreate;



