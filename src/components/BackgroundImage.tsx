
import React, { useState } from "react";
import PrincessTest from "../Images/PrincessTest.png";
import Akterspegel from "../Images/Akterspegel.jpg";

const BackgroundImage = ({ bgScale, text, textStyle }) => {
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [selectedImage, setSelectedImage] = useState("PrincessTest");
    const [uploadedImage, setUploadedImage] = useState(null);

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

    const handleImageUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            setUploadedImage(URL.createObjectURL(event.target.files[0]));
            setSelectedImage("uploaded");
        }
    };

    return (
        <div className="flex flex-col items-center w-full mx-auto">
            <div
                className="relative border border-gray-300 rounded-lg overflow-hidden"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "1200px", // Stor på stora skärmar!
                    aspectRatio: "16/9", // Gör att den håller proportionerna
                }}
            >
                <img
                    src={
                        selectedImage === "uploaded" && uploadedImage
                            ? uploadedImage
                            : selectedImage === "PrincessTest"
                                ? PrincessTest
                                : Akterspegel
                    }
                    alt="Background"
                    className="absolute w-full h-full object-cover"
                    style={{
                        transform: `scale(${bgScale}) translate(${bgPosition.x}px, ${bgPosition.y}px)`,
                        transformOrigin: "center",
                    }}
                />
                <div
                    style={textStyle}
                    className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
                >
                    {text || "Skriv in båtens namn"}
                </div>
            </div>

            {/*  Dropdown för att byta bild */}
            <select
                className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs mt-5"
                value={selectedImage}
                onChange={(e) => setSelectedImage(e.target.value)}
            >
                <option value="PrincessTest" className="text-black">PrincessTest</option>
                <option value="Akterspegel" className="text-black">Akterspegel</option>
                <option value="uploaded" className="text-black">Uppladdad bild</option>
            </select>

            {/*  Knapp för att ladda upp bild */}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs"
            />
        </div>
    );
};

export default BackgroundImage;
