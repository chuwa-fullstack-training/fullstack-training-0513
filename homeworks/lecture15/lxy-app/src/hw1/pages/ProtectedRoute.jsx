import { Navigate } from "react-router-dom";
import { useMemo } from "react";

export default function ProtectedLayout({ children }) {
    const user = useMemo(() => localStorage.getItem("user"), []);

    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        <>
            {children}
        </>
    )
}