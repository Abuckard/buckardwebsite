import React from "react";

const EmailInput = ({ email, setEmail }) => {
    return (
        <div className="flex flex-col items-center mb-4">
            <label className="mb-2 text-lg">Ange din e-post:</label>
            <input
                type="email"
                placeholder="Skriv din e-post..."
                className="p-2 border rounded w-64 text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    );
};

export default EmailInput;
