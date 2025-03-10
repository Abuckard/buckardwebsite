import React from "react";

const getTextStyle = (selectedFont, fontSize, textPosition, selectedColor, selectedGlow) => {
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

export default getTextStyle;