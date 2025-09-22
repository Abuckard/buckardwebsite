
// import React, { useRef, useState } from "react";
// import PrincessTest from "../Images/PrincessTest.png";
// import Akterspegel from "../Images/Akterspegel.jpg";
// import Akter from "../Images/akter.jpg";
// import GPT from "../Images/GPT.png";

// type Pos = { top: number; left: number };

// type BackgroundImageProps = {
//     bgScale: number;
//     text: string;
//     textStyle: React.CSSProperties;
//     secondaryText?: string;
//     secondaryTextStyle?: React.CSSProperties;

//     // NYTT: callbacks som uppdaterar position i parent (FontCreate)
//     onPrimaryPositionChange?: (pos: Pos) => void;
//     onSecondaryPositionChange?: (pos: Pos) => void;
// };

// const BackgroundImage: React.FC<BackgroundImageProps> = ({
//     bgScale,
//     text,
//     textStyle,
//     secondaryText,
//     secondaryTextStyle,
//     onPrimaryPositionChange,
//     onSecondaryPositionChange,
// }) => {
//     const containerRef = useRef<HTMLDivElement | null>(null);

//     // Bildval (oförändrat)
//     const [selectedImage, setSelectedImage] = useState("PrincessTest");
//     const [uploadedImage, setUploadedImage] = useState<string | null>(null);

//     const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files && event.target.files[0]) {
//             setUploadedImage(URL.createObjectURL(event.target.files[0]));
//             setSelectedImage("uploaded");
//         }
//     };

//     const currentSrc =
//         selectedImage === "uploaded" && uploadedImage
//             ? uploadedImage
//             : selectedImage === "PrincessTest"
//                 ? PrincessTest
//                 : selectedImage === "Akterspegel"
//                     ? Akterspegel
//                     : selectedImage === "Akter"
//                         ? Akter
//                         : GPT;

//     // --- Drag för texter (inte för bakgrunden) ---
//     type DragTarget = "primary" | "secondary" | null;
//     const [dragging, setDragging] = useState<DragTarget>(null);

//     const onPointerDownText = (
//         e: React.PointerEvent,
//         target: DragTarget
//     ) => {
//         // låt bara drag starta om vi faktiskt klickar på texten
//         (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
//         setDragging(target);
//     };

//     const onPointerMoveContainer = (e: React.PointerEvent<HTMLDivElement>) => {
//         if (!dragging) return;
//         if (!containerRef.current) return;

//         const rect = containerRef.current.getBoundingClientRect();
//         const x = e.clientX - rect.left; // px från vänster
//         const y = e.clientY - rect.top;  // px från toppen

//         // -> procent (0..100)
//         const left = Math.max(0, Math.min(100, (x / rect.width) * 100));
//         const top = Math.max(0, Math.min(100, (y / rect.height) * 100));

//         if (dragging === "primary" && onPrimaryPositionChange) {
//             onPrimaryPositionChange({ top, left });
//         } else if (dragging === "secondary" && onSecondaryPositionChange) {
//             onSecondaryPositionChange({ top, left });
//         }
//     };

//     const onPointerUpContainer = (e: React.PointerEvent<HTMLDivElement>) => {
//         setDragging(null);
//     };

//     return (
//         <div className="flex flex-col items-center w-full mx-auto">
//             <div
//                 ref={containerRef}
//                 className="relative border border-gray-300 rounded-lg overflow-hidden select-none"
//                 onPointerMove={onPointerMoveContainer}
//                 onPointerUp={onPointerUpContainer}
//                 onPointerCancel={onPointerUpContainer}
//                 style={{
//                     width: "100%",
//                     height: "auto",
//                     maxWidth: "1200px",
//                     aspectRatio: "16/9",
//                     touchAction: "none", // bättre drag på touch
//                     cursor: dragging ? "grabbing" : "default",
//                 }}
//             >
//                 {/* Bakgrundsbild – inte längre draggable */}
//                 <img
//                     src={currentSrc}
//                     alt="Background"
//                     className="absolute w-full h-full object-cover"
//                     style={{
//                         transform: `scale(${bgScale})`,
//                         transformOrigin: "center",
//                     }}
//                     draggable={false}
//                 />

//                 {/* Primär text – klick/drag direkt på texten */}
//                 {text && (
//                     <span
//                         style={{
//                             ...textStyle,
//                             position: "absolute",
//                             // viktigt: låt pointer events vara aktiva så vi kan dra
//                             pointerEvents: "auto",
//                             userSelect: "none",
//                             touchAction: "none",
//                             // valfri visuell feedback under drag:
//                             opacity: dragging === "primary" ? 0.9 : 1,
//                         }}
//                         onPointerDown={(e) => onPointerDownText(e, "primary")}
//                     >
//                         {text || "Skriv in båtens namn"}
//                     </span>
//                 )}

//                 {/* Extra text */}
//                 {secondaryText && secondaryTextStyle && (
//                     <span
//                         style={{
//                             ...secondaryTextStyle,
//                             position: "absolute",
//                             pointerEvents: "auto",
//                             userSelect: "none",
//                             touchAction: "none",
//                             opacity: dragging === "secondary" ? 0.9 : 1,
//                         }}
//                         onPointerDown={(e) => onPointerDownText(e, "secondary")}
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





// import React, { useRef, useState } from "react";
// import PrincessTest from "../Images/PrincessTest.png";
// import Akterspegel from "../Images/Akterspegel.jpg";
// import Akter from "../Images/akter.jpg";
// import GPT from "../Images/GPT.png";

// type Pos = { top: number; left: number };

// type BackgroundImageProps = {
//     bgScale: number;
//     text: string;
//     textStyle: React.CSSProperties;
//     secondaryText?: string;
//     secondaryTextStyle?: React.CSSProperties;

//     onPrimaryPositionChange?: (pos: Pos) => void;
//     onSecondaryPositionChange?: (pos: Pos) => void;
// };

// const BackgroundImage: React.FC<BackgroundImageProps> = ({
//     bgScale,
//     text,
//     textStyle,
//     secondaryText,
//     secondaryTextStyle,
//     onPrimaryPositionChange,
//     onSecondaryPositionChange,
// }) => {
//     const containerRef = useRef<HTMLDivElement | null>(null);

//     const [selectedImage, setSelectedImage] = useState("PrincessTest");
//     const [uploadedImage, setUploadedImage] = useState<string | null>(null);
//     const [fullscreen, setFullscreen] = useState(false);

//     const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files && event.target.files[0]) {
//             setUploadedImage(URL.createObjectURL(event.target.files[0]));
//             setSelectedImage("uploaded");
//         }
//     };

//     const currentSrc =
//         selectedImage === "uploaded" && uploadedImage
//             ? uploadedImage
//             : selectedImage === "PrincessTest"
//                 ? PrincessTest
//                 : selectedImage === "Akterspegel"
//                     ? Akterspegel
//                     : selectedImage === "Akter"
//                         ? Akter
//                         : GPT;

//     // Drag för texter
//     type DragTarget = "primary" | "secondary" | null;
//     const [dragging, setDragging] = useState<DragTarget>(null);

//     const onPointerDownText = (e: React.PointerEvent, target: DragTarget) => {
//         (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
//         setDragging(target);
//     };

//     const onPointerMoveContainer = (e: React.PointerEvent<HTMLDivElement>) => {
//         if (!dragging) return;
//         if (!containerRef.current) return;

//         const rect = containerRef.current.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         const left = Math.max(0, Math.min(100, (x / rect.width) * 100));
//         const top = Math.max(0, Math.min(100, (y / rect.height) * 100));

//         if (dragging === "primary" && onPrimaryPositionChange) {
//             onPrimaryPositionChange({ top, left });
//         } else if (dragging === "secondary" && onSecondaryPositionChange) {
//             onSecondaryPositionChange({ top, left });
//         }
//     };

//     const onPointerUpContainer = () => {
//         setDragging(null);
//     };

//     return (
//         <div className="flex flex-col items-center w-full mx-auto">
//             {/* Container */}
//             <div
//                 ref={containerRef}
//                 className={`relative border border-gray-300 rounded-lg overflow-hidden select-none ${fullscreen ? "fixed inset-0 z-50 bg-black" : ""
//                     }`}
//                 onPointerMove={onPointerMoveContainer}
//                 onPointerUp={onPointerUpContainer}
//                 onPointerCancel={onPointerUpContainer}
//                 style={{
//                     width: fullscreen ? "100vw" : "100%",
//                     height: fullscreen ? "100vh" : "auto",
//                     maxWidth: fullscreen ? "100vw" : "1200px",
//                     maxHeight: fullscreen ? "100vh" : "none",
//                     aspectRatio: fullscreen ? "auto" : "16/9", // bara när ej fullscreen
//                     touchAction: "none",
//                     cursor: dragging ? "grabbing" : "default",
//                 }}
//             >


//                 {/* Bakgrundsbild */}
//                 <img
//                     src={currentSrc}
//                     alt="Background"
//                     className="absolute w-full h-full object-cover"
//                     style={{
//                         transform: `scale(${bgScale})`,
//                         transformOrigin: "center",
//                     }}
//                     draggable={false}
//                 />

//                 {/* Primär text */}
//                 {text && (
//                     <span
//                         style={{
//                             ...textStyle,
//                             position: "absolute",
//                             pointerEvents: "auto",
//                             userSelect: "none",
//                             touchAction: "none",
//                             opacity: dragging === "primary" ? 0.9 : 1,
//                         }}
//                         onPointerDown={(e) => onPointerDownText(e, "primary")}
//                     >
//                         {text || "Skriv in båtens namn"}
//                     </span>
//                 )}

//                 {/* Extra text */}
//                 {secondaryText && secondaryTextStyle && (
//                     <span
//                         style={{
//                             ...secondaryTextStyle,
//                             position: "absolute",
//                             pointerEvents: "auto",
//                             userSelect: "none",
//                             touchAction: "none",
//                             opacity: dragging === "secondary" ? 0.9 : 1,
//                         }}
//                         onPointerDown={(e) => onPointerDownText(e, "secondary")}
//                     >
//                         {secondaryText}
//                     </span>
//                 )}

//                 {/* Fullskärm-knapp */}
//                 <button
//                     onClick={() => setFullscreen((v) => !v)}
//                     className="absolute top-2 right-2 bg-black/60 text-white px-3 py-1 rounded hover:bg-black/80 z-50"
//                 >
//                     {fullscreen ? "Stäng" : "Fullskärm"}
//                 </button>
//             </div>

//             {!fullscreen && (
//                 <>
//                     {/* Bildväljare */}
//                     <select
//                         className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs mt-5"
//                         value={selectedImage}
//                         onChange={(e) => setSelectedImage(e.target.value)}
//                     >
//                         <option value="PrincessTest" className="text-black">
//                             PrincessTest
//                         </option>
//                         <option value="Akterspegel" className="text-black">
//                             Akterspegel
//                         </option>
//                         <option value="Akter" className="text-black">
//                             Akter
//                         </option>
//                         <option value="uploaded" className="text-black">
//                             Uppladdad bild
//                         </option>
//                     </select>

//                     {/* Uppladdning */}
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageUpload}
//                         className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs"
//                     />
//                 </>
//             )}
//         </div>
//     );
// };

// export default BackgroundImage;



import React, { useEffect, useRef, useState } from "react";
import PrincessV50 from "../Images/Princess V50.png";
import Akterspegel from "../Images/Akterspegel.jpg";
import Akter from "../Images/akter.jpg";
import GPT from "../Images/GPT.png";
import Beneteau from "../Images/Beneteau.jpg";
import Cranchi from "../Images/Cranchi.jpg";
import Fairline from "../Images/Fairline.jpg";
import Phantom46 from "../Images/Phantom46.jpg";
import Prestige from "../Images/Prestige.jpg";
import Targa40 from "../Images/Targa40.jpg";
import Targa43 from "../Images/Targa43.jpg";
import Targa34 from "../Images/Targa34.jpg";
import GPTNatt from "../Images/GPTNatt.png";

type Pos = { top: number; left: number };

type BackgroundImageProps = {
    bgScale: number;
    text: string;
    textStyle: React.CSSProperties;
    secondaryText?: string;
    secondaryTextStyle?: React.CSSProperties;
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
    const stageRef = useRef<HTMLDivElement | null>(null);

    // Bildval
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
                ? PrincessV50
                : selectedImage === "Akterspegel"
                    ? Akterspegel
                    : selectedImage === "Akter"
                        ? Akter
                        : selectedImage === "GPT"
                            ? GPT
                            : selectedImage === "GPTNatt"
                                ? GPTNatt
                                : selectedImage === "Beneteau"
                                    ? Beneteau
                                    : selectedImage === "Cranchi"
                                        ? Cranchi
                                        : selectedImage === "Fairline"
                                            ? Fairline
                                            : selectedImage === "Phantom46"
                                                ? Phantom46
                                                : selectedImage === "Prestige"
                                                    ? Prestige
                                                    : selectedImage === "Targa40"
                                                        ? Targa40
                                                        : selectedImage === "Targa43"
                                                            ? Targa43
                                                            : selectedImage === "Targa34"
                                                                ? Targa34
                                                                : GPT;

    // Drag för texter
    type DragTarget = "primary" | "secondary" | null;
    const [dragging, setDragging] = useState<DragTarget>(null);

    const onPointerDownText = (e: React.PointerEvent, target: DragTarget) => {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setDragging(target);
    };

    const onPointerMoveStage = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!dragging || !stageRef.current) return;
        const rect = stageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const left = Math.max(0, Math.min(100, (x / rect.width) * 100));
        const top = Math.max(0, Math.min(100, (y / rect.height) * 100));

        if (dragging === "primary" && onPrimaryPositionChange) onPrimaryPositionChange({ top, left });
        if (dragging === "secondary" && onSecondaryPositionChange) onSecondaryPositionChange({ top, left });
    };
    const onPointerUpStage = () => setDragging(null);

    // Modal
    const [open, setOpen] = useState(false);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const openFilePicker = () => {
        fileInputRef.current?.click();
    };


    // Lås scroll när modalen är öppen
    useEffect(() => {
        const prev = document.body.style.overflow;
        if (open) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    // Återanvändbar “stage” (bild + texter)
    const Stage = ({ compact }: { compact: boolean }) => (
        <div
            ref={stageRef}
            className="relative overflow-hidden select-none rounded-lg"
            onPointerMove={onPointerMoveStage}
            onPointerUp={onPointerUpStage}
            onPointerCancel={onPointerUpStage}
            style={{
                width: "100%",
                // 16:9 stage – i modal begränsas storlek av omgivande container
                aspectRatio: "16 / 9",
                touchAction: "none",
                cursor: dragging ? "grabbing" : "default",
                border: compact ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.15)",
            }}
        >
            <img
                src={currentSrc}
                alt="Background"
                className="absolute w-full h-full object-cover"
                style={{ transform: `scale(${bgScale})`, transformOrigin: "center" }}
                draggable={false}
            />

            {text && (
                <span
                    style={{
                        ...textStyle,
                        position: "absolute",
                        pointerEvents: "auto",
                        userSelect: "none",
                        touchAction: "none",
                        opacity: dragging === "primary" ? 0.9 : 1,
                    }}
                    onPointerDown={(e) => onPointerDownText(e, "primary")}
                >
                    {text || "Skriv in båtens namn"}
                </span>
            )}

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
    );

    return (
        <div className="flex flex-col items-center w-full mx-auto">
            {/* Normal vy */}
            <Stage compact />

            {/* Öppna modal-knapp */}
            <button
                onClick={() => setOpen(true)}
                className="mt-4 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-colors"
            >
                Förhandsgranska i större vy
            </button>


            {/* Bildväljare och uppladdning (syns alltid utanför modalen) */}
            <select
                className="mb-4 p-2 border  bg-blue-600 hover:bg-blue-700 rounded text-white w-full max-w-xs mt-5"
                value={selectedImage}
                onChange={(e) => setSelectedImage(e.target.value)}
            >
                <option value="GPT" className="text-black">Akterspegel</option>
                <option value="GPTNatt" className="text-black">Akterspegel natt</option>
                <option value="PrincessTest" className="text-black">Princess V50</option>
                <option value="Akter" className="text-black">Princess</option>
                <option value="Phantom46" className="text-black">Phantom</option>
                <option value="Cranchi" className="text-black">Cranchi</option>
                <option value="Prestige" className="text-black">Prestige</option>
                <option value="Targa34" className="text-black">Fairline Targa 34</option>
                <option value="Targa40" className="text-black">Fairline Targa 40</option>
                <option value="Targa43" className="text-black">Fairline Targa 43</option>
                <option value="Fairline" className="text-black">Fairline Targa 50</option>
                <option value="Beneteau" className="text-black">Beneteau</option>



                <option value="uploaded" className="text-black">Uppladdad bild</option>
            </select>

            {/* <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-4 p-2 border border-white rounded bg-transparent text-white w-full max-w-xs"
            /> */}

            {/* Egen knapp för uppladdning */}
            <div className="w-full max-w-xs mb-4">
                <button
                    type="button"
                    onClick={openFilePicker}
                    className="w-full p-2 border bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                    Ladda upp egen bild
                </button>

                {/* Dölj den riktiga file-inputen men behåll samma onChange-hanterare */}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                />

                {/* (Valfritt) Visa filnamn när något valts */}
                {uploadedImage && (
                    <p className="mt-2 text-sm text-white/80 truncate">
                        Bild vald ✔
                    </p>
                )}
            </div>

            {/* Modal overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setOpen(false)} // klick på backdrop stänger
                >
                    {/* Stoppa klick-bubbling så att klick i kortet inte stänger */}
                    <div
                        className="relative w-[95vw] max-w-[1100px] max-h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Stäng-knapp */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute -top-2 -right-2 z-10 rounded-full bg-white/90 text-black px-3 py-1 text-sm shadow"
                        >
                            Stäng
                        </button>

                        {/* Själva scenen – fyller bredden, låter höjd styras av aspect ratio */}
                        <Stage compact={false} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BackgroundImage;
