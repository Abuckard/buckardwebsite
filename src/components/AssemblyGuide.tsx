// import React, { useState } from "react";
// import Mont1 from "../Images/montering/Mont1.jpg";
// import Mont2 from "../Images/montering/Mont2.jpg";
// import Mont3 from "../Images/montering/Mont3.jpg";
// import Mont4 from "../Images/montering/Mont4.jpg";
// import Mont5 from "../Images/montering/Mont5.jpg";
// import Mont6 from "../Images/montering/Mont6.jpg";
// import Mont7 from "../Images/montering/Mont7.jpg";
// import Mont8 from "../Images/montering/Mont8.jpg";
// import Mont9 from "../Images/montering/Mont9.jpg";
// import Mont10 from "../Images/montering/Mont10.jpg";



// const images = [
//     Mont1, Mont2, Mont3, Mont4, Mont5, Mont6, Mont7, Mont8, Mont9, Mont10
// ];

// const AssemblyGuide: React.FC = () => {
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

//     return (
//         <div className="container mx-auto p-4">
//             <h2 className="text-3xl font-bold text-center text-white mb-6">Bildgalleri</h2>

//             {/* 📌 Grid-layout för bilder */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                 {images.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`Båt ${index + 1}`}
//                         className="w-full h-40 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
//                         onClick={() => setSelectedImageIndex(index)}
//                     />
//                 ))}
//             </div>

//             {/* 📌 Modal med bläddringsfunktion */}
//             {selectedImageIndex !== null && (
//                 <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
//                     <div className="relative max-w-full max-h-full">
//                         {/* Stängningsknapp */}
//                         <button
//                             className="absolute top-2 right-2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg hover:bg-gray-600"
//                             onClick={() => setSelectedImageIndex(null)}
//                         >
//                             ✕
//                         </button>

//                         {/* Föregående bild */}
//                         <button
//                             className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg hover:bg-gray-600"
//                             onClick={handlePrevImage}
//                         >
//                             ‹
//                         </button>

//                         {/* Visad bild */}
//                         <img src={images[selectedImageIndex]} alt="Förstorad bild" className="max-w-full max-h-screen rounded-lg" />

//                         {/* Nästa bild */}
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

// export default AssemblyGuide;


import React, { useState, useEffect } from "react";
import Mont1 from "../Images/montering/Mont1.jpg";
import Mont2 from "../Images/montering/Mont2.jpg";
import Mont3 from "../Images/montering/Mont3.jpg";
import Mont4 from "../Images/montering/Mont4.jpg";
import Mont5 from "../Images/montering/Mont5.jpg";
import Mont6 from "../Images/montering/Mont6.jpg";
import Mont7 from "../Images/montering/Mont7.jpg";
import Mont8 from "../Images/montering/Mont8.jpg";
import Mont9 from "../Images/montering/Mont9.jpg";
import Mont10 from "../Images/montering/Mont10.jpg";

const images = [Mont1, Mont2, Mont3, Mont4, Mont5, Mont6, Mont7, Mont8, Mont9, Mont10];

const AssemblyGuide: React.FC = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // 🔹 Funktion för att gå till nästa bild
    const handleNextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        }
    };

    // 🔹 Funktion för att gå till föregående bild
    const handlePrevImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
        }
    };

    // 🔹 Stäng modal
    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    // 🔹 Lyssna på tangenttryckningar (vänster/högerpil + esc)
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (selectedImageIndex !== null) {
                if (event.key === "ArrowRight") {
                    handleNextImage(); // Högerpil ➡️
                } else if (event.key === "ArrowLeft") {
                    handlePrevImage(); // Vänsterpil ⬅️
                } else if (event.key === "Escape") {
                    closeModal(); // ESC för att stänga
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImageIndex]); // 🔹 Lyssnar bara när modal är öppen

    return (
        <div className="container mx-auto p-4 ">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Bildguide</h2>

            {/* 📌 Grid-layout för bilder */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Båt ${index + 1}`}
                        className="w-full h-40 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                        onClick={() => setSelectedImageIndex(index)}
                    />
                ))}
            </div>

            {/* 📌 Modal med bläddringsfunktion */}
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
                    <div className="relative max-w-full max-h-full">
                        {/* 🔹 Stängningsknapp */}
                        <button
                            className="absolute top-2 right-2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg hover:bg-gray-600"
                            onClick={closeModal}
                        >
                            ✕
                        </button>

                        {/* 🔹 Föregående bild */}
                        <button
                            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg hover:bg-gray-600"
                            onClick={handlePrevImage}
                        >
                            ‹
                        </button>

                        {/* 🔹 Visad bild */}
                        <img src={images[selectedImageIndex]} alt="Förstorad bild" className="max-w-full max-h-screen rounded-lg" />

                        {/* 🔹 Nästa bild */}
                        <button
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg hover:bg-gray-600"
                            onClick={handleNextImage}
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AssemblyGuide;
