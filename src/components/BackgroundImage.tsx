
// import React, { useState } from "react";
// import PrincessTest from "../Images/PrincessTest.png";
// import Akterspegel from "../Images/Akterspegel.jpg";

// const BackgroundImage = ({ bgScale, text, textStyle }) => {
//     const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
//     const [dragging, setDragging] = useState(false);
//     const [startPos, setStartPos] = useState({ x: 0, y: 0 });
//     const [selectedImage, setSelectedImage] = useState("PrincessTest");

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

//     return (
//         <div className="flex flex-col items-center">
//             <select
//                 className="mb-4 p-2 border rounded"
//                 value={selectedImage}
//                 onChange={(e) => setSelectedImage(e.target.value)}
//             >
//                 <option value="PrincessTest">PrincessTest</option>
//                 <option value="Akterspegel">Akterspegel</option>
//             </select>

//             <div
//                 className="relative w-[600px] h-[400px] overflow-hidden border border-gray-300 rounded-lg"
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseUp}
//             >
//                 <img
//                     src={selectedImage === "PrincessTest" ? PrincessTest : Akterspegel}
//                     alt="Background"
//                     className="absolute"
//                     style={{ transform: `scale(${bgScale}) translate(${bgPosition.x}px, ${bgPosition.y}px)`, transformOrigin: "center" }}
//                 />
//                 <div style={textStyle}>{text || "Din text kommer att visas här..."}</div>
//             </div>
//         </div>
//     );
// };

// export default BackgroundImage;


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
        <div className="flex flex-col items-center">


            <div
                className="relative w-[600px] h-[400px] overflow-hidden border border-gray-300 rounded-lg"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
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
                    className="absolute"
                    style={{ transform: `scale(${bgScale}) translate(${bgPosition.x}px, ${bgPosition.y}px)`, transformOrigin: "center" }}
                />
                <div style={textStyle}>{text || "Din text kommer att visas här..."}</div>

            </div>
            <select
                className="mb-4 p-2 border rounded mt-5"
                value={selectedImage}
                onChange={(e) => setSelectedImage(e.target.value)}
            >
                <option value="PrincessTest">PrincessTest</option>
                <option value="Akterspegel">Akterspegel</option>
                <option value="uploaded">Uppladdad bild</option>
            </select>

            <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4 p-2 border rounded" />
        </div>
    );
};

export default BackgroundImage;
