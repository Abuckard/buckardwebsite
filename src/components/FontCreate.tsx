// import React, { useState } from "react";
// import PrincessTest from "../Images/PrincessTest.png";
// import BackgroundImage from "./BackgroundImage";
// import PriceExample from "./priceExample";
// import getTextStyle from "./TextStyle";

// const fonts = [
//     "Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Comic Sans MS",
//     "sui-generis, sans-serif", "ethnocentric, sans-serif", "rooney-sans, sans-serif", "tachyon, sans-serif", "griffon, sans-serif", "aviano-serif, serif",
// ];

// const colors = [
//     "black", "red", "blue", "green", "chrome", "stainless",
// ];

// const glowEffects = [
//     "none", "red-glow", "blue-glow", "green-glow", "purple-glow"
// ];

// const FontCreate = () => {
//     const [selectedFont, setSelectedFont] = useState(fonts[0]);
//     const [selectedColor, setSelectedColor] = useState("black");
//     const [selectedGlow, setSelectedGlow] = useState("none");
//     const [text, setText] = useState("");
//     const [fontSize, setFontSize] = useState(16);
//     const [bgScale, setBgScale] = useState(1);
//     const [textPosition, setTextPosition] = useState({ top: 50, left: 50 });

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 relative">
//             <h1 className="text-2xl font-bold mb-4">Testa Typsnitt</h1>

//             <label className="mb-2">Skriv din text:</label>
//             <input
//                 type="text"
//                 placeholder="Skriv något..."
//                 className="p-2 border rounded mb-4 w-64 text-center"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             />

//             <label className="mb-2">Välj ett typsnitt:</label>
//             <select
//                 className="p-2 border rounded mb-4"
//                 value={selectedFont}
//                 onChange={(e) => setSelectedFont(e.target.value)}
//             >
//                 {fonts.map((font) => (
//                     <option key={font} value={font} style={{ fontFamily: font }}>
//                         {font}
//                     </option>
//                 ))}
//             </select>

//             <label className="mb-2">Välj textfärg:</label>
//             <select
//                 className="p-2 border rounded mb-4"
//                 value={selectedColor}
//                 onChange={(e) => setSelectedColor(e.target.value)}
//             >
//                 {colors.map((color) => (
//                     <option key={color} value={color} style={{ color: color }}>
//                         {color}
//                     </option>
//                 ))}
//             </select>

//             <label className="mb-2">Välj ljuseffekt:</label>
//             <select
//                 className="p-2 border rounded mb-4"
//                 value={selectedGlow}
//                 onChange={(e) => setSelectedGlow(e.target.value)}
//             >
//                 {glowEffects.map((glow) => (
//                     <option key={glow} value={glow}>{glow.replace("-glow", " Glow")}</option>
//                 ))}
//             </select>

//             <label className="mb-2">Välj textstorlek:</label>
//             <input
//                 type="range"
//                 min="10"
//                 max="50"
//                 value={fontSize}
//                 onChange={(e) => setFontSize(Number(e.target.value))}
//                 className="w-64 mb-4"
//             />
//             <label className="mb-2 mt-4">Zooma bakgrund:</label>
//             <input
//                 type="range"
//                 min="1"
//                 max="3"
//                 step="0.1"
//                 value={bgScale}
//                 onChange={(e) => setBgScale(Number(e.target.value))}
//                 className="w-64 mb-4"
//             />

//             <label className="mb-2">Justera textposition:</label>
//             <input
//                 type="range"
//                 min="0"
//                 max="100"
//                 value={textPosition.top}
//                 onChange={(e) => setTextPosition({ ...textPosition, top: Number(e.target.value) })}
//                 className="w-64 mb-2"
//             />
//             <input
//                 type="range"
//                 min="0"
//                 max="100"
//                 value={textPosition.left}
//                 onChange={(e) => setTextPosition({ ...textPosition, left: Number(e.target.value) })}
//                 className="w-64 mb-4"
//             />

//             <BackgroundImage bgScale={bgScale} text={text} textStyle={getTextStyle(selectedFont, fontSize, textPosition, selectedColor, selectedGlow)} />
//             <PriceExample />
//         </div>
//     );
// };

// export default FontCreate;


import React, { useState, useEffect } from "react";
import PrincessTest from "../Images/PrincessTest.png";
import BackgroundImage from "./BackgroundImage";
import PriceExample from "./priceExample";
import getTextStyle from "./TextStyle";

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

    useEffect(() => {
        localStorage.setItem("selectedFont", selectedFont);
        localStorage.setItem("selectedColor", selectedColor);
        localStorage.setItem("selectedGlow", selectedGlow);
        localStorage.setItem("text", text);
        localStorage.setItem("fontSize", fontSize.toString());
        localStorage.setItem("bgScale", bgScale.toString());
        localStorage.setItem("textPosition", JSON.stringify(textPosition));
    }, [selectedFont, selectedColor, selectedGlow, text, fontSize, bgScale, textPosition]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-primary relative">
            <h1 className="text-2xl font-bold mb-4 mt-10">Testa Typsnitt</h1>

            <label className="mb-1 bg-darkPurple">Skriv din text:</label>
            <input
                type="text"
                placeholder="Skriv något..."
                className="p-2 border rounded mb-2 w-64 text-center"
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

                <div className="flex">
                <div className="flex flex-col">
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
            </div>
            <div className="flex flex-col ml-4">
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
            </div>
            </div>
            <label className="mb-2">Välj textstorlek:</label>
            <input
                type="range"
                min="10"
                max="50"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
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

            <BackgroundImage bgScale={bgScale} text={text} textStyle={getTextStyle(selectedFont, fontSize, textPosition, selectedColor, selectedGlow)} />
            <PriceExample />
        </div>
    );
};

export default FontCreate;
