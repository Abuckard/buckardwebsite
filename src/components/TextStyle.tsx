// import React from "react";

// const getTextStyle = (selectedFont, fontSize, textPosition, selectedColor, selectedGlow) => {
//     let style = {
//         fontFamily: selectedFont,
//         fontSize: `${fontSize}px`,
//         position: "absolute",
//         top: `${textPosition.top}%`,
//         left: `${textPosition.left}%`,
//         transform: "translate(-50%, -50%)",
//         zIndex: 10,
//         WebkitTextFillColor: "transparent",
//         WebkitBackgroundClip: "text",
//         backgroundClip: "text",
//         display: "inline-block"
//     };

//     if (selectedFont === "griffon, sans-serif") {
//         style.fontWeight = 200;
//         style.fontStyle = "normal";
//     }
//     if (selectedFont === "rooney-sans, sans-serif") {
//         style.fontWeight = 700;
//         style.fontStyle = "italic";
//     }
//     if (selectedFont === "ethnocentric, sans-serif") {
//         style.fontWeight = "normal";
//         style.fontStyle = "italic";
//     }
//     if (selectedFont === "tachyon, sans-serif") {
//         style.fontWeight = "normal";
//         style.fontStyle = "normal";
//     }
//     if (selectedFont === "sui-generis, sans-serif") {
//         style.fontWeight = "normal";
//         style.fontStyle = "normal";
//     }
//     if (selectedFont === "aviano-serif, serif") {
//         style.fontWeight = 900;
//         style.fontStyle = "normal";
//     }

//     if (selectedColor === "chrome") {
//         style.backgroundImage = "linear-gradient(45deg, #e0e0e0, #ffffff, #b0b0b0, #808080)";
//         style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
//     } else if (selectedColor === "stainless") {
//         style.backgroundImage = "linear-gradient(45deg, #c0c0c0, #e0e0e0, #d0d0d0, #a0a0a0)";
//         style.textShadow = "1px 1px 4px rgba(0, 0, 0, 0.3)";
//     } else if (["black", "red", "blue", "green"].includes(selectedColor)) {
//         style.color = selectedColor;
//         style.WebkitTextFillColor = selectedColor;
//         style.WebkitBackgroundClip = "unset";
//     } else {
//         style.color = selectedColor;
//     }

//     if (selectedGlow !== "none") {

//         const glowMap = {
//             "Röd": "0 0 10px red, 0 0 30px, 0 0 50px",
//             "Blå": "0 0 15px blue",
//             "Grön": "0 0 15px green",
//             "Lila": "0 0 15px purple",
//             "Vit": "0 0 15px white",
//         };
//         style.textShadow = `${glowMap[selectedGlow]}, 0 0 30px rgba(255, 255, 255, 0.2)`;
//     }

//     return style;
// };

// export default getTextStyle;









// import React, { CSSProperties } from "react";

// type TextPosition = {
//     top: number;
//     left: number;
// };

// const getTextStyle = (
//     selectedFont: string,
//     fontSize: number,
//     textPosition: TextPosition,
//     selectedColor: string,
//     selectedGlow: string
// ): CSSProperties => {
//     let style: CSSProperties = {
//         fontFamily: selectedFont,
//         fontSize: `${fontSize}px`,
//         position: "absolute",
//         top: `${textPosition.top}%`,
//         left: `${textPosition.left}%`,
//         transform: "translate(-50%, -50%)",
//         zIndex: 10,
//         WebkitTextFillColor: "transparent",
//         WebkitBackgroundClip: "text",
//         backgroundClip: "text",
//         display: "inline-block"
//     };

//     if (selectedFont === "griffon, sans-serif") {
//         style.fontWeight = 200;
//         style.fontStyle = "normal";
//     }
//     if (selectedFont === "rooney-sans, sans-serif") {
//         style.fontWeight = 700;
//         style.fontStyle = "italic";
//     }
//     if (selectedFont === "ethnocentric, sans-serif") {
//         style.fontWeight = "normal";
//         style.fontStyle = "italic";
//     }
//     if (selectedFont === "tachyon, sans-serif") {
//         style.fontWeight = "normal";
//         style.fontStyle = "normal";
//     }
//     if (selectedFont === "sui-generis, sans-serif") {
//         style.fontWeight = "normal";
//         style.fontStyle = "normal";
//     }
//     if (selectedFont === "aviano-serif, serif") {
//         style.fontWeight = 900;
//         style.fontStyle = "normal";
//     }

//     // if (selectedColor === "chrome") {
//     //     style.backgroundImage = "linear-gradient(45deg, #e0e0e0, #ffffff, #b0b0b0, #808080)";
//     //     style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
//     if (selectedColor === "chrome") {
//         style.backgroundImage = `
//         linear-gradient(
//             135deg,
//             #f0f0f0 0%,
//             #c8c8c8 8%,
//             #ffffff 18%,
//             #a0a0a0 30%,
//             #e0e0e0 40%,
//             #808080 55%,
//             #d0d0d0 70%,
//             #f8f8f8 85%,
//             #b0b0b0 100%
//         )
//     `;
//         style.backgroundSize = "200% 200%";
//         style.textShadow = `
//         0 0 3px rgba(255, 255, 255, 0.8),
//         0 0 6px rgba(0, 0, 0, 0.4)
//     `;
//         style.color = "#fff"; // eller transparent + background-clip: text om du vill ha texten som metall


//     } else if (selectedColor === "stainless") {
//         style.backgroundImage = "linear-gradient(45deg, #c0c0c0, #e0e0e0, #d0d0d0, #a0a0a0)";
//         style.textShadow = "1px 1px 4px rgba(0, 0, 0, 0.3)";
//     } else if (["black", "red", "blue", "green"].includes(selectedColor)) {
//         style.color = selectedColor;
//         style.WebkitTextFillColor = selectedColor;
//         style.WebkitBackgroundClip = "unset";
//     } else {
//         style.color = selectedColor;
//     }

//     if (selectedGlow !== "none") {
//         const glowMap: Record<string, string> = {
//             Röd: "0 0 10px red, 0 0 30px, 0 0 50px",
//             Blå: "0 0 15px blue",
//             Grön: "0 0 15px green",
//             Lila: "0 0 15px purple",
//             Vit: "0 0 15px white"
//         };

//         if (glowMap[selectedGlow]) {
//             style.textShadow = `${glowMap[selectedGlow]}, 0 0 30px rgba(255, 255, 255, 0.2)`;
//         }
//     }

//     return style;
// };

// export default getTextStyle;


















// import React, { CSSProperties } from "react";

// type TextPosition = {
//     top: number;
//     left: number;
// };

// const getTextStyle = (
//     selectedFont: string,
//     fontSize: number,
//     textPosition: TextPosition,
//     selectedColor: string,
//     selectedGlow: string
// ): CSSProperties => {
//     let style: CSSProperties = {
//         fontFamily: selectedFont,
//         fontSize: `${fontSize}px`,
//         position: "absolute",
//         top: `${textPosition.top}%`,
//         left: `${textPosition.left}%`,
//         transform: "translate(-50%, -50%)",
//         zIndex: 10,
//         WebkitTextFillColor: "transparent",
//         WebkitBackgroundClip: "text",
//         backgroundClip: "text",
//         display: "inline-block",
//     };

//     // Font-varianter (oförändrade)
//     if (selectedFont === "griffon, sans-serif") {
//         style.fontWeight = 200; style.fontStyle = "normal";
//     }
//     if (selectedFont === "rooney-sans, sans-serif") {
//         style.fontWeight = 700; style.fontStyle = "italic";
//     }
//     if (selectedFont === "ethnocentric, sans-serif") {
//         style.fontWeight = "normal"; style.fontStyle = "italic";
//     }
//     if (selectedFont === "tachyon, sans-serif") {
//         style.fontWeight = "normal"; style.fontStyle = "normal";
//     }
//     if (selectedFont === "sui-generis, sans-serif") {
//         style.fontWeight = "normal"; style.fontStyle = "normal";
//     }
//     if (selectedFont === "aviano-serif, serif") {
//         style.fontWeight = 900; style.fontStyle = "normal";
//     }

//     // --- CHROME ---
//     if (selectedColor === "chrome") {
//         style.backgroundImage = [
//             // vertikal metall (smala ljus/mörka band)
//             "linear-gradient(90deg, #b7bcc2 0%, #f7f8f9 9%, #a3a9b0 18%, #ffffff 27%, #9aa1a9 38%, #e9ecef 52%, #8a9098 66%, #dfe2e6 82%, #b7bcc2 100%)",
//             // svag diagonal highlight
//             "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 45%)",
//         ].join(",");
//         style.backgroundSize = "100% 100%, 200% 200%";
//         style.backgroundPosition = "center, center";
//         style.backgroundRepeat = "no-repeat";

//         // skarpa kanter
//         (style as any).WebkitTextStroke = "1.2px rgba(255,255,255,0.65)";

//         // liten relief (inte glow)
//         style.textShadow = [
//             "0 1px 0 rgba(0,0,0,0.45)",
//             "0 -1px 0 rgba(255,255,255,0.35)",
//         ].join(", ");

//         (style as any).WebkitFontSmoothing = "antialiased";
//         (style as any).MozOsxFontSmoothing = "grayscale";
//         (style as any).textRendering = "geometricPrecision";
//     }
//     // --- STAINLESS ---
//     else if (selectedColor === "stainless") {
//         style.backgroundImage =
//             "linear-gradient(90deg, #c7ccd1 0%, #eef0f2 18%, #bdc3c9 36%, #ffffff 54%, #aab1b8 72%, #e4e7ea 100%)";
//         (style as any).WebkitTextStroke = "0.9px rgba(255,255,255,0.6)";
//         style.textShadow = "0 1px 0 rgba(0,0,0,0.35)";
//     }
//     // --- Solida färger ---
//     else if (["black", "red", "blue", "green"].includes(selectedColor)) {
//         style.color = selectedColor;
//         style.WebkitTextFillColor = selectedColor;
//         style.WebkitBackgroundClip = "unset";
//         style.backgroundClip = "unset";
//         delete (style as any).WebkitTextStroke;
//     } else {
//         style.color = selectedColor;
//         style.WebkitTextFillColor = selectedColor;
//         style.WebkitBackgroundClip = "unset";
//         style.backgroundClip = "unset";
//         delete (style as any).WebkitTextStroke;
//     }

//     // --- GLOW: endast text-shadow (inte filter) ---
//     if (selectedGlow !== "none") {
//         const glowColor: Record<string, string> = {
//             Röd: "rgba(255, 0,   0, 0.9)",
//             Blå: "rgba(  0, 84,255, 0.9)",
//             Grön: "rgba(  0,255,110,0.9)",
//             Lila: "rgba(160, 80,255,0.9)",
//             Vit: "rgba(255,255,255,0.95)",
//         };

//         const c = glowColor[selectedGlow];
//         if (c) {
//             const glow = [
//                 `0 0 6px ${c}`,
//                 `0 0 12px ${c}`,
//                 `0 0 20px ${c}`,
//                 `0 0 32px ${c}`,
//             ].join(", ");

//             // kombinera: relief + glowlager
//             style.textShadow = [
//                 style.textShadow || "",
//                 glow,
//             ].filter(Boolean).join(", ");
//         }
//     }

//     // viktigt: INTE använda filter: drop-shadow här (gav rektangelglöd)
//     delete (style as any).filter;

//     return style;
// };

// export default getTextStyle;













// import React, { CSSProperties } from "react";

// type TextPosition = {
//     top: number;
//     left: number;
// };

// const getTextStyle = (
//     selectedFont: string,
//     fontSize: number,
//     textPosition: TextPosition,
//     selectedColor: string,
//     selectedGlow: string,
//     rotation: number // NY parameter
// ): CSSProperties => {
//     let style: CSSProperties = {
//         fontFamily: selectedFont,
//         fontSize: `${fontSize}px`,
//         position: "absolute",
//         top: `${textPosition.top}%`,
//         left: `${textPosition.left}%`,
//         transform: `translate(-50%, -50%) rotate(${rotation}deg)`, // NYTT
//         zIndex: 10,
//         WebkitTextFillColor: "transparent",
//         WebkitBackgroundClip: "text",
//         backgroundClip: "text",
//         display: "inline-block",
//     };

//     // font-varianter
//     if (selectedFont === "griffon, sans-serif") {
//         style.fontWeight = 200; style.fontStyle = "normal";
//     }
//     if (selectedFont === "rooney-sans, sans-serif") {
//         style.fontWeight = 700; style.fontStyle = "italic";
//     }
//     if (selectedFont === "ethnocentric, sans-serif") {
//         style.fontWeight = "normal"; style.fontStyle = "italic";
//     }
//     if (selectedFont === "tachyon, sans-serif") {
//         style.fontWeight = "normal"; style.fontStyle = "normal";
//     }
//     if (selectedFont === "sui-generis, sans-serif") {
//         style.fontWeight = "normal"; style.fontStyle = "normal";
//     }
//     if (selectedFont === "aviano-serif, serif") {
//         style.fontWeight = 900; style.fontStyle = "normal";
//     }

//     // ---- CHROME ----
//     if (selectedColor === "chrome") {
//         style.backgroundImage = [
//             "linear-gradient(90deg, #b7bcc2 0%, #f7f8f9 9%, #a3a9b0 18%, #ffffff 27%, #9aa1a9 38%, #e9ecef 52%, #8a9098 66%, #dfe2e6 82%, #b7bcc2 100%)",
//             "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 45%)",
//         ].join(",");
//         style.backgroundSize = "100% 100%, 200% 200%";
//         style.backgroundPosition = "center, center";
//         style.backgroundRepeat = "no-repeat";
//         (style as any).WebkitTextStroke = "1.2px rgba(255,255,255,0.65)";
//         style.textShadow = [
//             "0 1px 0 rgba(0,0,0,0.45)",
//             "0 -1px 0 rgba(255,255,255,0.35)",
//         ].join(", ");
//         (style as any).WebkitFontSmoothing = "antialiased";
//         (style as any).MozOsxFontSmoothing = "grayscale";
//         (style as any).textRendering = "geometricPrecision";
//     }
//     // ---- STAINLESS ----
//     else if (selectedColor === "stainless") {
//         style.backgroundImage =
//             "linear-gradient(90deg, #c7ccd1 0%, #eef0f2 18%, #bdc3c9 36%, #ffffff 54%, #aab1b8 72%, #e4e7ea 100%)";
//         (style as any).WebkitTextStroke = "0.9px rgba(255,255,255,0.6)";
//         style.textShadow = "0 1px 0 rgba(0,0,0,0.35)";
//     }
//     // ---- Solida färger ----
//     else if (["black", "red", "blue", "green"].includes(selectedColor)) {
//         style.color = selectedColor;
//         style.WebkitTextFillColor = selectedColor;
//         style.WebkitBackgroundClip = "unset";
//         style.backgroundClip = "unset";
//         delete (style as any).WebkitTextStroke;
//     } else {
//         style.color = selectedColor;
//         style.WebkitTextFillColor = selectedColor;
//         style.WebkitBackgroundClip = "unset";
//         style.backgroundClip = "unset";
//         delete (style as any).WebkitTextStroke;
//     }

//     // ---- GLOW: endast text-shadow (ingen filter/drop-shadow) ----
//     if (selectedGlow !== "none") {
//         const glowColor: Record<string, string> = {
//             Röd: "rgba(255, 0,   0, 0.9)",
//             Blå: "rgba(  0, 84,255, 0.9)",
//             Grön: "rgba(  0,255,110,0.9)",
//             Lila: "rgba(160, 80,255,0.9)",
//             Vit: "rgba(255,255,255,0.95)",
//         };
//         const c = glowColor[selectedGlow];
//         if (c) {
//             const glow = [
//                 `0 0 6px ${c}`,
//                 `0 0 12px ${c}`,
//                 `0 0 20px ${c}`,
//                 `0 0 32px ${c}`,
//             ].join(", ");
//             style.textShadow = [style.textShadow || "", glow].filter(Boolean).join(", ");
//         }
//     }

//     delete (style as any).filter; // säkerställ att inget drop-shadow läcker in
//     return style;
// };

// export default getTextStyle;





import React, { CSSProperties } from "react";
import { FONT_MAP } from "./FONT_MAP"; // 👈 importera vår map

type TextPosition = {
    top: number;
    left: number;
};

const getTextStyle = (
    selectedFont: string,
    fontSize: number,
    textPosition: TextPosition,
    selectedColor: string,
    selectedGlow: string,
    rotation: number
): CSSProperties => {
    const resolvedFont = FONT_MAP[selectedFont] || selectedFont; // 👈 slå upp fonten

    let style: CSSProperties = {
        fontFamily: resolvedFont,
        fontSize: `${fontSize}px`,
        position: "absolute",
        top: `${textPosition.top}%`,
        left: `${textPosition.left}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        zIndex: 10,
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        display: "inline-block",
    };

    // font-varianter → jämför nu mot "enkla nycklar"
    if (selectedFont === "Griffon") {
        style.fontWeight = 200; style.fontStyle = "normal";
    }
    if (selectedFont === "Rooney") {
        style.fontWeight = 700; style.fontStyle = "italic";
    }
    if (selectedFont === "Ethnocentric") {
        style.fontWeight = 400; style.fontStyle = "normal";
    }
    if (selectedFont === "Tachyon") {
        style.fontWeight = "normal"; style.fontStyle = "normal";
    }
    if (selectedFont === "Sui Generis") {
        style.fontWeight = "normal"; style.fontStyle = "normal";
    }
    if (selectedFont === "Aviano Serif") {
        style.fontWeight = 900; style.fontStyle = "normal";
    }

    // ---- CHROME ----
    if (selectedColor === "chrome") {
        style.backgroundImage = [
            "linear-gradient(90deg, #b7bcc2 0%, #f7f8f9 9%, #a3a9b0 18%, #ffffff 27%, #9aa1a9 38%, #e9ecef 52%, #8a9098 66%, #dfe2e6 82%, #b7bcc2 100%)",
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 45%)",
        ].join(",");
        style.backgroundSize = "100% 100%, 200% 200%";
        style.backgroundPosition = "center, center";
        style.backgroundRepeat = "no-repeat";
        (style as any).WebkitTextStroke = "1.2px rgba(255,255,255,0.65)";
        style.textShadow = [
            "0 1px 0 rgba(0,0,0,0.45)",
            "0 -1px 0 rgba(255,255,255,0.35)",
        ].join(", ");
        (style as any).WebkitFontSmoothing = "antialiased";
        (style as any).MozOsxFontSmoothing = "grayscale";
        (style as any).textRendering = "geometricPrecision";
    }
    // ---- STAINLESS ----
    else if (selectedColor === "stainless") {
        style.backgroundImage =
            "linear-gradient(90deg, #c7ccd1 0%, #eef0f2 18%, #bdc3c9 36%, #ffffff 54%, #aab1b8 72%, #e4e7ea 100%)";
        (style as any).WebkitTextStroke = "0.9px rgba(255,255,255,0.6)";
        style.textShadow = "0 1px 0 rgba(0,0,0,0.35)";
    }
    // ---- Solida färger ----
    else if (["black", "red", "blue", "green"].includes(selectedColor)) {
        style.color = selectedColor;
        style.WebkitTextFillColor = selectedColor;
        style.WebkitBackgroundClip = "unset";
        style.backgroundClip = "unset";
        delete (style as any).WebkitTextStroke;
    } else {
        style.color = selectedColor;
        style.WebkitTextFillColor = selectedColor;
        style.WebkitBackgroundClip = "unset";
        style.backgroundClip = "unset";
        delete (style as any).WebkitTextStroke;
    }

    // ---- GLOW ----
    if (selectedGlow !== "none") {
        const glowColor: Record<string, string> = {
            Röd: "rgba(255, 0,   0, 0.9)",
            Blå: "rgba(  0, 84,255, 0.9)",
            Grön: "rgba(  0,255,110,0.9)",
            Lila: "rgba(160, 80,255,0.9)",
            Vit: "rgba(255,255,255,0.95)",
            Isblå: "rgba(120, 190, 255, 0.95)",   // ljus isblå
            Varmvit: "rgba(255, 244, 214, 0.95)", // varmvit med lite gul/orange ton
        };
        const c = glowColor[selectedGlow];
        if (c) {
            const glow = [
                `0 0 6px ${c}`,
                `0 0 12px ${c}`,
                `0 0 20px ${c}`,
                `0 0 32px ${c}`,
            ].join(", ");
            style.textShadow = [style.textShadow || "", glow].filter(Boolean).join(", ");
        }
    }

    delete (style as any).filter;
    return style;
};

export default getTextStyle;
