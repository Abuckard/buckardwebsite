// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminLogin = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();

//         if (username === "admin" && password === "password") {
//             alert("Inloggning lyckades!");
//             navigate("/admin");
//         } else {
//             setError("Fel användarnamn eller lösenord");
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-80">
//                 <h2 className="text-xl font-bold mb-4">Admin Login</h2>
//                 {error && <p className="text-red-500 mb-4">{error}</p>}
//                 <form onSubmit={handleLogin} className="flex flex-col">
//                     <label className="mb-2">Användarnamn:</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         className="p-2 border rounded mb-4"
//                     />

//                     <label className="mb-2">Lösenord:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="p-2 border rounded mb-4"
//                     />

//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition"
//                     >
//                         Logga in
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AdminLogin;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: username, password }), // 🟢 Bytt username -> email
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Något gick fel");
            }

            // 🔹 Spara JWT-token i localStorage
            localStorage.setItem("token", data.token);
            alert("Inloggning lyckades!");
            navigate("/admin");
        } catch (error: any) {
            setError(error.message);
        }
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md w-80  ">
                <h2 className="text-xl font-bold mb-4">Admin Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="flex flex-col">
                    <label className="mb-2">Email:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-2 border rounded mb-4"
                    />

                    <label className="mb-2">Lösenord:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border rounded mb-4"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition"
                    >
                        Logga in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
