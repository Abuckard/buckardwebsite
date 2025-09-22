// import React, { useState, useEffect } from "react";

// import AmazingDaysNatt from "../Images/båtnamn/Amazing DaysNatt.jpg";
// import Elvira from "../Images/båtnamn/Elvira.jpg";
// import Flinga from "../Images/båtnamn/Flinga.jpg";
// import Goodtimes from "../Images/båtnamn/Goodtimes.jpg";
// import GreatEscape from "../Images/båtnamn/GreatEscape.jpg";
// import JOY from "../Images/båtnamn/JOY.jpg";
// import MYReward from "../Images/båtnamn/MY-reward-liten.jpg";
// import SilferPearl from "../Images/båtnamn/SilferPearl.jpg";
// import Vendela from "../Images/båtnamn/Vendela-liten.jpg";
// import Chablis from "../Images/båtnamn/Chablis.jpg";
// import JOSS from "../Images/båtnamn/JOSS.jpg";
// import Mio from "../Images/båtnamn/Mio.jpg";
// import Molly from "../Images/båtnamn/Molly.jpg";
// import MollyNatt from "../Images/båtnamn/MollyNatt.jpg";
// import PrincessLogga from "../Images/båtnamn/PrincessLogga.jpg";
// import Saga from "../Images/båtnamn/Saga.jpg";
// import Xotica from "../Images/båtnamn/Xotica.jpg";
// import XoticaNatt from "../Images/båtnamn/XoticaNatt.jpg";

// // const images = [
// //     AmazingDays, Goodtimes, GreatEscape, MYReward, SilferPearl, Vendela, Elvira, Flinga, JOY, Chablis, JOSS, Mio, Molly, MollyNatt, PrincessLogga, Saga, Xotica, XoticaNatt
// // ];

// // Byt ut din images-lista till en lista med objekt
// const images = [

//     { src: AmazingDaysNatt, caption: "Mr Eaves m isblå belysning" },
//     { src: Goodtimes, caption: "Goodtimes redo för sommarens äventyr" },
//     { src: GreatEscape, caption: "Great Escape vid bryggan" },
//     { src: MYReward, caption: "Svart Acryl med kallvit belysning, extra kontur " },
//     { src: SilferPearl, caption: "SilferPearl på vattnet" },
//     { src: Vendela, caption: "Vendela – klassisk elegans" },
//     { src: Elvira, caption: "Elvira i hamnen" },
//     { src: Flinga, caption: "Flinga – stilfullt båtnamn" },
//     { src: JOY, caption: "Tachyon kallvit" },
//     { src: Chablis, caption: "Griffon light med kallvit belysning" },
//     { src: JOSS, caption: "JOSS – med personlig touch" },
//     { src: Mio, caption: "Aviano Serif, varmvit" },
//     { src: Molly, caption: "Griffon light kallvitt" },
//     { src: MollyNatt, caption: "Griffon light kallvitt" },
//     { src: PrincessLogga, caption: "Princess – original logotyp" },
//     { src: Saga, caption: "Mr Eaves, lite förhöjd , svart acryl kallvit" },
//     { src: Xotica, caption: "Tachyon, kallvitt " },
//     { src: XoticaNatt, caption: "Tachyon, kallvitt " },
// ];

// const Gallery: React.FC = () => {
//     const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

//     // Bläddra till nästa bild
//     const handleNextImage = () => {
//         if (selectedImageIndex !== null) {
//             setSelectedImageIndex((selectedImageIndex + 1) % images.length);
//         }
//     };

//     // Bläddra till föregående bild
//     const handlePrevImage = () => {
//         if (selectedImageIndex !== null) {
//             setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
//         }
//     };

//     //  Stäng modal
//     const closeModal = () => {
//         setSelectedImageIndex(null);
//     };

//     useEffect(() => {
//         const handleKeyDown = (event: KeyboardEvent) => {
//             if (selectedImageIndex !== null) {
//                 if (event.key === "ArrowRight") {
//                     handleNextImage();
//                 } else if (event.key === "ArrowLeft") {
//                     handlePrevImage();
//                 } else if (event.key === "Escape") {
//                     closeModal();
//                 }
//             }
//         };

//         window.addEventListener("keydown", handleKeyDown);
//         return () => window.removeEventListener("keydown", handleKeyDown);
//     }, [selectedImageIndex]);

//     return (
//         <div className="container mx-auto p-4">
//             <h2 className="text-3xl font-bold text-center text-white mb-6">Bildgalleri</h2>


//             {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                 {images.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`Båt ${index + 1}`}
//                         className="w-full h-40 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
//                         onClick={() => setSelectedImageIndex(index)}
//                     />
//                 ))}
//             </div> */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                 {images.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image.src}
//                         alt={image.caption}
//                         className="w-full h-40 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
//                         onClick={() => setSelectedImageIndex(index)}
//                     />
//                 ))}
//             </div>


//             {selectedImageIndex !== null && (
//                 <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
//                     <div className="relative max-w-full max-h-full">
//                         {/*  Stängningsknapp */}
//                         <button
//                             className="absolute top-2 right-2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg hover:bg-gray-600"
//                             onClick={closeModal}
//                         >
//                             ✕
//                         </button>

//                         {/*  Föregående bild */}
//                         <button
//                             className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg hover:bg-gray-600"
//                             onClick={handlePrevImage}
//                         >
//                             ‹
//                         </button>

//                         {/*  Visad bild */}
//                         {/* <img src={images[selectedImageIndex]} alt="Förstorad bild" className="max-w-full max-h-screen rounded-lg" /> */}
//                         <div className="relative w-full max-w-5xl">
//                             <img
//                                 src={images[selectedImageIndex].src}
//                                 alt={images[selectedImageIndex].caption || `Bild ${selectedImageIndex + 1}`}
//                                 className="max-w-full max-h-[80vh] object-contain rounded-lg"
//                             />
//                             {(images[selectedImageIndex].caption) && (
//                                 <div className="absolute bottom-3 left-3 right-3 bg-black/60 text-white text-sm sm:text-base px-3 py-2 rounded">
//                                     {images[selectedImageIndex].caption}
//                                 </div>
//                             )}
//                         </div>


//                         {/*  Nästa bild */}
//                         <button
//                             className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg hover:bg-gray-600"
//                             onClick={handleNextImage}
//                         >
//                             ›
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Gallery;



import React, { useState, useEffect } from "react";

import AmazingDaysNatt from "../Images/båtnamn/Amazing DaysNatt.jpg";
import Elvira from "../Images/båtnamn/Elvira.jpg";
import Flinga from "../Images/båtnamn/Flinga.jpg";
import Goodtimes from "../Images/båtnamn/Goodtimes.jpg";
import GreatEscape from "../Images/båtnamn/GreatEscape.jpg";
import JOY from "../Images/båtnamn/JOY.jpg";
import MYReward from "../Images/båtnamn/MY-reward-liten.jpg";
import SilferPearl from "../Images/båtnamn/SilferPearl.jpg";
import Vendela from "../Images/båtnamn/Vendela-liten.jpg";
import Chablis from "../Images/båtnamn/Chablis.jpg";
import JOSS from "../Images/båtnamn/JOSS.jpg";
import Mio from "../Images/båtnamn/Mio.jpg";
import Molly from "../Images/båtnamn/Molly.jpg";
import MollyNatt from "../Images/båtnamn/MollyNatt.jpg";
import PrincessLogga from "../Images/båtnamn/PrincessLogga.jpg";
import Saga from "../Images/båtnamn/Saga.jpg";
import Xotica from "../Images/båtnamn/Xotica.jpg";
import XoticaNatt from "../Images/båtnamn/XoticaNatt.jpg";
import Båttaxi from "../Images/båtnamn/Båttaxi.jpg";
import Skyltar from "../Images/båtnamn/Skyltar.jpg";

// Bilder + beskrivningar
const images = [
    { src: AmazingDaysNatt, caption: "Mr Eaves m isblå belysning" },
    { src: Goodtimes, caption: "Goodtimes redo för sommarens äventyr" },
    { src: GreatEscape, caption: "Great Escape vid bryggan" },
    { src: MYReward, caption: "Svart Acryl med kallvit belysning, extra kontur" },
    { src: SilferPearl, caption: "SilferPearl på vattnet" },
    { src: Vendela, caption: "Vendela – klassisk elegans" },
    { src: Elvira, caption: "Elvira i hamnen" },
    { src: Flinga, caption: "Flinga – stilfullt båtnamn" },
    { src: JOY, caption: "Tachyon kallvit" },
    { src: Chablis, caption: "Griffon light med kallvit belysning" },
    { src: JOSS, caption: "JOSS – med personlig touch" },
    { src: Mio, caption: "Aviano Serif, varmvit" },
    { src: Molly, caption: "Griffon light kallvitt" },
    { src: MollyNatt, caption: "Griffon light kallvitt" },
    { src: PrincessLogga, caption: "Princess – original logotyp" },
    { src: Saga, caption: "Mr Eaves, lite förhöjd, svart acryl, kallvit" },
    { src: Xotica, caption: "Tachyon, kallvitt" },
    { src: XoticaNatt, caption: "Tachyon, kallvitt" },
    { src: Båttaxi, caption: "Vi gör också skyltar till yrkesbåtar" },
    { src: Skyltar, caption: "Tachyon, kallvitt" },
];

const Gallery: React.FC = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const handleNextImage = () => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    };

    const closeModal = () => setSelectedImageIndex(null);

    // Piltangenter + ESC
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;
            if (e.key === "ArrowRight") handleNextImage();
            if (e.key === "ArrowLeft") handlePrevImage();
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selectedImageIndex]);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Bildgalleri</h2>

            {/* Grid – oförändrad förutom att vi använder image.src */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.caption}
                        className="w-full h-40 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                        onClick={() => setSelectedImageIndex(index)}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 z-50 bg-black/80 p-3 sm:p-4 flex items-center justify-center">
                    <div className="relative w-full max-w-6xl max-h-[92vh] flex items-center justify-center">
                        {/* Stäng */}
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute top-2 right-2 z-30 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg hover:bg-gray-600"
                            aria-label="Stäng"
                            title="Stäng"
                        >
                            ✕
                        </button>

                        {/* Föregående */}
                        <button
                            type="button"
                            onClick={handlePrevImage}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-gray-800 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-xl hover:bg-gray-600"
                            aria-label="Föregående"
                            title="Föregående"
                        >
                            ‹
                        </button>

                        {/* Nästa */}
                        <button
                            type="button"
                            onClick={handleNextImage}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-gray-800 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-xl hover:bg-gray-600"
                            aria-label="Nästa"
                            title="Nästa"
                        >
                            ›
                        </button>

                        {/* Bild + caption overlay */}
                        <div className="relative w-full flex items-center justify-center">
                            <img
                                src={images[selectedImageIndex].src}
                                alt={images[selectedImageIndex].caption || `Bild ${selectedImageIndex + 1}`}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg z-0"
                            />

                            {images[selectedImageIndex].caption && (
                                <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none">
                                    <div className="mx-auto max-w-[90%] sm:max-w-[70%] bg-black/60 text-white text-sm sm:text-base px-3 py-2 rounded text-center">
                                        {images[selectedImageIndex].caption}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
