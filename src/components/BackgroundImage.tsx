
// import React, { useState } from "react";
// import PrincessTest from "../Images/PrincessTest.png";
// import Akterspegel from "../Images/Akterspegel.jpg";
// import Akter from "../Images/akter.jpg";

// const BackgroundImage = ({ bgScale, text, textStyle }) => {
//     const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
//     const [dragging, setDragging] = useState(false);
//     const [startPos, setStartPos] = useState({ x: 0, y: 0 });
//     const [selectedImage, setSelectedImage] = useState("PrincessTest");
//     const [uploadedImage, setUploadedImage] = useState(null);

//     const handleMouseDown = (e) => {
//         setDragging(true);
//         setStartPos({ x: e.clientX - bgPosition.x, y: e.clientY - bgPosition.y });
//     };

//     const handleMouseMove = (e) => {
//         if (!dragging) return;
//         setBgPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
//     };

//     const handleMouseUp = () => {
//         setDragging(false);
//     };

//     const handleImageUpload = (event) => {
//         if (event.target.files && event.target.files[0]) {
//             setUploadedImage(URL.createObjectURL(event.target.files[0]));
//             setSelectedImage("uploaded");
//         }
//     };

//     return (
//         <div className="flex flex-col items-center w-full mx-auto">
//             <div
//                 className="relative border border-gray-300 rounded-lg overflow-hidden"
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseUp}
//                 style={{
//                     width: "100%",
//                     height: "auto",
//                     maxWidth: "1200px", // Stor på stora skärmar!
//                     aspectRatio: "16/9", // Gör att den håller proportionerna
//                 }}
//             >
//                 <img
//                     src={
//                         selectedImage === "uploaded" && uploadedImage
//                             ? uploadedImage
//                             : selectedImage === "PrincessTest"
//                                 ? PrincessTest
//                                 : Akterspegel
//                     }
//                     alt="Background"
//                     className="absolute w-full h-full object-cover"
//                     style={{
//                         transform: `scale(${bgScale}) translate(${bgPosition.x}px, ${bgPosition.y}px)`,
//                         transformOrigin: "center",
//                     }}
//                 />
//                 <div
//                     style={textStyle}
//                     className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
//                 >
//                     {text || "Skriv in båtens namn"}
//                 </div>
//             </div>

//             {/*  Dropdown för att byta bild */}
//             <select
//                 className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs mt-5"
//                 value={selectedImage}
//                 onChange={(e) => setSelectedImage(e.target.value)}
//             >
//                 <option value="PrincessTest" className="text-black">PrincessTest</option>
//                 <option value="Akterspegel" className="text-black">Akterspegel</option>
//                 <option value="uploaded" className="text-black">Uppladdad bild</option>
//             </select>

//             {/*  Knapp för att ladda upp bild */}
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs"
//             />
//         </div>
//     );
// };

// export default BackgroundImage;



// import React, { useState } from "react";
// import PrincessTest from "../Images/PrincessTest.png";
// import Akterspegel from "../Images/Akterspegel.jpg";
// import Akter from "../Images/akter.jpg";
// import GPT from "../Images/GPT.png";

// const BackgroundImage = ({ bgScale, text, textStyle }) => {
//     const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
//     const [dragging, setDragging] = useState(false);
//     const [startPos, setStartPos] = useState({ x: 0, y: 0 });
//     const [selectedImage, setSelectedImage] = useState("PrincessTest");
//     const [uploadedImage, setUploadedImage] = useState(null);

//     const handleMouseDown = (e) => {
//         setDragging(true);
//         setStartPos({ x: e.clientX - bgPosition.x, y: e.clientY - bgPosition.y });
//     };

//     const handleMouseMove = (e) => {
//         if (!dragging) return;
//         setBgPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
//     };

//     const handleMouseUp = () => {
//         setDragging(false);
//     };

//     const handleImageUpload = (event) => {
//         if (event.target.files && event.target.files[0]) {
//             setUploadedImage(URL.createObjectURL(event.target.files[0]));
//             setSelectedImage("uploaded");
//         }
//     };

//     return (
//         <div className="flex flex-col items-center w-full mx-auto">
//             <div
//                 className="relative border border-gray-300 rounded-lg overflow-hidden"
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseUp}
//                 style={{
//                     width: "100%",
//                     height: "auto",
//                     maxWidth: "1200px", // Stor på stora skärmar!
//                     aspectRatio: "16/9", // Gör att den håller proportionerna
//                 }}
//             >
//                 <img
//                     src={
//                         selectedImage === "uploaded" && uploadedImage
//                             ? uploadedImage
//                             : selectedImage === "PrincessTest"
//                                 ? GPT
//                                 : Akter
//                     }
//                     alt="Background"
//                     className="absolute w-full h-full object-cover"
//                     style={{
//                         transform: `scale(${bgScale}) translate(${bgPosition.x}px, ${bgPosition.y}px)`,
//                         transformOrigin: "center",
//                     }}
//                 />
//                 <div
//                     style={textStyle}
//                     className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
//                 >
//                     {text || "Skriv in båtens namn"}
//                 </div>
//             </div>

//             {/*  Dropdown för att byta bild */}
//             <select
//                 className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs mt-5"
//                 value={selectedImage}
//                 onChange={(e) => setSelectedImage(e.target.value)}
//             >
//                 <option value="PrincessTest" className="text-black">PrincessTest</option>
//                 <option value="Akterspegel" className="text-black">Akterspegel</option>
//                 <option value="uploaded" className="text-black">Uppladdad bild</option>
//             </select>

//             {/*  Knapp för att ladda upp bild */}
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs"
//             />
//         </div>
//     );
// };

// export default BackgroundImage;





// import React, { useState } from "react";
// import PrincessTest from "../Images/PrincessTest.png";
// import Akterspegel from "../Images/Akterspegel.jpg";
// import Akter from "../Images/akter.jpg";
// import GPT from "../Images/GPT.png"; // om du vill behålla som alternativ

// type BackgroundImageProps = {
//     bgScale: number;
//     text: string;
//     textStyle: React.CSSProperties;
//     secondaryText?: string;             // NYTT (valfritt)
//     secondaryTextStyle?: React.CSSProperties; // NYTT (valfritt)
// };

// const BackgroundImage: React.FC<BackgroundImageProps> = ({
//     bgScale,
//     text,
//     textStyle,
//     secondaryText,
//     secondaryTextStyle,
// }) => {
//     const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
//     const [dragging, setDragging] = useState(false);
//     const [startPos, setStartPos] = useState({ x: 0, y: 0 });
//     const [selectedImage, setSelectedImage] = useState("PrincessTest");
//     const [uploadedImage, setUploadedImage] = useState<string | null>(null);

//     const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//         setDragging(true);
//         setStartPos({ x: e.clientX - bgPosition.x, y: e.clientY - bgPosition.y });
//     };

//     const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//         if (!dragging) return;
//         setBgPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
//     };

//     const handleMouseUp = () => setDragging(false);

//     const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files && event.target.files[0]) {
//             setUploadedImage(URL.createObjectURL(event.target.files[0]));
//             setSelectedImage("uploaded");
//         }
//     };

//     // Mappa val till riktig bild
//     const currentSrc =
//         selectedImage === "uploaded" && uploadedImage
//             ? uploadedImage
//             : selectedImage === "PrincessTest"
//                 ? PrincessTest
//                 : selectedImage === "Akterspegel"
//                     ? Akterspegel
//                     : selectedImage === "Akter"
//                         ? Akter
//                         : GPT; // fallback om något strular

//     return (
//         <div className="flex flex-col items-center w-full mx-auto">
//             <div
//                 className="relative border border-gray-300 rounded-lg overflow-hidden"
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseUp}
//                 style={{
//                     width: "100%",
//                     height: "auto",
//                     maxWidth: "1200px",
//                     aspectRatio: "16/9",
//                     cursor: dragging ? "grabbing" : "grab",
//                     userSelect: "none",
//                 }}
//             >
//                 {/* Bakgrundsbild */}
//                 <img
//                     src={currentSrc}
//                     alt="Background"
//                     className="absolute w-full h-full object-cover"
//                     style={{
//                         transform: `scale(${bgScale}) translate(${bgPosition.x}px, ${bgPosition.y}px)`,
//                         transformOrigin: "center",
//                     }}
//                     draggable={false}
//                 />

//                 {/* Primär text */}
//                 {text && (
//                     <span
//                         style={{
//                             ...textStyle,
//                             position: "absolute", // säkerställ absolut position
//                             pointerEvents: "none", // så att drag fortfarande funkar
//                         }}
//                     >
//                         {text || "Skriv in båtens namn"}
//                     </span>
//                 )}

//                 {/* Extra text (valfri) */}
//                 {secondaryText && secondaryTextStyle && (
//                     <span
//                         style={{
//                             ...secondaryTextStyle,
//                             position: "absolute",
//                             pointerEvents: "none",
//                         }}
//                     >
//                         {secondaryText}
//                     </span>
//                 )}
//             </div>

//             {/* Bildväljare */}
//             <select
//                 className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs mt-5"
//                 value={selectedImage}
//                 onChange={(e) => setSelectedImage(e.target.value)}
//             >
//                 <option value="PrincessTest" className="text-black">PrincessTest</option>
//                 <option value="Akterspegel" className="text-black">Akterspegel</option>
//                 <option value="Akter" className="text-black">Akter</option>
//                 <option value="uploaded" className="text-black">Uppladdad bild</option>
//             </select>

//             {/* Uppladdning */}
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs"
//             />
//         </div>
//     );
// };

// export default BackgroundImage;





import React, { useRef, useState } from "react";
import PrincessTest from "../Images/PrincessTest.png";
import Akterspegel from "../Images/Akterspegel.jpg";
import Akter from "../Images/akter.jpg";
import GPT from "../Images/GPT.png";

type Pos = { top: number; left: number };

type BackgroundImageProps = {
    bgScale: number;
    text: string;
    textStyle: React.CSSProperties;
    secondaryText?: string;
    secondaryTextStyle?: React.CSSProperties;

    // NYTT: callbacks som uppdaterar position i parent (FontCreate)
    onPrimaryPositionChange?: (pos: Pos) => void;
    onSecondaryPositionChange?: (pos: Pos) => void;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
    bgScale,
    text,
    textStyle,
    secondaryText,
    secondaryTextStyle,
    onPrimaryPositionChange,
    onSecondaryPositionChange,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Bildval (oförändrat)
    const [selectedImage, setSelectedImage] = useState("PrincessTest");
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setUploadedImage(URL.createObjectURL(event.target.files[0]));
            setSelectedImage("uploaded");
        }
    };

    const currentSrc =
        selectedImage === "uploaded" && uploadedImage
            ? uploadedImage
            : selectedImage === "PrincessTest"
                ? PrincessTest
                : selectedImage === "Akterspegel"
                    ? Akterspegel
                    : selectedImage === "Akter"
                        ? Akter
                        : GPT;

    // --- Drag för texter (inte för bakgrunden) ---
    type DragTarget = "primary" | "secondary" | null;
    const [dragging, setDragging] = useState<DragTarget>(null);

    const onPointerDownText = (
        e: React.PointerEvent,
        target: DragTarget
    ) => {
        // låt bara drag starta om vi faktiskt klickar på texten
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setDragging(target);
    };

    const onPointerMoveContainer = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!dragging) return;
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // px från vänster
        const y = e.clientY - rect.top;  // px från toppen

        // -> procent (0..100)
        const left = Math.max(0, Math.min(100, (x / rect.width) * 100));
        const top = Math.max(0, Math.min(100, (y / rect.height) * 100));

        if (dragging === "primary" && onPrimaryPositionChange) {
            onPrimaryPositionChange({ top, left });
        } else if (dragging === "secondary" && onSecondaryPositionChange) {
            onSecondaryPositionChange({ top, left });
        }
    };

    const onPointerUpContainer = (e: React.PointerEvent<HTMLDivElement>) => {
        setDragging(null);
    };

    return (
        <div className="flex flex-col items-center w-full mx-auto">
            <div
                ref={containerRef}
                className="relative border border-gray-300 rounded-lg overflow-hidden select-none"
                onPointerMove={onPointerMoveContainer}
                onPointerUp={onPointerUpContainer}
                onPointerCancel={onPointerUpContainer}
                style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "1200px",
                    aspectRatio: "16/9",
                    touchAction: "none", // bättre drag på touch
                    cursor: dragging ? "grabbing" : "default",
                }}
            >
                {/* Bakgrundsbild – inte längre draggable */}
                <img
                    src={currentSrc}
                    alt="Background"
                    className="absolute w-full h-full object-cover"
                    style={{
                        transform: `scale(${bgScale})`,
                        transformOrigin: "center",
                    }}
                    draggable={false}
                />

                {/* Primär text – klick/drag direkt på texten */}
                {text && (
                    <span
                        style={{
                            ...textStyle,
                            position: "absolute",
                            // viktigt: låt pointer events vara aktiva så vi kan dra
                            pointerEvents: "auto",
                            userSelect: "none",
                            touchAction: "none",
                            // valfri visuell feedback under drag:
                            opacity: dragging === "primary" ? 0.9 : 1,
                        }}
                        onPointerDown={(e) => onPointerDownText(e, "primary")}
                    >
                        {text || "Skriv in båtens namn"}
                    </span>
                )}

                {/* Extra text */}
                {secondaryText && secondaryTextStyle && (
                    <span
                        style={{
                            ...secondaryTextStyle,
                            position: "absolute",
                            pointerEvents: "auto",
                            userSelect: "none",
                            touchAction: "none",
                            opacity: dragging === "secondary" ? 0.9 : 1,
                        }}
                        onPointerDown={(e) => onPointerDownText(e, "secondary")}
                    >
                        {secondaryText}
                    </span>
                )}
            </div>

            {/* Bildväljare */}
            <select
                className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs mt-5"
                value={selectedImage}
                onChange={(e) => setSelectedImage(e.target.value)}
            >
                <option value="PrincessTest" className="text-black">PrincessTest</option>
                <option value="Akterspegel" className="text-black">Akterspegel</option>
                <option value="Akter" className="text-black">Akter</option>
                <option value="uploaded" className="text-black">Uppladdad bild</option>
            </select>

            {/* Uppladdning */}
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
