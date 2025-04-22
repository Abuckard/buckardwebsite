// import { Navigate } from "react-router-dom";
// import React from "react";

// const RequireAuth = ({ children }: { children: JSX.Element }) => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//         return <Navigate to="/login" />;
//     }

//     return children;
// };

// export default RequireAuth;


import { Navigate } from "react-router-dom";
import React, { ReactNode } from "react";

const RequireAuth = ({ children }: { children: ReactNode }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default RequireAuth;
